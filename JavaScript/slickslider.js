$('.latestprojectslider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});

document.querySelector('.slick-prev').innerHTML = '<i class="fas fa-chevron-left"></i>'
document.querySelector('.slick-next').innerHTML = '<i class="fas fa-chevron-right"></i>'


$('.experienceSliderWrap').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
});

document.querySelector(".experienceSliderWrap .slick-prev").style.display = "none"
document.querySelector(".experienceSliderWrap .slick-next").style.display = "none"



document.querySelectorAll('.slick-dots li button').forEach(allbtn => {
    allbtn.innerHTML = '<i class="fas fa-horizontal-rule"></i>'
})


// pre loader js function

const pre_loader = document.querySelector('.preLoader');

function preload() {
    pre_loader.style.display = 'none'
}

//text warp and show script

setInterval(function() {
    document.querySelectorAll('.maintext')[0].style.display = 'none';
}, 6200);

setInterval(function() {
    document.querySelectorAll('.maintext')[0].style.display = 'initial';
}, 12900);


setInterval(function() {
    document.querySelectorAll('.text')[0].style.display = 'initial';
}, 6200);

setInterval(function() {
    document.querySelectorAll('.text')[0].style.display = 'none';
}, 12900);