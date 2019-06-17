// スムーズスクロール開始
$(function(){
// #で始まるアンカーをクリックした場合に処理
$('a[href^=#]').click(function() {
// スクロールの速度
var speed = 400; // ミリ秒
// アンカーの値取得
var href= $(this).attr("href");
// 移動先を取得
var target = $(href == "#" || href == "" ? 'html' : href);
// 移動先を数値で取得
var position = target.offset().top;
// スムーススクロール
$('body,html').animate({scrollTop:position}, speed, 'swing');
return false;
});
});
// スムーズスクロール終了

// トップへボタン スクロール設定開始
$(function(){
  var topButton = $("#top");
  topButton.hide();
  $(window).scroll(function(){
    if ($(this).scrollTop() > 100){
      topButton.fadeIn();
    }else{
      topButton.fadeOut();
    }
  });
});
// トップへボタン スクロール設定終了

// ヘッダー固定開始
$(function() {
  var $win = $(window),
  $cloneNav = $("header").clone().addClass("header_fixed").appendTo("body"),
  showClass = "header_show";

  $win.on("load scroll", function() {
    var value = $(this).scrollTop();
    if ( value > 60 ) {
      $cloneNav.addClass(showClass);
    } else {
      $cloneNav.removeClass(showClass);
    }
  });
});
// ヘッダー固定終了
