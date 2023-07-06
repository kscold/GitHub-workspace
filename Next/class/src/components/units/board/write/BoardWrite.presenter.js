export default function BoardWriteUI() {
    //presnet는 UI만 담고 로직은 쓰지말자


    return (
        <div>
            작성자: <input type="text" onChange={props.bbb} />
            제목: <input type="text" onChange={props.ccc} />
            내용: <input type="text" onChange={props.ddd} />
            <button onClick={props.aaa} >GRAPHQL-API요청하기</ button>
        </div>
    )
}