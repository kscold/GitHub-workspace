// MessageList.js
import React from "react"
import styled from "styled-components"

const ChatBubbleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ChatBubble = styled.div`
  max-width: 70%;
  padding: 8px 12px;
  border-radius: 16px;
  margin-bottom: 8px;
  word-wrap: break-word; /* Fix: Allow long words to wrap */
  align-self: ${(props) => (props.sender === "me" ? "flex-end" : "flex-start")};
  background-color: ${(props) =>
    props.sender === "me" ? "#409eff" : "#e0e0e0"};
  color: ${(props) => (props.sender === "me" ? "white" : "black")};
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
