// debounce function that will wrap our event
function debounce(fn, delay) {
    // maintain a timer
    let timer = null;
    // closure function that has access to timer
    return function () {
        // get the scope and parameters of the function 
        // via 'this' and 'arguments'
        let context = this;
        let args = arguments;
        // if event is called, clear the timer and start over
        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    }
}

// Sticky header
var header = document.querySelector("header");
var sticky = header.offsetTop;
var searchTopIcon = document.querySelector(".search-top__icon");
var itemNav = document.querySelectorAll(".head-nav > ul > li > a");
var topBar = document.querySelector("#top-bar");

function stickyHeader() {
    let wpageYOffset = window.pageYOffset;
    if(wpageYOffset > sticky) {
        header.classList.add("sticky-header");
    } else {
        header.classList.remove("sticky-header");
    }
}

// wrap our function in a debounce to fire once 500 seconds have gone by
// window.addEventListener('scroll', debounce(stickyHeader, 300));
window.addEventListener('scroll', stickyHeader);


var ulList = document.querySelector(".why-choose-shop");

ulList.addEventListener('click',function(e) {
    if (e.target.nodeName && e.target.nodeName === "I") {
        e.target.parentNode.children[2].classList.toggle("show");
    }
})



// SLIDE 
// var slideProducts = document.querySelector(".wrap-slide-products");
// var flkty = new Flickity(slideProducts,{
//     cellAlign: 'left',
//     contain: true,
//     pageDots: false,
//     wrapAround: true,
    
// });

    // $('.wrap-slide-products').flickity({
    //     cellAlign: 'left',
    //     contain: true
    // });