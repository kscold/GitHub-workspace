//import { ColorConsumer } from "../contexts/color";

import React, { Component } from "react";
import ColorContext from "../contexts/color";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// const SelectColors = () => {
//     return (
//         <div>
//             <h2>색상은 선택하세요.</h2>
//             <ColorConsumer>
//                 {({ actions }) => ( //actions = value.actions
//                     <div style={{ display: 'flex' }}>  {/* display 형태는 flex로 설정 */}
//                         {colors.map(color => ( //colors를 color 객체로 생성해서 뿌려줌
//                             <div
//                                 key={color} //키 값은 color 이름으로 설정
//                                 style={{
//                                     background: color, //배경 color 설정
//                                     width: '24px',
//                                     height: '24px',
//                                     cursor: 'pointer'
//                                 }}
//                                 onClick={() => actions.setColor(color)}
//                                 onContextMenu={e => { //마우스 오른쪽 클릭 이벤트
//                                     e.preventDefault(); //마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시함
//                                     actions.setSubcolor(color);
//                                 }}
//                             />
//                         ))}
//                     </div>
//                 )}
//             </ColorConsumer>
//             <hr />
//         </div>
//     );
// };


class SelectColors extends Component {
    static contextType = ColorContext;

    handleSetColor = color => {
        this.context.actions.setColor(color);
    }

    handleSetSubcolor = subcolor => {
        this.context.actions.setSubcolor(subcolor);
    }

    render() {
        return (
            <div>
                <h2>색상을 선택하세요.</h2>
                <div style={{ display: 'flex' }}>
                    {colors.map(color => (
                        <div
                            key={color}
                            style={{
                                background: color,
                                width: '24px',
                                height: '24px',
                                cursor: 'pointer',
                            }}
                            onClick={() => this.handleSetColor(color)}
                            onContextMenu={e => {
                                e.preventDefault();
                                this.handleSetSubcolor(color);
                            }}
                        />
                    ))}
                </div>
                <hr />
            </div>
        );
    }
}

export default SelectColors;
