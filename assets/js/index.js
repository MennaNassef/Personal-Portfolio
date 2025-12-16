// ^ Write your JavaScript code here
var setting = document.getElementById("settings-toggle");
setting.addEventListener("click", function () {
    if (
        document
            .getElementById("settings-sidebar")
            .classList.contains("translate-x-full")
    ) {
        document
            .getElementById("settings-sidebar")
            .classList.remove("translate-x-full");
        setting.classList.remove("right-0");
        setting.style.right = "20rem";
    } else {
        document
            .getElementById("settings-sidebar")
            .classList.add("translate-x-full");
        setting.style.right = "0";
    }
});
document
    .getElementById("close-settings")
    .addEventListener("click", function () {
        document
            .getElementById("settings-sidebar")
            .classList.add("translate-x-full");
        setting.style.right = "0";
    });

var alexFont = document.querySelector('[data-font="alexandria"]');
alexFont.addEventListener("click", function () {
    cairoFont.classList.remove("border-4");
    alexFont.classList.add("border-4");
    tajawalFont.classList.remove("border-4");
    document.body.classList.remove("font-tajawal");
    document.body.classList.remove("font-cairo");
    document.querySelector(".alex").classList.remove("opacity-0");
    document.querySelector(".cairo").classList.add("opacity-0");
    document.querySelector(".tajawal").classList.add("opacity-0");

    document.body.classList.add("font-alexandria");
});

var tajawalFont = document.querySelector('[data-font="tajawal"]');
tajawalFont.addEventListener("click", tajawal);
function tajawal() {
    document.body.classList.remove("font-alexandria");
    cairoFont.classList.remove("border-4");
    alexFont.classList.remove("border-4");
    tajawalFont.classList.add("border-4");
    document.body.classList.remove("font-cairo");
    document.querySelector(".tajawal").classList.remove("opacity-0");
    document.querySelector(".cairo").classList.add("opacity-0");
    document.querySelector(".alex").classList.add("opacity-0");

    document.body.classList.add("font-tajawal");
}
var cairoFont = document.querySelector('[data-font="cairo"]');
cairoFont.addEventListener("click", function () {
    cairoFont.classList.add("border-4");
    alexFont.classList.remove("border-4");
    tajawalFont.classList.remove("border-4");
    document.body.classList.remove("font-alexandria");
    document.body.classList.remove("font-tajawal");
    document.querySelector(".cairo").classList.remove("opacity-0");

    document.querySelector(".alex").classList.add("opacity-0");
    document.querySelector(".tajawal").classList.add("opacity-0");

    document.body.classList.add("font-cairo");
});




var themeColor = document.querySelectorAll(".theme-color");
var colorTo = ["rgb(139, 92, 246)", "rgb(249, 115, 22)", "rgb(5, 150, 105)", " rgb(6, 182, 212)", "rgb(244, 63, 94)", "rgb(234, 88, 12)"];
var colorFor = ["rgb(99, 102, 241", "rgb(236, 72, 153", "rgb(16, 185, 129",
    "rgb(59, 130, 246", "rgb(239, 68, 68", "rgb(245, 158, 11"]
for (let i = 0; i < themeColor.length; i++) {
    themeColor[i].style.background = `linear-gradient(135deg, ${colorFor[i]} ),${colorTo[i]}`;
    themeColor[i].style.outline = ` 2px solid var(--color-primary)`;
    themeColor[i].style.border = `oklch(37.2% .044 257.287) 3px solid`;
    themeColor[i].addEventListener("click", function (e) {
        document.documentElement.style.cssText += `
    --color-primary: ${colorFor[i]});
    --color-secondary:${colorFor[i]},1);
    --color-accent:${colorTo[i]};
    `;
    });
}

document.getElementById("reset-settings").addEventListener("click", function () {
    tajawal()
    document.documentElement.style.cssText += `
    --color-primary: ${colorFor[0]});
    --color-secondary:${colorFor[0]},1);
    --color-accent:${colorTo[0]};
    `;
})



var filter = document.querySelectorAll(".portfolio-filter")
for (let i = 0; i < filter.length; i++) {
    filter[i].addEventListener("click", function (e) {
        if (!filter[i].classList.contains("active")) {
            for (let j = 0; j < filter.length; j++) {
                filter[j].classList.remove("active")
                filter[j].classList.remove("bg-linear-to-r")
                filter[j].classList.add("bg-white")
                filter[j].classList.add("dark:bg-slate-800")
            }
            filter[i].classList.add("active")
            filter[i].classList.remove("bg-white")
            filter[i].classList.remove("dark:bg-slate-800")
            filter[i].classList.add("bg-linear-to-r")
            filter[i].classList.add("from-primary")
            filter[i].classList.add("to-secondary")

        }
        for (var j = 0; j < document.querySelectorAll('[data-category]').length; j++) {
            if (document.querySelectorAll('[data-category]')[j].dataset.category != e.target.dataset.filter && e.target.dataset.filter != "all") {
                document.querySelectorAll(".portfolio-item")[j].classList.add("d-none")
            }
            else {
                document.querySelectorAll(".portfolio-item")[j].classList.remove("d-none")
                document.querySelectorAll(".portfolio-item")[j].classList.add("d-flex")
            }
        }

    })

}

