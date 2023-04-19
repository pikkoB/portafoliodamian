const hiddenElements = document.querySelectorAll(".hidden")

let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add("show")
        }else {
            entry.target.classList.remove("show")
        }
    })
}, {
    threshold: 0.5,
});

hiddenElements.forEach((element) => observer.observe(element));