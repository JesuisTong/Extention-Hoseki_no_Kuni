// console.error('fuck u');

(function () {
  var div = document.createElement('div');
  div.className = 'chrome_console_float';
  div.innerHTML = 'CC';
  document.body.appendChild(div);

  div.addEventListener('click', function (e) {
    e.stopPropagation();
    e.preventDefault();
    console.log('clicked!');
    div.style.display = 'none';
  });

})()