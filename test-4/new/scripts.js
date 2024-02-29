$(document).ready(function(){
    $('.single-item').slick({
        dots:true,
        infinite:true,
        slidesToShow:1,
        slidesToScroll:1,
        arrows:false,
        
    });
});

function toggleMenu(){
    let li=document.querySelector('.nav-links');

    let getStarted=document.querySelector('.getStarted');

    getStarted.classList.toggle('mobile-menu');
    li.classList.toggle('mobile-menu')
}