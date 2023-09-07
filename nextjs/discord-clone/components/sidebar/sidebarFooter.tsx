import styled from "styled-components";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import { Settings } from "@mui/icons-material";
import { auth } from "@/firebase";
import { useAppSelector } from "@/app/hooks";
import Image from "next/image";

const SideBarFooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  padding-bottom: 10px;
  border-top: 1px solid #686A6E;
  padding-top: 10px;
  margin-left: 3px;
`;
const SidebarAccount = styled.div`
  display: flex;
  align-items: center;

  img {
    width: 4rem;
    border-radius: 50%;
  }
`;

const SidebarCtmAccountIcon = styled(AccountCircleIcon)`
  &.AccountIcon {
    font-size: 4.5rem;
  }
`;
const AccountName = styled.div`
  margin-left: 0.8rem;
  line-height: 1.2rem;

  h4 {
    font-size: 1.6rem;
    color: white;
    font-weight: 500;
    margin: 0.8rem 0;
  }

  span {
    font-size: 1.4rem;
    color: #686A6E;
  }
`;

const SidebarVoice = styled.div`
  display: flex;
  align-items: center;
  color: #686A6E;


`;
const SidebarFooter = () => {
  const user = useAppSelector((state) => state.user.user);

  return (
    <SideBarFooterWrapper>
      <SidebarAccount>
        {
          user?.photo ? <Image src={user.photo} alt={"user icon"} width={40} height={40} /> :
            <SidebarCtmAccountIcon className={"AccountIcon"} onClick={() => {
              auth.signOut().then();
            }} />

        }
        <AccountName>
          <h4>{user?.displayName}</h4>
          <span>#{user?.uid.substring(0, 4)}</span>
        </AccountName>
      </SidebarAccount>
      <SidebarVoice>
        <MicIcon sx={{
          fontSize: "2rem"
        }} />
        <HeadphonesIcon sx={{
          fontSize: "2rem"
        }} />
        <Settings sx={{
          fontSize: "2rem"
        }} />
      </SidebarVoice>

    </SideBarFooterWrapper>
  );
};
export default SidebarFooter;
