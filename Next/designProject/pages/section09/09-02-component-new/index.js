import BoardComponent from "../../../src/components/units/board/09-board-component";

export default function BoardEditPage() {
    return (
        <BoardComponent
            //name="등록" 이렇게 사용하는 것 보다
            isEdit={false} //이렇게 하는게 API 요청을 할때에도 편리함
        />
    )
}