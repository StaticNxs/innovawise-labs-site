document.addEventListener("DOMContentLoaded", function(){

  const reveals=document.querySelectorAll(".reveal");

  const revealOnScroll=()=>{
    const trigger=window.innerHeight*0.85;
    reveals.forEach(el=>{
      const top=el.getBoundingClientRect().top;
      if(top<trigger){el.classList.add("active")}
    });
  };

  window.addEventListener("scroll",revealOnScroll);
  revealOnScroll();

});
