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
    feat: "Java, Node.js & Python.",
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

let actualTrackIndex = 0;

function updateTrackInfo() {
  const actualTrackInfo = tracklist[actualTrackIndex];
  h1TrackTitle.textContent = actualTrackInfo.title;
  h2TrackOriginal.textContent = actualTrackInfo.original;
  spanFeat.textContent = actualTrackInfo.feat;
  audioPlayer.src = actualTrackInfo.track;

  const updateButtonStates = () => {
    btnBackward.disabled = actualTrackIndex === 0;
    btnForward.disabled = actualTrackIndex === tracklist.length - 1;
  };

  updateButtonStates();
}

function playTrack() {
  btnPlayPause.children[0].classList.replace("fa-play", "fa-pause");
  audioPlayer.play();
}

function pauseTrack() {
  btnPlayPause.children[0].classList.replace("fa-pause", "fa-play");
  audioPlayer.pause();
}

function toggleReproduction() {
  audioPlayer.paused ? playTrack() : pauseTrack();
}

function forwardTrack() {
  actualTrackIndex++;
  updateTrackInfo();
  playTrack();
}

function backwardTrack() {
  actualTrackIndex--;
  updateTrackInfo();
  playTrack();
}

btnPlayPause.addEventListener("click", toggleReproduction);
btnForward.addEventListener("click", forwardTrack);
btnBackward.addEventListener("click", backwardTrack);

updateTrackInfo();
