import ColorBox from "./contexts/ColorBox"
import { ColorProvider } from "./contexts/color"
import SelectColors from "./components/SelectColors"

const App = () => {
  return ( //Provider를 사용할 때는 value값을 명시해 주어야 제대로 작동함
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  )
}

export default App