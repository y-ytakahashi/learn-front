import styled from "styled-components";
import { Avatar } from "@mui/material";

const ChatMessageContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  color: white;
  margin-bottom: 1.5rem;
`;
const MessageInfo = styled.div`
  padding: 0.2rem 0.2rem 0.2rem 1rem;
`;
const MessageTimeStamp = styled.span`
  color: #7B7C85;
  margin-left: 0.8rem;
  font-size: 1.2rem;
`;
const ChatMessage = () => {
  return (
    <ChatMessageContainer>
      <Avatar sx={{
        height: "4rem",
        width: "4rem"
      }} />
      <MessageInfo>
        <h4> y-y code
          <MessageTimeStamp>2023/9/5</MessageTimeStamp>
        </h4>
        <p>Message body</p>
      </MessageInfo>
    </ChatMessageContainer>
  );
};
export default ChatMessage;
