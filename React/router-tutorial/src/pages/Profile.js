import { useParams } from "react-router-dom";

const data = {
    velopert: {
        name: '김민준',
        description: '리액트를 좋아하는 개발자',
    },
    gildong: {
        name: '홍길동',
        description: '고전 소설 홍길동전의 주인공',
    },
}; //이 배열에서 key는 velopert와 gildong이고 data는 name, descrption이다.

const Profile = () => {
    const params = useParams(); //객체 형태를 조회
    const profile = data[params.username]; //Profile 컴포넌트에서 username URL 파라미터를 통하여 프로필을 조회, 여기서 username이 key 값이 됨

    return (
        <div>
            <h1>사용자 프로필</h1>
            {profile ? (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.description}</p>
                </div>
            ) : (
                <p>존재하지 않는 프로필입니다.</p>
            )}
        </div>
    )
}

export default Profile;