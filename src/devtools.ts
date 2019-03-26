chrome.devtools.panels.create('PutMan', 'img/icon.jpg', 'index.html', _panel => {
  console.info('it works')
})

chrome.devtools.network.onRequestFinished.addListener(details => {
  // cache: { }
  // connection: "103569"
  // request: { method: "POST", url: "https://www.airwallex.com/api/wallet/getPaymentValidationSchema?fullSchema=false", httpVersion: "http/2.0", headers: Array(16), queryString: Array(1), … }
  // response: { status: 200, statusText: "", httpVersion: "http/2.0", headers: Array(11), cookies: Array(0), … }
  // serverIPAddress: "112.74.141.159"
  // startedDateTime: "2019-03-26T12:34:29.861Z"
  // time: 251.9449999994042
  // timings: { blocked: 1.0759999995112886, dns: 4.816, ssl: 164.483, connect: 169.824, send: 0.3329999999999984, … }
  // _initiator: { type: "script", stack: { … } }
  // _priority: "High"
  // _resourceType: "xhr"

  let { _resourceType } = details
  console.log(details)
  if (_resourceType === 'xhr') {
    details.getContent(dispatcher)
  }
})

function dispatcher(body) {
  console.log(body)
}
