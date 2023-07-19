import { UpCircleOutlined } from "@ant-design/icons"
import styled from "@emotion/styled";
import type { MouseEvent } from 'react';


const MyIcon = styled(UpCircleOutlined)`
    color: red;
    font-size: 50px;
`;

export default function LibraryIconPage(): JSX.Element {
    const onClickDelete = (event: MouseEvent<HTMLDivElement>): void => { // :void 함수의 리턴타입을 넣어주어라
        console.log(event.currentTarget.id);
    };

    return (
        <div id="삭제할게시글ID" onClick={onClickDelete} >
            <MyIcon />
        </div>
    );
}
