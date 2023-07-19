import { MyEmail, MyEmailInput } from '../../../styles/01-02-emotion'

export default function EmotionPage() {



    return ( //public이 아이콘을 저장하는 경로인데 기본적으로 <img> 태그의 /(root) 판정을 가지고 있음
        <div>
            <MyEmail>이메일: </MyEmail>
            <MyEmailInput type="text" />
            <button>클릭하세요!</button>
            <img src="/next.svg" />
        </div>
    )
}