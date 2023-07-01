import { ColorConsumer } from "./color";

const ColorBox = () => {
    return (
        <ColorConsumer>
            {({ state }) => ( //비구조화 할당으로 state = value.state
                <>
                    <div
                        style={{
                            width: '64px',
                            height: '64px',
                            background: state.color
                        }}
                    />

                    <div
                        style={{
                            width: '32px',
                            height: '32px',
                            background: state.subcolor
                        }}
                    />
                </>
            )}
        </ColorConsumer>
    );
};

export default ColorBox;