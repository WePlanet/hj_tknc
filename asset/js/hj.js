$( document ).ready(function() {

  $(document).bind('mobileinit',function(){
      $.mobile.keepNative = "select,input"; /* jQuery Mobile 1.4 and higher */
      //$.mobile.page.prototype.options.keepNative = "select, input"; /* jQuery Mobile 1.4 and lower */
 });
 
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

  // 2-2 페이지 부품 상세정보 클릭
  (function(){
    $('#detailNC').click(function(){
      $('#popUpMSG').css('display','block');
    });
    $('#closed').click(function(){
      $('#popUpMSG').css('display','none');
    });
  }());

// 2-4-1 클릭할때 버튼 벨류 바꾸기
  (function(){
      $("#elecBTN").click(function(){
        $("#BTN241").val(0);
        $('#elecImg').attr("src","asset/images/2-4-1.png");
        $('#mechImg').attr('src','asset/images/2-4-4.png');
      });
      $("#mechBTN").click(function(){
        $("#BTN241").val(1);
        $('#elecImg').attr("src","asset/images/2-4-2.png");
        $('#mechImg').attr('src','asset/images/2-4-3.png');
      });
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
