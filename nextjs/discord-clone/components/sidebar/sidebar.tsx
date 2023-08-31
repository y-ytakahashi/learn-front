import React from "react";
import styled from "styled-components";

const SideBarMain = styled.div`
  display: flex;
  flex: 0.35;
  height: 100vh;
  background-color: gray;
`;
const SideBarLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
  background-color: dimgray;
  padding: 7px 15px;
;
`;
const SideBarRight = styled.div``;
const SideBarRightTop = styled.div``;
const ServerIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 9999px;
  position: relative;
  
  img {
    position: absolute;
    width: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;


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
       </SideBarRightTop>
     </SideBarRight>
   </SideBarMain>
  );
};

export default Sidebar;