define(function(require) {
  var $ = require("jquery");
  require("amaze");
  var app = require("init");
  //var amaze = require("amaze");
  $(function() {
    var $fullText = $('.admin-fullText');
    $('#admin-fullscreen').on('click', function() {
      $.AMUI.fullscreen.toggle();
      $.AMUI.fullscreen.isFullscreen ? $fullText.text('关闭全屏') : $fullText.text('开启全屏');
    });

    /**
     * 初始化菜单
     */
    initNav("#admin-sidebar",app.module);

    /**
     * 绑定菜单点击事件
     */
    $(".admin-sidebar-list .am-cf").bind("click",function(){
      var  $this = $(this);
      var navtype = $this.attr("href");
      $(".am-active").removeClass("am-active");
      $this.parent().addClass("am-active");
      $("#collapse-nav").collapse("open");
      initNav("#collapse-nav",getMenuByClass(app.module,navtype));
      $(".admin-sidebar-sub .am-cf").unbind("click").bind("click",function(){
        var  $this = $(this);
        var type = $this.attr("href");
        $(".admin-sidebar-sub .am-active").removeClass("am-active");
        $this.parent().addClass("am-active");
      });
      return false;
    });
    /**
     * 菜单栏的收缩
     */
    $(".admin-collapse").bind("click",function(){
      if($(this).parent().hasClass("admin-bar-close")){
        $(".admin-sidebar").removeClass("admin-bar-close");
        $(".admin-main").css("marginLeft","400px");
      }else{
        $(".admin-sidebar").addClass("admin-bar-close");
        $(".admin-main").css("marginLeft","40px");
      }
    });
    $("#collapse-nav").bind("open.collapse.amui",function(a,b,c){
      console.log("open");
    });
    $("#collapse-nav").bind("close.collapse.amui",function(a,b,c){
      console.log("close");
    });
    $("a[href='store']").click();
  });

  function initNav(target,module){
    var html = '';
    module.forEach(function(v,i){
      if(i==0){
        html += '<li class="am-active"><a class="am-cf" href="'+ v._class+'"><span class="admin-icon-'+ v._class+'"></span><span class="admin-text">'+ v.name +'</span></a></li>';
      }else{
        html += '<li><a class="am-cf" href="'+ v._class+'"><span class="admin-icon-'+ v._class+'"></span><span class="admin-text">'+ v.name +'</span></a></li>';
      }
    });
    $(target).html(html);
  }
  function getMenuByClass(module,_class){
    var menu;
    module.forEach(function(v,i){
      if(v._class==_class){
        menu = v.menu;
        return;
      }
    });
    return menu;
  }
  function switchNav(){

  }

});
