var button = document.querySelector('div');

button.onmousedown = function(e) {
  var x = (e.offsetX == undefined) ? e.layerX : e.offsetX;
  var y = (e.offsetY == undefined) ? e.layerY : e.offsetY;
  var circle = document.createElement('div');
  circle.className = 'circle';
  circle.style.top = y + 'px';
  circle.style.left = x + 'px';
  button.appendChild(circle);
  setTimeout(function() {
    button.removeChild(circle);
  }, 1000);
}

alsolike(
  "XJNKBg", "Stickers on the Box",
  "xrCpw", "CSS 3D Viewport",
  "gIfke", "Loaders"
);