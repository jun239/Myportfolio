'use strict';

{
  // ハンバーガーメニューを押下したらメニューを閉じる(内部リンク用)
  $(function () {
    $('#nav-content li a').on('click', function (event) {
      $('#nav-input').prop('checked', false);
    });
  });

  /* ページトップボタン用-start */
  // ページのトップに移動
  $("#pagetop").click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  /* ページトップ処理の表示/非表示 */
  // const top = $('#container').offset().top;
  const firstBtn = $('#aboutMe').offset().top;

  $(window).scroll(function () {
    let scroll = $(this).scrollTop();

    if (scroll >= firstBtn) {
      $('#pagetop').removeClass("invisible");
      $('#pagetop').addClass("unInvisible");
    } else {
      $('#pagetop').removeClass("unInvisible");
      $('#pagetop').addClass("invisible");
    }
  })
  /* ページトップボタン用-end */
}