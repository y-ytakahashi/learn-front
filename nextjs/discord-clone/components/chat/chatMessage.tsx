import styled from "styled-components";
import { Avatar } from "@mui/material";
import { Timestamp } from "@firebase/firestore";

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

type Props = {
  timestamp: Timestamp;
  message: string;
  user: {
    uid: string;
    photo: string;
    email: string;
    displayName: string;
  }
}

const ChatMessage = ({ timestamp, message, user }: Props) => {
  return (
    <ChatMessageContainer>
      <Avatar src={user?.photo} sx={{
        height: "4rem",
        width: "4rem"
      }} />
      <MessageInfo>
        <h4> {user?.displayName}
          <MessageTimeStamp>{new Date(timestamp?.toDate()).toLocaleString()}</MessageTimeStamp>
        </h4>
        <p>{message}</p>
      </MessageInfo>
    </ChatMessageContainer>
  );
};
export default ChatMessage;
