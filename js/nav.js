/* ===== nav burger ===== */
const ham   = document.getElementById('hamburger');
const links = document.getElementById('nav-links');
ham.addEventListener('click', () => links.classList.toggle('open'));

/* ===== scroll‑spy ===== */
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const pos = window.scrollY + 100;
  sections.forEach(s => {
    const link = document.querySelector(`a[href="#${s.id}"]`);
    if (!link) return;
    link.classList.toggle('active', pos >= s.offsetTop && pos < s.offsetTop + s.offsetHeight);
  });
});

/* ===== loader hide ===== */
window.addEventListener('load', () => document.getElementById('loader').classList.add('hide'));

/* ===== custom cursor ===== */
const cur = document.getElementById('cursor');
document.addEventListener('mousemove', e => {
  cur.style.top  = `${e.clientY}px`;
  cur.style.left = `${e.clientX}px`;
});

/* ===== dynamic age subtitle ===== */
(function(){
  const bday   = new Date('2007-05-19');
  const today  = new Date();
  let age      = today.getFullYear() - bday.getFullYear();
  const mDiff  = today.getMonth() - bday.getMonth();
  if (mDiff < 0 || (mDiff === 0 && today.getDate() < bday.getDate())) age--;
  document.getElementById('age-title').textContent = `${age}y/o ai researcher`;
})();
