// /
//  * 1. 색 버튼 click 시, 버튼 배경 변경
//  * 2. BLUE 버튼 click 시, 버튼 배경 삭제
//  * 3. HOME 버튼 click 시, HOME PAGE 이동
//  */

// /
//  * 1. 색 버튼 click 시, 버튼 배경 변경
//  */
var redBtn = document.getElementById('btn_red'), 
    yellowBtn = document.getElementById('btn_yellow'),
    greenBtn = document.getElementById('btn_green');

// 빨간색 버튼 변경
redBtn.addEventListener('click', function(){
  redBtn.classList.add('btn_red');
});

// 노란 버튼 변경
yellowBtn.addEventListener('click', function(){
  yellowBtn.classList.add('btn_yellow');
});


// 녹색 버튼 변경
greenBtn.addEventListener('click', function(){
  greenBtn.classList.add('btn_green');
});


// /
//  * 2. BLUE 버튼 click 시, 버튼 배경 삭제
//  */
var blueBtn = document.getElementById('btn_blue');

blueBtn.addEventListener('click', function(){
  blueBtn.classList.remove('btn_blue');
});

// /
//  * 3. HOME 버튼 click 시, HOME PAGE 이동
//  */
function moveHome() {
  location.href = 'home.html';
}