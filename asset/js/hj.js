$( document ).ready(function() {
  //2-1 에서 클릭하면 창 내려오게
  $(".showBox").on("click", function(){
    $(".clickShowBox").toggle("fast",function(){
      $(".showBox").html("<p>ggg</p>");
    });
  });

  // 모든 A 태그에 data-ajax='false 추가
  var allATag = document.getElementsByTagName('a');
  (function(){
    for(var i=0; i<allATag.length; i++){
      allATag[i].setAttribute('data-ajax','false');
    }
  }());
  var allFormTag = document.getElementsByTagName('form');
  (function(){
    for(var i=0; i<allFormTag.length; i++){
      allFormTag[i].setAttribute('data-ajax','false');
    }
  }());

  // 2-5-1 플러스 마이너스 버튼
  (function(){
    var pQ = document.getElementById("productQuantity").value;
      $("#plusBtn").click(function(){
        pQ ++;
        $("#productQuantity").val(pQ);
      });
      $("#minusBtn").click(function(){
        if(pQ > 0){
          pQ --;
          $("#productQuantity").val(pQ);
        }
        else{
          alert("0보다 작을 수 없어요.")
        }
      });

  }());

});
