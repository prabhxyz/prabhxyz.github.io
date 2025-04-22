const ham=document.getElementById('hamburger'),nav=document.getElementById('nav-links');
ham.addEventListener('click',()=>nav.classList.toggle('open'));

const secs=[...document.querySelectorAll('section[id]')];
addEventListener('scroll',()=>{
  const y=scrollY+100;
  secs.forEach(s=>{
    const a=document.querySelector(`a[href="#${s.id}"]`);
    a&&a.classList.toggle('active',y>=s.offsetTop && y<s.offsetTop+s.offsetHeight);
  });
});

addEventListener('load',()=>document.getElementById('loader').classList.add('hide'));

const cur=document.getElementById('cursor');
addEventListener('mousemove',e=>{
  cur.style.top=`${e.clientY}px`;cur.style.left=`${e.clientX}px`;
});

(()=>{
  const b=new Date('2007-05-19'),n=new Date();
  let a=n.getFullYear()-b.getFullYear();
  const m=n.getMonth()-b.getMonth();
  if(m<0||(m===0&&n.getDate()<b.getDate())) a--;
  document.getElementById('age-title').textContent=`${a}y/o ai researcher`;
})();
document.getElementById('year').textContent=new Date().getFullYear();
