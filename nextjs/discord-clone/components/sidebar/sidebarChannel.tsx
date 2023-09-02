import styled from "styled-components";

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
`

const SidebarChannelHash = styled.span`
  font-size: 22px;
  padding-right: 5px;
`



const SidebarChannel = () => {
  return (
    <SidebarChannelWrapper>
      <h4>
        <SidebarChannelHash>#</SidebarChannelHash>
        udemy
      </h4>
    </SidebarChannelWrapper>
  );
};
export default SidebarChannel;
