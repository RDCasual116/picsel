const target=document.querySelectorAll(".eitem");

const obser=new IntersectionObserver(entry=>{
  entry.forEach((ent)=>{
    ent.target.classList.toggle("eishow",ent.isIntersecting);
  });
})
target.forEach((targ)=>{
  obser.observe(targ)
});