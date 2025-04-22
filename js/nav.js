/* burger toggle */
const ham=document.getElementById('hamburger'),nav=document.getElementById('nav-links');
ham.addEventListener('click',()=>nav.classList.toggle('open'));

/* scroll spy */
const secs=[...document.querySelectorAll('section[id]')];
addEventListener('scroll',()=>{
  const y=scrollY+100;
  secs.forEach(s=>{
    const a=document.querySelector(`a[href="#${s.id}"]`);
    a&&a.classList.toggle('active',y>=s.offsetTop&&y<s.offsetTop+s.offsetHeight);
  });
});

/* loader hide */
addEventListener('load',()=>document.getElementById('loader').classList.add('hide'));

/* cursor */
const cur=document.getElementById('cursor');
addEventListener('mousemove',e=>{
  cur.style.top=`${e.clientY}px`;
  cur.style.left=`${e.clientX}px`;
});

/* dynamic age */
(()=>{
  const b=new Date('2007-05-19'),n=new Date();
  let a=n.getFullYear()-b.getFullYear();
  const m=n.getMonth()-b.getMonth();
  if(m<0||(m===0&&n.getDate()<b.getDate())) a--;
  document.getElementById('age-title').textContent=`${a}y/o ai researcher`;
})();
