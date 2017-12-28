(function () {
  var dom = document.querySelector('.qrCode');
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    if (!tabs.length) {
      return;
    }
    new QRCode(dom, {
      width: 177,
      height: 177,
      text: tabs[0].url
    })
  });
}())