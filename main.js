function hearts() {
  const create = document.createElement('div');
  const container = document.getElementById('container');

  create.classList.add('hearts');
  create.innerHTML = `❤️`;
  create.style.left = Math.random() * 100 + 'vw';
  create.style.animationDuration = Math.random() * 3 + 2 + 's';

  container.appendChild(create);
}

setInterval(hearts, 600);
