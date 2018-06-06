(function () {
  var dom = document.querySelector('.qrCode');
  document.addEventListener('DOMContentLoaded', function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (!tabs.length) {
        return;
      }
      setTimeout(() => {
        new QRCode(dom, {
          width: 177,
          height: 177,
          text: tabs[0].url
        })
      }, 200);
    });
  });
}())