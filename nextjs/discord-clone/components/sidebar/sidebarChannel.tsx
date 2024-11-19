import styled from "styled-components";
import { DocumentData } from "@firebase/firestore";
import { useAppDispatch } from "@/app/hooks";
import { setChannelInfo } from "@/features/channelSlice";

const SidebarChannelWrapper = styled.div`
  padding-left: 20px;
  margin-top: 2px;

  h4 {
    color: gray;
    display: flex;
    align-items: center;
    padding: 5px;
    cursor: pointer;
    font-size: 1.1rem;

    &:hover {
      color: white;
      background-color: #33363D;
      border-radius: 7px;
    }
`;

const SidebarChannelHash = styled.span`
  font-size: 22px;
  padding-right: 5px;
`;


type Props = {
  id: string,
  channel: DocumentData
}
const SidebarChannel = ({ id, channel }: Props) => {
    const dispatch = useAppDispatch();

    return (
      <SidebarChannelWrapper onClick={() => dispatch(setChannelInfo({
        channelId: id,
        channelName: channel.channelName
      }))}>
        <h4>
          <SidebarChannelHash>#</SidebarChannelHash>
          {channel.channelName}
        </h4>
      </SidebarChannelWrapper>
    );
  }
;
export default SidebarChannel;
