import React from "react"
import styled from "styled-components"

const ChatBubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
`

const ChatBubble = styled.div`
  max-width: 70%;
  padding: 8px 12px;
  border-radius: 16px;
  margin-bottom: 8px;
  ${(props) =>
    props.sender === "me"
      ? `
    background-color: #409eff;
    color: white;
    align-self: flex-end;
  `
      : `
    background-color: #e0e0e0;
  `}
`

const MessageList = ({ messages }) => {
  if (!messages || messages.length === 0) {
    return <p>No messages to display.</p>
  }

  return (
    <ChatBubbleContainer>
      {messages.map((message, index) => (
        <ChatBubble key={index} sender={message.sender}>
          <p>{message.text}</p>
        </ChatBubble>
      ))}
    </ChatBubbleContainer>
  )
}

export default MessageList
