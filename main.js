function hearts() {
  const create = document.createElement('div');
  const container = document.getElementById('ask');

  create.classList.add('hearts');
  create.innerHTML = `❤️`;
  create.style.left = Math.random() * 100 + 'vw';
  create.style.animationDuration = Math.random() * 3 + 2 + 's';

  container.appendChild(create);
}

document.getElementById("yes").onclick = function () { 
  location.href = "public/yay.html";
};

function moveButton() {
  var x = Math.random() * (window.innerWidth - document.getElementById('no').offsetWidth);
  var y = Math.random() * (window.innerHeight - document.getElementById('no').offsetHeight);
  document.getElementById('no').style.left = `${x}px`;
  document.getElementById('no').style.top = `${y}px`;
}

const button = document.getElementById('no');
button.addEventListener('mouseover', function() {
  moveButton();
})

button.addEventListener('mousedown', function() {
  moveButton();
})

setInterval(hearts, 1000);

