import { MessageType } from '../msg'

class MessageService {
  currentTab = () => chrome.devtools.inspectedWindow.tabId
  sendMessage = msg => chrome.tabs.sendMessage(this.currentTab(), msg)

  enableInterceptor() {
    this.sendMessage({ type: MessageType.EnableInterceptor })
  }

  disableInterceptor() {
    this.sendMessage({ type: MessageType.DisableInterceptor })
  }
}

export default new MessageService()
