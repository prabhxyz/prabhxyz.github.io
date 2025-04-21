/* ===== infinite ticker powered by JS translateX ===== */
const track = document.getElementById('xp-ticker');

if (track) {
  /* duplicate slides until track width ≥ 2×viewport */
  const firstWidth = track.scrollWidth;
  while (track.scrollWidth < window.innerWidth * 2) {
    track.innerHTML += track.innerHTML;
  }

  let offset = 0;
  const speed = 0.35;   // pixels per frame ≈ 21 px/sec at 60 fps

  function loop() {
    offset += speed;
    if (offset >= firstWidth) offset -= firstWidth;  // reset after one original set
    track.style.transform = `translateX(-${offset}px)`;
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);
}
