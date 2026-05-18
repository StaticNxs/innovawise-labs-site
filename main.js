document.addEventListener("DOMContentLoaded", function(){

                            // Scroll Reveal
                            const revealEls = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const revealOnScroll = () => {
          const trigger = window.innerHeight * 0.88;
          revealEls.forEach(el => {
                  if (el.getBoundingClientRect().top < trigger) el.classList.add("active");
          });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

                            // Staggered grid children
                            document.querySelectorAll(".features-grid, .services-grid, .testimonials-grid, .values-grid, .expertise-grid, .diff-grid, .grid-3, .grid-2").forEach(grid => {
                                  grid.querySelectorAll(":scope > *").forEach((child, i) => {
                                          child.style.transitionDelay = (i * 0.1) + "s";
                                  });
                            });

});
