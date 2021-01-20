$(document).ready(function(){
   $('.quote__slider').slick({
       arrows:false,
       dots:true,
       adaptiveHeight:true,
       speed:800,
   });
   
   $('.header__burger').click(function(event) {
       $('.header__burger, .header__nav, .header__page').toggleClass('active'); 
   });
});
