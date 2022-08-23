$(document).ready(function(){
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        fade:true
    });
    $('.slider-2').slick({
        arrows:false,
        dots:true,
        slidesToShow:3,
        slidesToScroll:1,
        centerMode:true
        // appendDots:'.slider-dots',
        // fade:true
    });
});

const triggers = document.querySelectorAll('.menu-trigger');


triggers.addEventListener('click', (e)=>{
    e.preventDefault();
    e.classList.toggle('.is-open');
});
