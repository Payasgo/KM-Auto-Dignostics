
document.addEventListener('DOMContentLoaded',()=>{
const cards=document.querySelectorAll('.feature-card');
const obs=new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
cards.forEach((c,i)=>{
setTimeout(()=>c.classList.add('show'),i*150);
});
}
});
},{threshold:0.2});
const section=document.querySelector('.about-features');
if(section) obs.observe(section);
});
