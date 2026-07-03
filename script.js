const scene = document.getElementById("scene");
const audio = document.getElementById("audio");
const vinyl = document.getElementById("vinyl");

let isPlaying = false;

function togglePlay() {

  if (!isPlaying) {
    audio.play();
    scene.classList.add("playing");
  } else {
    audio.pause();
    scene.classList.remove("playing");
  }

  isPlaying = !isPlaying;
}

/* 点击任何地方都可以播放（你也可以后面再加区域限制） */
scene.addEventListener("click", togglePlay);

/* 空格键 */
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    togglePlay();
  }
});
