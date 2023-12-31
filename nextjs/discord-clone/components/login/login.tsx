import styled from "styled-components";
import Image from "next/image";
import discordIconImage from "@/public/discordIcon.png";
import { Button } from "@mui/material";
import { signInWithPopup } from "@firebase/auth";
import { auth, provider } from "@/firebase";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  gap: 1rem 1rem;
`;
const LoginLogo = styled(Image)`
  height: auto;
  width: 4rem;
`;

const LoginButton = styled(Button)`
  width: 20rem;
  background-color: #738adb;
  color: #EFF2F5;
  font-weight: 800;

  &:hover {
    background-color: black;
    color: #738adb;
  }
`;

const Login = () => {
  const signIn = () => {
    signInWithPopup(auth, provider).catch((error) => alert(error.message));

  };

  return (
    <LoginContainer>
      <LoginLogo src={discordIconImage} alt={"login icon"} />
      <LoginButton onClick={signIn}>Login</LoginButton>

    </LoginContainer>
  );
};
export default Login;
