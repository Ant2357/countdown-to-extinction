function updateCountdown() {
  const targetDate = new Date("2025-07-05T04:18:00+09:00");
  const now = new Date();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("countdown").textContent = "人類は滅亡しました";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("countdown").textContent =
    `${String(days).padStart(2, '0')}日 ` +
    `${String(hours).padStart(2, '0')}時間 ` +
    `${String(minutes).padStart(2, '0')}分 ` +
    `${String(seconds).padStart(2, '0')}秒`;
}

setInterval(updateCountdown, 1000);
updateCountdown();