$( document ).ready(function() {
  //2-1 에서 클릭하면 창 내려오게
  $(".showBox").on("click", function(){
    $(".clickShowBox").toggle("fast",function(){
      $(".showBox").html("<p>ggg</p>");
    });
  });

});
