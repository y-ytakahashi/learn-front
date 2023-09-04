import styled from "styled-components";
import ChatHeader from "@/components/chat/chatHeader";

const ChatContainer = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  background-color: #32363D; //TODO あとでhomeに移動させる

`;


const Chat = () => {
  return (
    <ChatContainer>
      {/*  chat header */}
      <ChatHeader />
      {/*  chat message */}
      <div>chat message</div>
      {/*  chat input*/}
      <div>chat message</div>
    </ChatContainer>
  );
};
export default Chat;
