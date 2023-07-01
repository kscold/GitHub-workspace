import { ColorConsumer } from "../contexts/color";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
    return (
        <div>
            <h2>색상은 선택하세요.</h2>
            <ColorConsumer>
                {({ actions }) => ( //actions = value.actions
                    <div style={{ display: 'flex' }}>  {/* display 형태는 flex로 설정 */}
                        {colors.map(color => ( //colors를 color 객체로 생성해서 뿌려줌
                            <div
                                key={color} //키 값은 color 이름으로 설정
                                style={{
                                    background: color, //배경 color 설정
                                    width: '24px',
                                    height: '24px',
                                    cursor: 'pointer'
                                }}
                                onClick={() => actions.setColor(color)}
                                onContextMenu={e => { //마우스 오른쪽 클릭 이벤트
                                    e.preventDefault(); //마우스 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 무시함
                                    actions.setSubcolor(color);
                                }}
                            />
                        ))}
                    </div>
                )}
            </ColorConsumer>
            <hr />
        </div>
    );
};

export default SelectColors;