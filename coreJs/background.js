(() => {
  const onBeforeSendHeadersHandle = (details) => {
    if (details.url.indexOf('//i.pximg.net') > -1) {
      const rh = [
        ...details.requestHeaders,
        {
          name: 'Referer',
          value: 'https://www.pixiv.net'
        }
      ];
      return {requestHeaders: rh};
    }
    return {requestHeaders: details.requestHeaders};
  };
  chrome.webRequest.onBeforeSendHeaders.addListener(
    onBeforeSendHeadersHandle,
    {urls: ["<all_urls>"]},
    ["blocking", "requestHeaders"]
  )
})()

function historyListen() {
  chrome.history.onVisited.addListener()
}

// historyListen();