const track=document.getElementById('xp-ticker');
if(track){
  const first=track.scrollWidth;
  track.innerHTML+=track.innerHTML;
  let x=0,spd=0.35;
  function loop(){x+=spd;if(x>=first)x-=first;track.style.transform=`translateX(-${x}px)`;requestAnimationFrame(loop);}
  loop();
}
