const audioPlayer = document.querySelector("audio");
const btnBackward = document.getElementById("btn-backward");
const btnPlayPause = document.getElementById("btn-play-pause");
const btnForward = document.getElementById("btn-forward");

function toggleReproduction() {
  if (audioPlayer.paused) {
    btnPlayPause.children[0].classList.remove("fa-play");
    btnPlayPause.children[0].classList.add("fa-pause");
    audioPlayer.play();
  } else {
    btnPlayPause.children[0].classList.remove("fa-pause");
    btnPlayPause.children[0].classList.add("fa-play");
    audioPlayer.pause();
  }
}

btnPlayPause.addEventListener("click", toggleReproduction);
