// LocomotiveScroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


let cot = document.querySelector("#elem-container")
let fixed = document.querySelector(".fixed-image")

cot.addEventListener("mouseenter", () => {
    fixed.style.display = "block"
});

cot.addEventListener("mouseleave", () => {
    fixed.style.display = "none"
});




function animate_effect_img(){
    let elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
    e.addEventListener("mouseenter",() => {
       let src = e.getAttribute("src")
       fixed.style.backgroundImage = `url(${src})`
        
    })
    
})
}



function Swpier(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        spaceBetween: 30,
        pagination: {
        el: ".swiper-pagination",
        clickable: true,
        },
    });
}



function screen_loader(){
    let load = document.querySelector(".loader")
    setTimeout(() => {
        load.style.top = "-100%"
    }, 4000);
}

animate_effect_img()
Swpier()
screen_loader()