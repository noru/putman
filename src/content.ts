const FakeServerScriptId = '$fake$server'

class ContentScript {
  start() {
    chrome.runtime.onMessage
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

setTimeout(
  () => {
    new ContentScript().injectFakeServer()
  },
  2000
)
