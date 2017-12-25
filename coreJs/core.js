(function () {
  "use strict"
  var bgList = ['antaku', 'cinnsar', 'dia', 'empht', 'phos'];
  var bg = document.querySelector('._bg');
  bg.style.backgroundImage = `url('/icon/GemZoom/bg_${bgList[Math.floor(Math.random() * 5)]}.jpg')`;
}())