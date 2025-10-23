const cursor=document.querySelector('.cursor');
document.addEventListener('mousemove',e=>{
  cursor.style.left=e.clientX+'px';
  cursor.style.top=e.clientY+'px';
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');}});
});
document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

const scrollBtn=document.getElementById('scrollTop');
window.addEventListener('scroll',()=>{scrollBtn.style.display=window.scrollY>300?'block':'none';});
scrollBtn?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

const roles=['Data Scientist','AI Enthusiast','Developer'];
let i=0;const typing=document.querySelector('.typing');
if(typing){setInterval(()=>{typing.textContent=roles[i];i=(i+1)%roles.length;},2000);}

// Floating blobs
const canvas=document.getElementById('blobCanvas');
if(canvas){
  const ctx=canvas.getContext('2d');
  let blobs=[];
  const createBlob=()=>({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*80+40,dx:(Math.random()-0.5)*0.2,dy:(Math.random()-0.5)*0.2,color:`rgba(${6+Math.random()*20},${182+Math.random()*30},${212+Math.random()*40},0.2)`});
  for(let i=0;i<12;i++)blobs.push(createBlob());
  const animate=()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    blobs.forEach(b=>{
      ctx.beginPath();ctx.fillStyle=b.color;
      ctx.arc(b.x,b.y,b.r,0,Math.PI*2);ctx.fill();
      b.x+=b.dx;b.y+=b.dy;
      if(b.x<0||b.x>canvas.width)b.dx*=-1;
      if(b.y<0||b.y>canvas.height)b.dy*=-1;
    });
    requestAnimationFrame(animate);
  };
  canvas.width=window.innerWidth;canvas.height=window.innerHeight;
  animate();
  window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});
}
