// App.js
import React, { useState } from "react"
import styled from "styled-components"
import MessageList from "./MessageList"

const AppWrapper = styled.div`
  background-color: #f7f7f7;
  padding: 20px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ChatList = styled.div`
  width: 200px;
  border: 1px solid #e0e0e0;
  margin-right: 20px;
  overflow-y: auto;
`

const ChatRoom = styled.div`
  padding: 12px;
  cursor: pointer;
  border-bottom: 1px solid #e0e0e0;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #f0f0f0;
  }
  ${(props) =>
    props.active &&
    `
    background-color: #f0f0f0;
  `}
`

const ChatWindow = styled.div`
  flex: 1;
  max-width: 600px;
  border: 1px solid #e0e0e0;
  overflow-y: auto;
`

const MessageInput = styled.input`
  width: 100%;
  padding: 12px;
  border: none;
  border-top: 1px solid #e0e0e0;
  box-sizing: border-box;
  font-size: 16px;
  outline: none;
`

const App = () => {
  // Sample hardcoded chat rooms
  const chatRooms = [
    {
      id: 1,
      name: "John",
      messages: [
        { text: "Hi there!", sender: "other" },
        { text: "Hello!", sender: "me" },
        // Add more messages here
      ],
    },
    {
      id: 2,
      name: "Alice",
      messages: [
        { text: "Hey!", sender: "other" },
        { text: "Hi Alice!", sender: "me" },
        // Add more messages here
      ],
    },
    // Add more chat rooms here
  ]

  // State to keep track of the active chat and user input
  const [activeChat, setActiveChat] = useState(chatRooms[0])
  const [messageInput, setMessageInput] = useState("")

  // Function to handle clicking on a chat
  const handleChatClick = (chat) => {
    setActiveChat(chat)
  }

  // Function to handle sending a message
  const handleSendMessage = () => {
    if (messageInput.trim() !== "") {
      setActiveChat((prevChat) => ({
        ...prevChat,
        messages: [...prevChat.messages, { text: messageInput, sender: "me" }],
      }))
      setMessageInput("")
    }
  }

  return (
    <AppWrapper>
      <ChatList>
        {/* Hardcoded chat list */}
        {chatRooms.map((chat) => (
          <ChatRoom
            key={chat.id}
            active={activeChat.id === chat.id}
            onClick={() => handleChatClick(chat)}
          >
            {chat.name}
          </ChatRoom>
        ))}
      </ChatList>
      <ChatWindow>
        <MessageList messages={activeChat.messages} />
        <MessageInput
          type="text"
          placeholder="Type your message..."
          value={messageInput}
          onChange={(e) => setMessageInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSendMessage()
            }
          }}
        />
      </ChatWindow>
    </AppWrapper>
  )
}

export default App
