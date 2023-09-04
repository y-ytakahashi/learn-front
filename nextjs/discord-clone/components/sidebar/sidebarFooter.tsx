import styled from "styled-components";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import MicIcon from "@mui/icons-material/Mic";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import { Settings } from "@mui/icons-material";

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
    width: 60rem;
  }

`;
const SidebarCtmAccountIcon = styled(AccountCircleIcon)`
  &.AccountIcon {
    font-size: 4.5rem;
  }
`;
const AccountName = styled.div`
  margin-left: 1.6rem;

  h4 {
    font-size: 1.4rem;
    color: white;
    font-weight: 500;
    margin: 1rem 0;
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
  return (
    <SideBarFooterWrapper>
      <SidebarAccount>
        <SidebarCtmAccountIcon className={"AccountIcon"} />
        <AccountName>
          <h4>discord-clone</h4>
          <span>#8162</span>
        </AccountName>

      </SidebarAccount>
      <SidebarVoice>
        <MicIcon sx={{
          fontSize: "2rem",
        }} />
        <HeadphonesIcon sx={{
          fontSize: "2rem",
        }}/>
        <Settings sx={{
          fontSize:"2rem"
        }} />
      </SidebarVoice>

    </SideBarFooterWrapper>
  );
};
export default SidebarFooter;
