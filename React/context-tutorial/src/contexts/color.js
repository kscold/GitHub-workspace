import { createContext, useState } from "react";

const ColorContext = createContext({
    state: { color: 'black', subcolor: 'red' },
    actions: {
        setColor: () => { },
        setSubcolor: () => { }
    }
});

const ColorProvider = ({ children }) => {
    const [color, setColor] = useState('black');
    const [subcolor, setSubcolor] = useState('red');

    const value = {
        state: { color, subcolor },
        actions: { setColor, setSubcolor }
    };

    return (
        <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
    );
};

const { Consumer: ColorConsumer } = ColorContext; //const ColorConsumer = ColorContext.Consumer와 같은 의미

export { ColorProvider, ColorConsumer }; // ColorProvider와 ColorConsumer 내보내기

export default ColorContext;