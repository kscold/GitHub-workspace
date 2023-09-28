import React, { useState, useEffect } from "react"
import "./app.scss"

function App() {
  const [key, setKey] = useState("")
  const [inputValue, setInputValue] = useState("")

  const keylog = (e) => {
    // 이벤트의 key 속성을 사용하여 키 값을 가져옵니다.
    const pressedKey = e.key

    // 엔터 키 누를 때 새로운 줄 추가
    if (pressedKey === "Enter") {
      setKey((prevKey) => prevKey + "\n")
      setInputValue("") // 엔터를 누르면 인풋 값 초기화
    } else if (pressedKey !== "Backspace") {
      // 백스페이스 키 무시
      // 한글 입력일 경우에만 key 값을 사용
      if (pressedKey.length === 1) {
        setKey((prevKey) => prevKey + pressedKey)
      }
    }
  }

  const handleInputChange = (e) => {
    const value = e.target.value
    setInputValue(value)
  }

  const handleInputCompositionEnd = () => {
    // 한글 조합이 완료되면 입력 값을 버퍼에 저장
    setKey(inputValue)
  }

  const send = () => {
    console.log(key)
    setKey("")
    setInputValue("")
  }

  useEffect(() => {
    return () => {
      document.removeEventListener("keydown", keylog)
    }
  }, [])

  return (
    <div className="container">
      <div>
        <input
          type="text"
          placeholder="Type here"
          onKeyDown={keylog}
          onInput={handleInputChange}
          onCompositionEnd={handleInputCompositionEnd}
          value={inputValue}
        />
        <button onClick={send}>Send</button>
        <div style={{ whiteSpace: "pre-wrap" }}>{key}</div>
      </div>
    </div>
  )
}

export default App