var imgs = Array.from(document.querySelectorAll(".testimonial-card"))
var nextIcon = document.querySelector("#next-testimonial")
var prevIcon = document.querySelector("#prev-testimonial")
var imgIndex = 0

function next(){
    console.log(imgIndex);
    imgs[imgIndex].style.display = "none";
    imgIndex++;
    if (imgIndex >= imgs.length - 2) {
        imgIndex = 0;
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.display = "flex";
        }
    }
    
    imgs[imgIndex].style.display = "flex";
}
function prev(){
    imgs[imgIndex].style.display = "flex";
    console.log(imgIndex);
    imgIndex--;
    if (imgIndex < 0) {
        imgIndex = imgs.length - 1;
        for (let i = 0; i < imgs.length - 3; i++) {
            imgs[i].style.display = "none";
        }
        imgIndex -= 2
    }
    
    imgs[imgIndex].style.display = "flex";
}

nextIcon.addEventListener("click", function (e) {
    document.querySelectorAll(".carousel-indicator")[imgIndex].classList.add("bg-accent")
    document.querySelectorAll(".carousel-indicator")[imgIndex].classList.remove("dark:bg-slate-600")
    next()
    // document.querySelectorAll(".carousel-indicator")[document.querySelectorAll(".carousel-indicator").indexOf(e.target)].classList.add("red")
    for (let j = 0; j < 4; j++) {
        document.querySelectorAll(".carousel-indicator")[j].classList.remove("bg-accent")
        document.querySelectorAll(".carousel-indicator")[j].classList.add("dark:bg-slate-600")
    }
    
});



var carousel = document.querySelectorAll(".carousel-indicator");
var index=0
for (let i = 0; i < carousel.length; i++) {

    
    carousel[i].addEventListener("click", function(e) {
console.log(index);
     var newindex =index

        index=i
console.log(newindex);

        
        for (let j = 0; j < carousel.length; j++) {
            carousel[j].classList.remove("bg-accent")
            carousel[j].classList.add("dark:bg-slate-600")
        }
        if(i>newindex){
        for (let a = 0; a < i-newindex; a++) {
            next()
            }
        
        console.log("jiho");       
        }
        else if(i<newindex){
            for (let a = 0; a < newindex-i; a++) {
            prev()
            
            }
            console.log("kjiohio");
        }
console.log(newindex);

        carousel[i].classList.add("bg-accent")
    carousel[i].classList.remove("dark:bg-slate-600")

});
    

}


prevIcon.addEventListener("click", function () {
    document.querySelectorAll(".carousel-indicator")[imgIndex].classList.add("bg-accent")
    document.querySelectorAll(".carousel-indicator")[imgIndex].classList.remove("dark:bg-slate-600")
    prev()
    for (let j = 0; j < 4; j++) {
        document.querySelectorAll(".carousel-indicator")[j].classList.remove("bg-accent")
        document.querySelectorAll(".carousel-indicator")[j].classList.add("dark:bg-slate-600")
    }
    
});





var toggleBut=document.getElementById("theme-toggle-button")
toggleBut.addEventListener("click",function(){
    var themeCircle =document.querySelector(".theme-toggle-circle .fa-solid")
        if(themeCircle.classList.contains("fa-sun")){
            themeCircle.classList.remove("fa-sun")
            themeCircle.classList.add("fa-moon")
            document.documentElement.classList.remove("dark")
            document.documentElement.classList.add("light")
        }
        else{
            themeCircle.classList.add("fa-sun")
            themeCircle.classList.remove("fa-moon")
            document.documentElement.classList.add("dark")
            document.documentElement.classList.remove("light")
        }
    
})


document.addEventListener("scroll",function(){
    if (window.scrollY > 300){
        document.querySelector("#scroll-to-top").classList.remove("invisible")
    }
    else{
        document.querySelector("#scroll-to-top").classList.add("invisible")
    }
})
document.querySelector("#scroll-to-top").addEventListener("click",function(){
    document.documentElement.scrollTop = 0;
})



var navLink = document.querySelectorAll(".nav-links a");
var activeLink = navLink[0]; 

window.addEventListener("scroll", function() {
    var scrollY = window.scrollY;

    for (var i = 0; i < navLink.length; i++) {
        var section = document.querySelector(navLink[i].getAttribute("href"));

        if (scrollY >= section.offsetTop - 50) { 
            activeLink = navLink[i];
        }
    }

    for (var i = 0; i < navLink.length; i++) {
        navLink[i].classList.remove("active");
    }

    activeLink.classList.add("active");
});
