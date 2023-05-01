/* 이벤트에는

대표적으로 

폼 이벤트 
-제출, 초기화

마우스 이벤트
-클릭, 더블클릭, 마우스 이동

키보드 이벤트
-keydown, keypress, keyup

on + 이벤트 타입

*/

var el = document.getElementById('brand-title'); //클래스 아이디를 가져오기 위해 getElementById를 사용

var myfunc = function(){ //이름이 없는 함수를 변수에 담는 방식(익명 함수 표현)
    alert('addEventlistener'); //메세지와 확인 버튼이 있는 대화 상자를 표시하는데 사용 종종 디버깅 목적
}

el.addEventListener("click", myfunc); //메세지와 경소 상자를 표시하는 이벤트 명령어


/*함수를 표현하는 방법
function myfunc(){

}

즉시 실행 표현 함수(대표적인 예제 카운터) Immediately-invoked expression 
var myCounter = (function (initialValue = 0) {
  let count = initialValue
  return function () {
    count++
    return count
  }
})(1)         외부 함수에서 넘겨준 1을 가지고, 내부에서 처리를 하여 리턴

myCounter() // 2 호출했으므로 카운터 1 증가
myCounter() // 3
myCounter() // 4

*/