/* ===== ticker: duplicate once + let CSS animation do the work ===== */
const track = document.getElementById('xp-ticker');
if (track) {
  /* duplicate slides one time so width ≥ 2×original => seamless loop */
  track.innerHTML += track.innerHTML;
  /* add class that triggers CSS animation */
  track.classList.add('run');
}

/* ===== custom cursor (unchanged) ===== */
const cur = document.getElementById('cursor');
document.addEventListener('mousemove', e=>{
  cur.style.top=`${e.clientY}px`;
  cur.style.left=`${e.clientX}px`;
});

/* ===== dynamic age subtitle (unchanged) ===== */
(function(){
  const bday=new Date('2007-05-19'),now=new Date();
  let age=now.getFullYear()-bday.getFullYear();
  const m=now.getMonth()-bday.getMonth();
  if(m<0||(m===0&&now.getDate()<bday.getDate())) age--;
  document.getElementById('age-title').textContent=`${age}y/o ai researcher`;
})();
