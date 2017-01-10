$( document ).ready(function() {

  $(document).bind('mobileinit',function(){
      $.mobile.keepNative = "select,input"; /* jQuery Mobile 1.4 and higher */
      //$.mobile.page.prototype.options.keepNative = "select, input"; /* jQuery Mobile 1.4 and lower */
 });

 // $('button').closest('.ui-btn').hide();

  //2-1 에서 클릭하면 창 내려오게
  var toggleIcon = 1;
  $(".showBox").on("click", function(){
    if((toggleIcon%2)==1){
      $(".showBox>img").css({
        WebkitTransform: 'rotate(' + 180 + 'deg)'
      });
    }
    else{
      $(".showBox>img").css({
        WebkitTransform: 'rotate(' + 0 + 'deg)'
      });
    }
    toggleIcon++;
    $(".clickShowBox").toggle("fast");
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

    $('#form22ban').click(function(){
      $('#form22banReason').css('display','block');
    });

    $('#closedBan').click(function(){
      $('#form22banReason').css('display','none');
      $('#form22').submit();
    });

    $("#form22submit").click(function(){
      $("#form22").submit();
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

  // 2-5-1 선택 폼
  (function(){
    // 발생부서 클릭하면 값에 index 값을 적용
    $("#bar1 a").click(function(){
      $("#form25depart").val($(this).index());
    });
    //대신화물
    var sendHM = ['대신화물 <span class="date-page-21"><i class="fa fa-angle-right fa-2x" aria-hidden="true"></i></span>','일반화물 <span class="date-page-21"><i class="fa fa-angle-right fa-2x" aria-hidden="true"></i></span>'];
    $("#bar2 a").click(function(){
      $("#page25HM").html(sendHM[$(this).index()]);
      $("#form25hm").val($(this).index());
    });

    //전송문구
    var sendWords = ['없음 <i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>' ,'최대한 빠르게 보내주세요. <i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>'];
    $("#bar3 a").click(function(){
      $("#form25sendWords").val($(this).index());
      $("#page25sendWords").html(sendWords[$(this).index()]);
    });

    // submit
    $("#page251submit").click(function(){
      $("#form251").submit();
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
