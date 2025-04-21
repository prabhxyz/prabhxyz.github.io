/* ===== hamburger toggle ===== */
const ham   = document.getElementById('hamburger');
const links = document.getElementById('nav-links');
ham.addEventListener('click', () => links.classList.toggle('open'));

/* ===== scroll‑spy ===== */
const secs = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const pos = window.scrollY + 100;
  secs.forEach(s=>{
    const a = document.querySelector(`a[href="#${s.id}"]`);
    if(!a) return;
    a.classList.toggle('active', pos>=s.offsetTop && pos<s.offsetTop+s.offsetHeight);
  });
});

/* ===== loader hide ===== */
window.addEventListener('load', ()=>document.getElementById('loader').classList.add('hide'));

/* ===== custom cursor ===== */
const cur = document.getElementById('cursor');
document.addEventListener('mousemove', e=>{
  cur.style.top=`${e.clientY}px`;
  cur.style.left=`${e.clientX}px`;
});

/* ===== dynamic age ===== */
(() =>{
  const b = new Date('2007-05-19'), n = new Date();
  let age = n.getFullYear() - b.getFullYear();
  const m  = n.getMonth() - b.getMonth();
  if(m<0 || (m===0 && n.getDate() < b.getDate())) age--;
  document.getElementById('age-title').textContent = `${age}y/o ai researcher`;
})();
