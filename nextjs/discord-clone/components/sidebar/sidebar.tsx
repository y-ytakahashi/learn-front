import React from "react";
import styled from "styled-components";
//MUI
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
//SideBarComponent
import SidebarChannel from "@/components/sidebar/sidebarChannel";
import SidebarFooter from "@/components/sidebar/sidebarFooter";

const SideBarMain = styled.div`
  display: flex;
  flex: 0.35;
  height: 100vh;
`;
const SideBarLeft = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #1A1C20;
  padding: 7px 15px;
;
`;
const SideBarRight = styled.div`
  background-color: #2B2D32;
  width: 300px;
  position: relative;
`;
const SideBarRightTop = styled.div`
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  h3 {
    font-size: 1.6rem;
  } 
`;
const ServerIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: #32363D;
  border-radius: 9999px;
  position: relative;
  margin-top: 7px;
  
  img {
    position: absolute;
    width: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const SideBarChannels  = styled.div`
  padding: 13px;
`

const SideBarHeader = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`

const SideBarAddIcon = styled(AddIcon)`
  cursor: pointer;
`


const Sidebar = () => {
  return (
   <SideBarMain>
     <SideBarLeft>
       sidebar left icon
       <ServerIcon>
         server icon
       </ServerIcon>
       <ServerIcon>
         server icon
       </ServerIcon>
     </SideBarLeft>
     <SideBarRight>
       sidebar right channel
       <SideBarRightTop>
         <h3>Discord</h3>
         <ExpandMoreIcon />
       </SideBarRightTop>
       <SideBarChannels>
         <SideBarHeader>
           <ExpandMoreIcon />
           <h4>プログラミングチャンネル</h4>
           <SideBarAddIcon />
         </SideBarHeader>
         <SidebarChannel />
         <SidebarChannel />
       </SideBarChannels>
       <SidebarFooter />
     </SideBarRight>
   </SideBarMain>
  );
};

export default Sidebar;