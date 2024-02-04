function hearts() {
  const create = document.createElement('div');
  const container = document.getElementById('container');

  create.classList.add('hearts');
  create.innerHTML = `❤️`;
  create.style.left = Math.random() * 100 + 'vw';
  create.style.animationDuration = Math.random() * 3 + 2 + 's';

  container.appendChild(create);
}

document.getElementById("yes").onclick = function () { 
  location.href = "yay.html";
};

const maxWidth = 600;
const maxHeight = 600;

const button = document.getElementById('no');
button.addEventListener('mouseover', function() {
  button.style.left = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
  button.style.top = Math.floor(Math.random() * (maxWidth + 1)) + 'px';
})

setInterval(hearts, 1000);

