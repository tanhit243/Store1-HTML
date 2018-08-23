/*
    Sticky header
*/
var header = document.querySelector("header");
var sticky = header.offsetTop;
var searchTopIcon = $(".search-top__icon");
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

window.addEventListener('scroll', stickyHeader);


var ulList = $(".why-choose-shop");


/* 
    Click Icon Search
*/
var searchForm = $('.search-top__form');

searchTopIcon.click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    const liElement     = searchTopIcon.children();
    let isIconSeatch    = liElement.hasClass('fa-search fa-flip-horizontal');
    const searchInput = $('.search-top__form__input');
    searchInput.focus();
    if (isIconSeatch) {
        liElement.removeClass('fa-search fa-flip-horizontal').addClass('fa-times');
        searchForm.css({ display: 'block' });
        searchForm.animate(
            { opacity: 1, top: "100%" }, 500, "linear"
        );
    } else {
        liElement.removeClass('fa-times').addClass('fa-search fa-flip-horizontal');
        searchForm.animate(
            {
                opacity: 0,
                top: "125%"
            }, 250, 
            function () {
                searchForm.css({ display: 'none' });
            }
        );
    }
});

// $(window).click(function(){
//     const liElement = searchTopIcon.children();
//     let isIconSeatch = liElement.hasClass('fa-search fa-flip-horizontal');
//     liElement.removeClass('fa-times').addClass('fa-search fa-flip-horizontal');
//     searchForm.animate(
//         {
//             opacity: 0,
//             top: "125%"
//         }, 250,
//         function () {
//             searchForm.css({ display: 'none' });
//         }
//     );
// });
