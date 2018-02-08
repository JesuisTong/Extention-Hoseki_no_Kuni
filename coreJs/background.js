(() => {
  const onBeforeSendHeadersHandle = (details) => {
    if (details.url.indexOf('//i.pximg.net') > -1) {
      const rh = details.requestHeaders.map(i => {
        if (i.name === 'Referer') {
          i.value = 'https://www.pixiv.net';
        }
        return i;
      });
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