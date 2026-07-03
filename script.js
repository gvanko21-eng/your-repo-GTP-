const scene = document.getElementById("scene");
const audio = document.getElementById("audio");

let isPlaying = false;

/**
 * 🎯 唱机区域（用“百分比坐标”定义）
 * 你不需要调 CSS，只需要改这里（以后也很容易）
 */
const recordZone = {
  x: 0.52,   // 横向位置（0~1）
  y: 0.72,   // 纵向位置（0~1）
  r: 0.12    // 半径范围（点击容错）
};

function isInRecordZone(x, y) {
  const dx = x - recordZone.x;
  const dy = y - recordZone.y;
  return Math.sqrt(dx * dx + dy * dy) < recordZone.r;
}

function togglePlay() {
  if (!isPlaying) {
    audio.play();
  } else {
    audio.pause();
  }
  isPlaying = !isPlaying;
}

/* 🎯 点击检测 */
scene.addEventListener("click", (e) => {
  const rect = scene.getBoundingClientRect();

  const x = (e.clientX - rect.left) / rect.width;
  const y = (e.clientY - rect.top) / rect.height;

  // 只在“唱机区域”才触发
  if (isInRecordZone(x, y)) {
    togglePlay();
  }
});

/* ⌨️ 空格键控制 */
document.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault();
    togglePlay();
  }
});
