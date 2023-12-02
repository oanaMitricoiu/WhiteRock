let map;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    map = new Map(document.querySelector(".map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}

initMap();

//Smooth scrolling

document.addEventListener("DOMContentLoaded", scroll);

function scroll() {
    const navLinks = document.querySelectorAll("nav a");
    const btn = document.querySelector(".btn")

    navLinks.forEach((link) => {
        link.addEventListener("click", smoothScroll);
    });
    btn.addEventListener("click", smoothScroll)
}

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

window.addEventListener('scroll', function(){
    if(this.window.scrollY > 150) {
     document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 0.9;
    }
})