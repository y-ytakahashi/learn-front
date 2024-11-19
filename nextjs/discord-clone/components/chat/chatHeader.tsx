import styled from "styled-components";
import { Notifications, PushPin, PeopleAlt, Search, Send, Help } from "@mui/icons-material";


const ChatHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 1rem;
`;
const ChatHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  color: white;
  font-size: 1.8rem;
  .span {
    font-weight: 600;
  }
`;
const ChatHeaderRight = styled.div`
  padding-right: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #7B7C85;

  .MuiSvgIcon-root {
    cursor: pointer;
  }
`;
const ChatHeaderHash = styled.span`
  color: #7B7C85;
  font-size: 1.6rem;
  padding-right: 0.4rem;
`;
const ChatHeaderSearch = styled.div`
  display: flex;
  align-items: center;
  background-color: #40404A;
  padding: 0.3rem;
  border-radius: 0.3rem;

  input {
    background: transparent;
    outline: none;
    color: white;
    border: none;
  }
`;

type Props = {
  channelName: string | null;
}
const ChatHeader = ({ channelName }: Props) => {
  return (
    <ChatHeaderContainer>
      <ChatHeaderLeft>
        <h3>
          <ChatHeaderHash>#</ChatHeaderHash>
        </h3>
        <span>{channelName ?? "null"}</span>
      </ChatHeaderLeft>
      <ChatHeaderRight>
        <Notifications />
        <PushPin />
        <PeopleAlt />
        <ChatHeaderSearch>
          <input type={"text"} placeholder={"Search"} />
          <Search />
        </ChatHeaderSearch>
        <Send />
        <Help />
      </ChatHeaderRight>
    </ChatHeaderContainer>
  );
};
export default ChatHeader;
