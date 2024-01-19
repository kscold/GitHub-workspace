import React from "react"

const MyComponent = (props) => {
  console.log(props)

  return (
    <>
      <div>{props.name}</div>
      <div>{props.nickname}</div>
      <div>{props.children}</div>
    </>
  )
}

export default MyComponent
