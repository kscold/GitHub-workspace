let el = document.getElementById('birthday'); //html의 div의 id명으로 데이터를 변수에 집어넣음
let elResult = document.getElementById('result');
let elSubmit = document.getElementById('submit');

const today = new Date(); //아무 날짜를 집어넣지 않으면 오늘 날짜를 반환
//console.log(today); 콘솔에 오늘 날짜가 제대로 뜨는지 확인

function calculateAge() { //기본적인 함수 선언

    let birthDate = new Date(el.value); //생년월일을 받는 곳에 value로 받아오면 property를 사용가능
    //let birthDate = new Date('2000-07-27'); //검증하기 위한 내 나이 입력 콘솔 창에 calulateAge() 함수 작성

    let age; //나이를 저장할 수 있는 변수 선언

    if (today.getMonth() > birthDate.getMonth() ||
        (today.getMonth() == birthDate.getMonth() &&
            today.getDate() > birthDate.getDate()
        ) //현재의 월이 생일월 보다 클 때(즉 생일월이 지났을 때)이거나 현재월이 생일월이랑 같은 월인데 일수가 현재 일수 가 더 클떄 (생일이 지났을 때)
    ) {
        age = today.getFullYear() - birthDate.getFullYear();
        //조건을 만족할 때 현재 년도에서 생일 년도를 뺌
    }
    else {
        age = today.getFullYear() - birthDate.getFullYear() - 1;
        //만 나이는 -1 이므로 추가적 계산
    }

    elResult.innerText = '귀하의 만 나이는 ' + age + '입니다.'; //포매팅을 이용하여 result 영역에 문구를 추가

    return age;
}

elSubmit.addEventListener('click', calculateAge); //클릭을 하였을 때 함수의 로직이 순차적으로 실행됨