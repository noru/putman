import React, { useReducer } from 'react'
import { List, Avatar, Input, Icon, Button, Switch } from 'antd'
import produce from 'immer'
import { Func } from 'noru-utils'
import RegEx from '../RegEx'
import cls from 'classname'
import './index.scss'
import LeftRight from '#/components/LeftRight'

enum Actions {
  ToggleMode,
  ToggleMultiSelection,
  SingleSelect,
  Clear,
}

interface State {
  singleSelected: number
  multiSelected: Set<number>
  multiSelectMode: boolean
}

const initialState: Readonly<State> = {
  singleSelected: -1,
  multiSelected: new Set<number>(),
  multiSelectMode: false,
}

function reducer(state: State, action: { type: Actions; payload?: any }) {
  let { type, payload } = action
  switch (type) {
    case Actions.SingleSelect:
      return produce(state, draft => void (draft.singleSelected = payload))

    case Actions.ToggleMode:
      return produce(state, draft => void (draft.multiSelectMode = !draft.multiSelectMode))

    case Actions.ToggleMultiSelection:
      return produce(state, draft => {
        let newSet = new Set(draft.multiSelected)
        if (draft.multiSelected.has(payload)) {
          newSet.delete(payload)
        } else {
          newSet.add(payload)
        }
        draft.multiSelected = newSet
      })
    case Actions.Clear:
      return initialState
  }
  return state
}

function useActions(): [State, Func<void>, Func<void>, Func<void>, Func<void>] {
  let [state, dispatch] = useReducer(reducer, initialState)

  function setSingleSelected(idx: number) {
    dispatch({ type: Actions.SingleSelect, payload: idx })
  }

  function toggleMode() {
    dispatch({ type: Actions.ToggleMode })
  }

  function toggleMultiSelection(idx: number) {
    dispatch({ type: Actions.ToggleMultiSelection, payload: idx })
  }

  function clear() {
    dispatch({ type: Actions.Clear })
  }

  return [state, setSingleSelected, toggleMultiSelection, toggleMode, clear]
}

interface Props {
  requests: any[]
}

function RequestList({ requests }: Props) {
  let [
    { multiSelected, singleSelected, multiSelectMode },
    setSingleSelected,
    toggleMultiSelection,
    toggleMode,
    clear,
  ] = useActions()

  return (
    <div className="request-list column is-two-fifths">
      <LeftRight className="actions">
        <Button type="primary" disabled={!multiSelectMode || multiSelected.size === 0}>
          <Icon type="plus-circle" />
          Interceptors
        </Button>
        <>
          <Switch
            checkedChildren="Select"
            unCheckedChildren="Preview"
            checked={multiSelectMode}
            onChange={toggleMode}
          />
          <Icon className="clear-btn" type="stop" onClick={clear} />
        </>
      </LeftRight>
      <div className="filter">
        <Input
          prefix={<Icon type="filter" style={{ color: '#c9c9c9' }} />}
          suffix={<RegEx enabled={true} onClick={() => 1} />}
          placeholder="filter..."
          allowClear
          onChange={() => 1}
        />
      </div>
      <List
        itemLayout="horizontal"
        dataSource={requests}
        renderItem={(item, i) => (
          <List.Item
            key={i}
            className={cls('request-item', singleSelected === i && 'selected')}
            onClick={() => (multiSelectMode ? toggleMultiSelection : setSingleSelected)(i)}
          >
            <List.Item.Meta
              avatar={
                multiSelectMode ? (
                  multiSelected.has(i) ? (
                    <Avatar icon="check" className="avatar-checked" />
                  ) : (
                    <Avatar className="avatar-unchecked" />
                  )
                ) : (
                  <Avatar className={'avatar-' + item.method}>{item.method[0]}</Avatar>
                )
              }
              title={<span>{item.host}</span>}
              description={
                <span>
                  <span>{item.path}</span>
                  <span>{item.search}</span>
                </span>
              }
            />
          </List.Item>
        )}
      />
    </div>
  )
}
export default RequestList
