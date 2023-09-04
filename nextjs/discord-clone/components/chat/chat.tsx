import styled from "styled-components";
import ChatHeader from "@/components/chat/chatHeader";
import { AddCircleOutlined, CardGiftcard, EmojiEmotions, Gif } from "@mui/icons-material";

const ChatContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  background-color: #32363D; //TODO あとでhomeに移動させる

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
`

const Chat = () => {
  return (
    <ChatContainer>
      {/*  chat header */}
      <ChatHeader />
      {/*  chat message */}
      <div>chat message</div>
      {/*  chat input*/}
      <ChatInput>
        <AddCircleOutlined />
        <form>
          <input type="text" placeholder={"#Udemy Send message"} />
          <ChatInputButton type={"submit"}>
            Send
          </ChatInputButton>
        </form>
        <ChatInputIcons>
          <CardGiftcard />
          <Gif />
          <EmojiEmotions />
        </ChatInputIcons>
      </ChatInput>
    </ChatContainer>
  );
};
export default Chat;
