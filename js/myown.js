$(document).ready(function($){


  // 登录链接事件
  $(".newAct").click(function(){
    // 获取登录窗体代码
    var loginHtml = $("#loginHtml").html();
    showLayer(loginHtml,700,470,closeCallback);
  });

  // 弹出层关闭回调函数
  function closeCallback(){
    $(".error-msg").html("");
  } 

  // 显示弹出层
  function showLayer(html,width,height,closeCallback){
    // 显示弹出层遮罩
    $("#layer-mask").show();
    // 显示弹出层窗体
    $("#layer-pop").show();
    // 设置弹出层窗体样式
    $("#layer-pop").css({
      width : width,
      height : height
    });
    // 填充弹出层窗体内容
    $("#layer-content").html(html);
    // 弹出层关闭按钮绑定事件
    $("#layer-close").click(function(){
      // 弹出层关闭
      hideLayer();
      // 关闭的回调函数
      closeCallback();
    });
  }

  // 隐藏弹出层
  function hideLayer(){
    // 弹出层关闭
    $("#layer-mask").hide();
    $("#layer-pop").hide();
  }


  //提交新建活动的弹出窗口的数据
   $('#actiSubmitBtn').click(function(){ 
      alert('提交成功，我们已经收到了您的信息！'); 
    });         
   $( 
    $("#ajaxForm").on("submit",function () {  
       $(this).ajaxSubmit(options);   
            return false;   
        })
    )
    var options = {
        url: "url",       
        type: "post",           
        success: successFun,    
        dataType: "json",       
        clearForm: true,        
        resetForm: true,        
        timeout: 3000           
    }
    function successFun(data,status) {
        window.open("https://cv.rulertech.com:19443/"); 
    }

//活动管理          
  //创建表格
    $(".newMan").click( function () {
     //创建一个tr
       var tr = document.createElement("tr");
       var tbody = $(".aType");
        for (var i=1;i<=5;i++){
            //创建td
            var td = document.createElement("td");
            //在td中添加文本框
            td.innerHTML="<input type='text' name='tableData' placeholder='请输入相关信息' style='border:none;width:120px;margin-left:0;'/>";
            //追加到tr中
            tr.appendChild(td); 
        }
       tbody.append(tr);
     })

}) 