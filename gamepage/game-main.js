// 画面内アニメーション
let targets2 = document.querySelectorAll('.js-scrollAnimation');//アニメーションさせたい要素
let offset = 10000;//アニメーションタイミング

window.addEventListener('scroll', function() {//スクロールしたとき

  var scroll = window.scrollY;//スクロール量を取得
  var h = window.innerHeight;//画面の高さを取得

  for(let target2 of targets2) {
    var pos = target2.getBoundingClientRect().top + scroll;//アニメーションさせたい要素の位置を取得
    if (scroll > pos - h + offset) {//スクロール量 > アニメーションさせたい要素の位置
      target2.classList.add('is-animated');
    }
  }
});