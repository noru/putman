import { MessageType as Type } from './msg'

const FakeServerScriptId = '$fake$server'

class ContentScript {
  start() {
    chrome.runtime.onMessage.addListener(this.listener)
  }

  listener = request => {
    console.log(request)
    switch (request.type) {
      case Type.EnableInterceptor:
        this.injectFakeServer()
        alert('enable')
        // todo
        break
      case Type.DisableInterceptor:
        // todo
        break
    }
  }

  injectFakeServer() {
    if (!document.getElementById(FakeServerScriptId)) {
      let fakeServer = document.createElement('script')
      fakeServer.defer = false
      fakeServer.src = chrome.extension.getURL('./assets/lib/nise.min.js')
      fakeServer.type = 'text/javascript'
      fakeServer.id = FakeServerScriptId;
      (document.head || document.documentElement).appendChild(fakeServer)
    } else {
      // callback()
    }
    // sinonScript.onload = callback
  }
}

new ContentScript().start()
