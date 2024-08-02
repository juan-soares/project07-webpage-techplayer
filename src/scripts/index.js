const tracklist = [
  {
    title: "Front-End",
    original: "Dance of the Knights - Prokofiev",
    track: "./public/assets/tracks/frontend.mp3",
    feat: "HTML, CSS & JavaScript.",
  },
  {
    title: "Front-End Remix",
    original: "Dance of the Knights - Prokofiev (Remix)",
    track: "./public/assets/tracks/frontend-remix.mp3",
    feat: "Angular, React & Vue.",
  },
  {
    title: "Back-End",
    original: "Requiem - Mozart",
    track: "./public/assets/tracks/backend.mp3",
    feat: "Java, Node.js & Phyton.",
  },
  {
    title: "Back-End Remix",
    original: "Requiem - Mozart (Remix)",
    track: "./public/assets/tracks/backend-remix.mp3",
    feat: "Spring Boot, Express & Django.",
  },
];

const h1TrackTitle = document.getElementById("track-title");
const h2TrackOriginal = document.getElementById("track-original");
const spanFeat = document.getElementById("track-feat");
const audioPlayer = document.querySelector("audio");
const btnBackward = document.getElementById("btn-backward");
const btnPlayPause = document.getElementById("btn-play-pause");
const btnForward = document.getElementById("btn-forward");

let actualTrack = 0;

function updateTrackInfo() {
  h1TrackTitle.textContent = tracklist[actualTrack].title;
  h2TrackOriginal.textContent = tracklist[actualTrack].original;
  spanFeat.textContent = tracklist[actualTrack].feat;
  audioPlayer.src = tracklist[actualTrack].track;
}

function playTrack() {
  btnPlayPause.children[0].classList.remove("fa-play");
  btnPlayPause.children[0].classList.add("fa-pause");
  audioPlayer.play();
}

function pauseTrack() {
  btnPlayPause.children[0].classList.remove("fa-pause");
  btnPlayPause.children[0].classList.add("fa-play");
  audioPlayer.pause();
}

function toggleReproduction() {
  if (audioPlayer.paused) {
    playTrack();
  } else {
    pauseTrack();
  }
}

function forwardTrack() {
  actualTrack++;
  updateTrackInfo();
  playTrack();
}

function backwardTrack() {
  actualTrack--;
  updateTrackInfo();
  playTrack();
}

btnPlayPause.addEventListener("click", toggleReproduction);
btnForward.addEventListener("click", forwardTrack);
btnBackward.addEventListener("click", backwardTrack);
