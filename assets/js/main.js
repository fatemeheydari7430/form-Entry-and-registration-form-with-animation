$(document).ready(function () {

    $('.toggle').click(function() {
          $('.container').addClass('active');
   });

   $('.close').click(function(){
          $('.container').removeClass('active');
   });

 });