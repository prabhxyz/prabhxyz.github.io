/* endless horizontal ticker */
const track=document.getElementById('xp-ticker');
if(track){
  const firstW=track.scrollWidth;
  track.innerHTML+=track.innerHTML;           // duplicate once
  let x=0,spd=0.35;
  function move(){
    x+=spd;if(x>=firstW)x-=firstW;
    track.style.transform=`translateX(-${x}px)`;
    requestAnimationFrame(move);
  }
  move();
}
