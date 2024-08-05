// Dataset
const tracklist = [
  {
    cover: "./public/assets/covers/frontend.jpeg",
    title: "Front-End",
    original: "Dance of the Knights - Prokofiev",
    track: "./public/assets/tracks/frontend.mp3",
    feat: "HTML, CSS & JavaScript.",
  },
  {
    cover: "./public/assets/covers/frontend-remix.jpeg",
    title: "Front-End Remix",
    original: "Dance of the Knights - Prokofiev (Remix)",
    track: "./public/assets/tracks/frontend-remix.mp3",
    feat: "Angular, React & Vue.",
  },
  {
    cover: "./public/assets/covers/backend.jpeg",
    title: "Back-End",
    original: "Requiem - Mozart",
    track: "./public/assets/tracks/backend.mp3",
    feat: "Java, Node.js & Python.",
  },
  {
    cover: "./public/assets/covers/backend-remix.jpeg",
    title: "Back-End Remix",
    original: "Requiem - Mozart (Remix)",
    track: "./public/assets/tracks/backend-remix.mp3",
    feat: "Spring Boot, Express & Django.",
  },
  {
    cover: "./public/assets/covers/webdesign.jpeg",
    title: "Web Design",
    original: "Clair de Lune - Debussy",
    track: "./public/assets/tracks/webdesign.mp3",
    feat: "Photoshop, Axure & InVision.",
  },
  {
    cover: "./public/assets/covers/webdesign-remix.jpeg",
    title: "Web Design Remix",
    original: "Clair de Lune - Debussy (Remix)",
    track: "./public/assets/tracks/webdesign-remix.mp3",
    feat: "Adobe, Figma & Sketch.",
  },
  {
    cover: "./public/assets/covers/devops.jpeg",
    title: "DevOps",
    original: "Danse Macabre - Saint-Saëns",
    track: "./public/assets/tracks/devops.mp3",
    feat: "Hudson, Vagrant & Jenkins",
  },
  {
    cover: "./public/assets/covers/devops-remix.jpeg",
    title: "DevOps Remix",
    original: "Danse Macabre - Saint-Saëns (Remix)",
    track: "./public/assets/tracks/devops-remix.mp3",
    feat: "Docker, Kubernetes & AWS.",
  },

];

// DOM Elements
const imgTrackCover = document.getElementById("track-cover");
const h1TrackTitle = document.getElementById("track-title");
const h2TrackOriginal = document.getElementById("track-original");
const spanFeat = document.getElementById("track-feat");
const audioPlayer = document.querySelector("audio");
const btnBackward = document.getElementById("btn-backward");
const btnPlayPause = document.getElementById("btn-play-pause");
const btnForward = document.getElementById("btn-forward");

// Functions & Logic
let actualTrackIndex = 0;

function updateTrackInfo() {
  const actualTrackInfo = tracklist[actualTrackIndex];
  imgTrackCover.src = actualTrackInfo.cover;
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

// Event Listeners
btnPlayPause.addEventListener("click", toggleReproduction);
btnForward.addEventListener("click", forwardTrack);
btnBackward.addEventListener("click", backwardTrack);

// Initializer
updateTrackInfo();
