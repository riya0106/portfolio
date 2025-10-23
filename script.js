// Theme toggle
const themeToggle=document.getElementById('themeToggle');themeToggle?.addEventListener('change',()=>{document.body.classList.toggle('light-mode');});

// Scroll reveal
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');}})});
document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

// Scroll top
const scrollBtn=document.getElementById('scrollTop');window.addEventListener('scroll',()=>{scrollBtn.style.display=window.scrollY>300?'block':'none';});scrollBtn?.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// Typing animation
const roles=['Data Scientist','AI Enthusiast','Developer'];let i=0;const typing=document.querySelector('.typing');if(typing){setInterval(()=>{typing.textContent=roles[i];i=(i+1)%roles.length;},2000);} 

// Floating particles background
const canvas=document.getElementById('bg');if(canvas){const ctx=canvas.getContext('2d');canvas.width=window.innerWidth;canvas.height=window.innerHeight;const particles=[];for(let i=0;i<60;i++){particles.push({x:Math.random()*canvas.width,y:Math.random()*canvas.height,r:Math.random()*2+1,dx:(Math.random()-0.5)*0.5,dy:(Math.random()-0.5)*0.5});}function animate(){ctx.clearRect(0,0,canvas.width,canvas.height);particles.forEach(p=>{ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle='rgba(143,148,251,0.6)';ctx.fill();p.x+=p.dx;p.y+=p.dy;if(p.x<0||p.x>canvas.width)p.dx*=-1;if(p.y<0||p.y>canvas.height)p.dy*=-1;});requestAnimationFrame(animate);}animate();window.addEventListener('resize',()=>{canvas.width=window.innerWidth;canvas.height=window.innerHeight;});}

// Contact form alert
const contactForm=document.getElementById('contactForm');contactForm?.addEventListener('submit',e=>{e.preventDefault();alert('Message sent!');contactForm.reset();});