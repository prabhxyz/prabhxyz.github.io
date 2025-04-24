/* ===== burger toggle (only when navbar is visible) ===== */
const ham   = document.getElementById('hamburger'),
      nav   = document.getElementById('nav-links'),
      navbar= document.querySelector('.navbar');

if (getComputedStyle(navbar).display !== 'none') {
  /* desktop / tablet */
  ham.addEventListener('click', () => nav.classList.toggle('open'));

  /* scroll-spy */
  const secs=[...document.querySelectorAll('section[id]')];
  addEventListener('scroll',()=>{
    const y=scrollY+100;
    secs.forEach(s=>{
      const a=document.querySelector(`a[href="#${s.id}"]`);
      a && a.classList.toggle('active',y>=s.offsetTop && y<s.offsetTop+s.offsetHeight);
    });
  });
}

/* ===== loader hide ===== */
addEventListener('load',()=>document.getElementById('loader').classList.add('hide'));

/* ===== cursor (skip on touch devices) ===== */
if (!matchMedia('(pointer:coarse)').matches) {
  const cur=document.getElementById('cursor');
  addEventListener('mousemove',e=>{
    cur.style.top=`${e.clientY}px`;
    cur.style.left=`${e.clientX}px`;
  });
} else {
  document.getElementById('cursor').style.display='none';
}

/* ===== dynamic age ===== */
(()=>{
  const b=new Date('2007-05-19'), n=new Date();
  let age=n.getFullYear()-b.getFullYear();
  const m=n.getMonth()-b.getMonth();
  if (m<0 || (m===0 && n.getDate()<b.getDate())) age--;
  document.getElementById('age-title').textContent=`${age}y/o ai researcher`;
})();

/* ===== dynamic footer year ===== */
document.getElementById('year').textContent = new Date().getFullYear();
