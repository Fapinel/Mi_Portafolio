$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })



// typing animation script
var typed = new Typed(".typing", {
	strings: [ "Web Developer", "Software Developer", "Front-End", "Web Application Security"],
	typeSpeed: 100,
	backSpeed: 60,
	loop: true
});




$('.navbar .menu li a').click(function(){
    // applying again smooth scroll on menu items click
    $('html').css("scrollBehavior", "smooth");
});

// toggle menu/navbar script
$('.menu-btn').click(function(){
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
});

});

