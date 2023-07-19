import { useState } from "react"

export default function SignupStatePage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const [emailError, setEmailError] = useState("아직은 에러가 없습니다.")

    function onChangeEmail(event) { //이벤트 핸들러 함수라고 부름
        console.log(event) //나의 행동 onChange 같은 것을 작동시켰다는 것을 보여줌
        console.log(event.target) // 작동된 html 태그 <input type="text"> 를 보여줌
        console.log(event.target.value) //작동된 태그에 입력된 값

        setEmail(event.target.value) // 이 코드를 통해 더해진 마지막 값이 email state에 저장됨
    }

    function onChangePassword(event) {
        setPassword(event.target.value)
    }


    function onClickSignup(event) {
        console.log(email) //진짜 포장이 잘 됐는지 확인해보기
        console.log(password)

        // 1. 검증하기
        if (email.includes("@") === false) { //문자열에 반드시 @이 포함되어야 함
            //alert("이메일이 올바르지 않습니다!! @가 없음!!")
            // document.getElementById("myerror").innerText = "이메일이 올바르지 않습니다!! @가 없음" //myerror을 가진 div 태그 children에 들어감 옛날 방식
            setEmailError("이메일이 올바르지 않습니다!! @가 없음!!")
        } else {
            //alert("회원가입을 축하합니다!!")

            // 2. 백엔드 컴퓨터에 보내주기(백엔드 개발자가 만든 함수. 즉, API)
            //=> 나중에

            // 3. 성공알람 보여주기
        }
    }

    return (
        <div>
            이메일: <input type="text" onChange={onChangeEmail} />
            {/* <div id="myerror"></div> 옛날 방식 */}
            <div>{emailError}</div>
            비밀번호 <input type="password" onChange={onChangePassword} />
            <button onClick={onClickSignup}>회원가입</button>
        </div >
    )

}
