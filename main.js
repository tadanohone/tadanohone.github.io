const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/firefox-icon.jpg') {
    myImage.setAttribute('src','images/firefox-icon2.jpg');
  } else {
    myImage.setAttribute('src','images/firefox-icon.jpg');
  }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    const myName = prompt('あなたの名前を入力してください。');
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = `Mozilla はかっこいいよ、${myName}`;
    }
  }

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    const storedName = localStorage.getItem('name');
    myHeading.textContent = `Mozilla はかっこいいよ、${storedName}`;
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
    var targetPos = target.getBoundingClientRect().top + scroll + 500; //ターゲット要素の位置を取得
    if (scroll > targetPos - windowHeight) { //スクロール量 > ターゲット要素の位置
      target.classList.add('is-animated'); //is-animatedクラスを加える
    }
  }
});