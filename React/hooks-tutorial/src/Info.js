import React, { useEffect, useState } from 'react'

const Info = () => {
    const [name, setName] = useState('')
    const [nickname, setNickname] = useState('')
    // useEffect(() => {
    //     console.log('렌더링이 완료되었습니다.'); //클래스 컴포넌트의 componentDidMount 역할과 같음
    //     console.log({
    //         name,
    //         nickname
    //     });//name과 nickname에 대한 콘솔로그 딕셔너리 형태로 집어넣음,componentDidUpdate와 같음
    // }); 

    useEffect(() => {
        console.log('마운트 될 때만 실행됩니다.')
    }, []) //두번째 파라미터로 빈 배열 []를 추가해서 마운트 될 때만 실행되도록 만듬

    useEffect(() => {
        console.log(name)
    }, [name])//특정 값을 두번째 배열 파라미터 안에 넣어 name이 없데이트 될 때만 콘솔 로그가 생성

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={onChangeNickname} />
            </div>
            <div>
                <b>이름:</b> {name}
            </div>
            <div>
                <b>닉네임:</b> {nickname}
            </div>
        </div >
    ) //value를 제대로 설정해주어야 e.target.value가 제대로 들어감
}

export default Info