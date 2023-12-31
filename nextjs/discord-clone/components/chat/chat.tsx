import React from "react";
import styled from "styled-components";
import ChatHeader from "@/components/chat/chatHeader";
import { AddCircleOutlined, CardGiftcard, EmojiEmotions, Gif } from "@mui/icons-material";
import ChatMessage from "@/components/chat/chatMessage";
import { useAppSelector } from "@/app/hooks";
import { useState } from "react";
import useSubCollection from "@/hooks/useSubCollection";

const ChatContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  background-color: #32363D;
  height: 100vh;
`;

const ChatInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #474B53;
  border-radius: 0.5rem;
  margin: 2rem;
  color: lightgray;
  padding: ${props => props.theme.spacing.small};

  form {
    flex-grow: 1;

    input {
      padding: 0.5rem;
      background: transparent;
      border: none;
      outline: none;
      color: white;
      font-size: large;
    }
  }
`;

const ChatInputIcons = styled.div`
  .MuiSvgIcon-root {
    padding: 0.5rem;
  }
`;

const ChatInputButton = styled.button`
  display: none;
`;

const ChatMessageContainer = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
`;


const Chat = () => {
  const [inputText, setInputText] = useState<string>("");
  const channelName = useAppSelector((state) => state.channel.channelName);
  const { subDocuments: messages } = useSubCollection("channels", "messages");

  const sendMessage = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setInputText("");
  };

  return (
    <ChatContainer>
      <ChatHeader channelName={channelName} />
      <ChatMessageContainer>
        {messages.map(({ timestamp, message, user }, index) => (
            //  warn indexをkeyにするのは良くない
            <ChatMessage
              key={index}
              timestamp={timestamp}
              message={message}
              user={user}
            />
          )
        )}
      </ChatMessageContainer>
      <ChatInput>
        <AddCircleOutlined />
        <form>
          <input
            type="text"
            placeholder={"#Udemy Send message"}
            value={inputText}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)} />
          <ChatInputButton type={"submit"} onClick={(e) => sendMessage(e)}>
            Send
          </ChatInputButton>
        </form>
        <ChatInputIcons>
          <CardGiftcard sx={{ fontSize: "3.2rem" }} />
          <Gif sx={{ fontSize: "3.2rem" }} />
          <EmojiEmotions sx={{ fontSize: "3.2rem" }} />
        </ChatInputIcons>
      </ChatInput>
    </ChatContainer>
  )
    ;
};
export default Chat;
