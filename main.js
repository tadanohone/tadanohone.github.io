const myImage = document.querySelector('img');

// 画像差し替え
myImage.onclick = () => {
  const n = Math.random()*100;
  const mySrc = myImage.getAttribute('src');
  if(n<8.10 && mySrc !== 'images/yaju.png') {
    myImage.setAttribute('src','images/yaju.png');
  } else if(mySrc !== 'images/urara.png') {
    myImage.setAttribute('src','images/urara.png');
  } else {
    myImage.setAttribute('src','images/urara2.png');
  }
}

let myButton = document.querySelector('.change-user');
let myHeading = document.querySelector('.hello');

function setUserName() {
    const myName = prompt('あなたの名前を入力してください。');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `ようこそ！${myName}様！`;
    }
  }

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `ようこそ！${storedName}様！`;
}

myButton.onclick = () => {
    setUserName();
}

// アニメーション
let targets = document.querySelectorAll('.js-scroll-fall'); //ターゲット要素
//スクロールイベント
window.addEventListener('scroll', function () {
  var scroll = window.scrollY; //スクロール量を取得
  var windowHeight = window.innerHeight; //画面の高さを取得
  for (let target of targets) { //ターゲット要素がある分、アニメーション用のクラスをつける処理を繰り返す
    var targetPos = target.getBoundingClientRect().top + scroll; //ターゲット要素の位置を取得
    if (scroll > targetPos - windowHeight) { //スクロール量 > ターゲット要素の位置
      target.classList.add('is-animated'); //is-animatedクラスを加える
    }
  }
});

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