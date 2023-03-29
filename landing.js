let cards = document.querySelectorAll(".cards")

let observer =new IntersectionObserver((entries)=> {

    entries.forEach((entry) => {
    entry.target.classList.toggle("motrar",entry.isIntersecting)
    });
     },
  
)
cards.forEach(seccion =>observer.observe(seccion) );

