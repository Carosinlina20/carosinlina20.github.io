$(document).ready(function () {


   $(".nav-item").click(function (){
       $(".nav-item").removeClass("active");

       $(".nav-item").children(".line").hide();

       $(this).addClass("active");

       $(this).find(".line").show();
   });




});









