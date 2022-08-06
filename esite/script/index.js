'use strict';

$(document).ready(function(){
// header
    $("#toggler").click(function(){
$('.navbar').toggleClass('active');
$(this).toggleClass('fa-times');
$(this).toggleClass('toggler-icon');
$('.search-form').removeClass('active');
 $('.shopping-cart').removeClass('active');
    });

$("#search-box").append(".fa-search");
$('#search-btn').click(function(){
    $('.search-form').toggleClass('active');
    $('.navbar').removeClass('active');
    $('.shopping-cart').removeClass('active');
});
$('.upBtn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
});


$(window).scroll(function(){
  if($(window).scrollTop() > 20){
    $('.header').addClass('active');
  }
  else{
    $('.header').removeClass('active');
  };
  if($(window).scrollTop() > 100){
    $('.upBtn').addClass('active');
}
else{
  $('.upBtn').removeClass('active');
}
$('.shopping-cart').removeClass('active');
$('.search-form').removeClass('active');
$('.navbar').removeClass('active');




});

$('#cart-btn').click(function(){
    $('.shopping-cart').toggleClass('active');
    $('.navbar').removeClass('active');
    $('.search-form').removeClass('active');
});
// header
// typers start 

var typed = new Typed(".typeme1", {
  strings: ["Get 20% off every product purchased.","Get 30% off every feminine product purchased.","Get 10% off every unisex product purchased."],
  typeSpeed: 30,
  backSpeed: 40,
  loop: true,
});

var typed = new Typed(".typeme2", {
  strings: ["Get 30% off every feminine product purchased.","Get 20% off every product purchased.","Get 10% off every unisex product purchased."],
  typeSpeed: 30,
  backSpeed: 60,
  loop: true,
});

var typed = new Typed(".typeme3", {
  strings: ["Get 10% off every unisex product purchased.","Get 30% off every feminine product purchased.","Get 20% off every product purchased."],
  typeSpeed: 30,
  backSpeed: 40,
  loop: true,
});
var typed = new Typed(".btnanime1",{
  strings: ["Buy Now"],
  typeSpeed: 30,
  backSpeed: 40,
  loop: true,
});
var typed = new Typed(".btnanime2",{
  strings: ["Buy Now"],
  typeSpeed: 30,
  backSpeed: 40,
  loop: true,
});
var typed = new Typed(".btnanime3",{
  strings: ["Buy Now"],
  typeSpeed: 30,
  backSpeed: 40,
  loop: true,
});
var typed = new Typed(".btnanime4",{
  strings: ["Buy Now"],
  typeSpeed: 30,
  backSpeed: 40,
  loop: true,
});

var typed = new Typed(".btnanime5",{
  strings: ["Buy Now"],
  typeSpeed: 30,
  backSpeed: 40,
  loop: true,
});
var typed = new Typed(".btnanime6",{
  strings: ["Buy Now"],
  typeSpeed: 30,
  backSpeed: 40,
  loop: true,
});
var typed = new Typed(".btnanime7",{
  strings: ["Buy Now"],
  typeSpeed: 30,
  backSpeed: 40,
  loop: true,
});
var typed = new Typed(".btnanime8",{
  strings: ["Buy Now"],
  typeSpeed: 30,
  backSpeed: 40,
  loop: true,
});
var typed = new Typed(".btnanime9",{
  strings: ["Buy Now"],
  typeSpeed: 30,
  backSpeed: 40,
  loop: true,
});
var typed = new Typed(".btnanime10",{
  strings: ["Buy Now"],
  typeSpeed: 30,
  backSpeed: 40,
  loop: true,
});

// typers end


$('.image1,.image2,.image3,.image4').click(function(){
const image_one = $(this).attr('src');
$('.bg_image').attr('src',image_one)
});




















var swiper = new Swiper(".home-slider", {
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    autoplay:{
      delay:10000,
      disableOnInteraction:false,
       },
    loop:true,
    grabCursor:false,
  });



// filter
  $('.list').click(function(){
  const value = $(this).attr(`data-filter`);
  if(value == 'all'){
    $('.box').show(100);
  }
  else{
    $('.box').not('.'+value).hide(10);
    $('.box').filter('.'+value).show(10);
  
  }
  // add active class on selected items
  $('.list').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
  })
  })
  var filterBtns = $('.filter-button-group').find('button');
  function resetFilterBtns(){
    filterBtns.each(function(){
      $(this).removeClass('active-filter-btn');
    });
  }
  // filter end 



// countdown  sect
let daysItem = document.querySelector("#day");
let hoursItem = document.querySelector("#hour");
    let minItem = document.querySelector("#minute");
    let secItem = document.querySelector("#second");
   
   
    let countDown = () => {
      let futureDate = new Date("1 Jan 2023");
      let currentDate = new Date();
      let myDate = futureDate - currentDate;
      //console.log(myDate);
   
      let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
   
      let hours = Math.floor(myDate / 1000 / 60 / 60) % 24;
   
      let min = Math.floor(myDate / 1000 / 60) % 60;
   
      let sec = Math.floor(myDate / 1000) % 60;
   
      daysItem.innerHTML = days;
      hoursItem.innerHTML = hours;
      minItem.innerHTML = min;
      secItem.innerHTML = sec;
    }
    countDown()   
    setInterval(countDown, 1000)

// countdown sect


$('.preloader').delay(2000).fadeOut('slow');
setTimeout(function() {   
    $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    },2000);
    

  })








