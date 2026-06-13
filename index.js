(function(){
  var container = document.getElementById('container');
  var startButton = document.getElementById('startButton');
  var resetButton = document.getElementById('resetButton');
  var scoreElement = document.getElementById('score');
  var score = 0;
  var gameInterval;

  container.addEventListener('click', function (event) {
    var target = event.target;
    if (target.classList.contains('mole')) {
      target.classList.add('hit');
      target.style.transform = 'translateX(0.8cm)';
      target.style.opacity = 0;
      score++;
      scoreElement.textContent = '海扁魔王次數: ' + score;
      target.addEventListener('transitionend', function () {
        target.remove();
      });
    }
  });

  function createMole() {
    var mole = document.createElement('div');
    mole.className = 'mole';
    mole.style.top = getRandomPosition(450) + 'px';
    mole.style.left = getRandomPosition(450) + 'px';
    container.appendChild(mole);
  }

  function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
  }

  startButton.addEventListener('click', function () {
    if (!gameInterval) {
      score = 0;
      scoreElement.textContent = '海扁魔王次數: ' + score;
      gameInterval = setInterval(createMole, 1000);
    }
  });

  resetButton.addEventListener('click', function () {
    clearInterval(gameInterval);
    gameInterval = null;
    container.innerHTML = '';
    score = 0;
    scoreElement.textContent = '海扁魔王次數: ' + score;
  });
})();