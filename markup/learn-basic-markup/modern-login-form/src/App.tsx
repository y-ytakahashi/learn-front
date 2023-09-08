import "./App.scss";
import logoImage from "./assets/logo.png";
import { Lock, Mail } from "@mui/icons-material";

function App() {
  return (
    <>
      <div className="login-card">
        <div className="container">
          <div className="logo">
            <img src={logoImage} alt="logo" />
          </div>
          <div className="header">
            <h1>Sign in</h1>
            <div>Please login to use platform</div>
          </div>
          <form className="login-form">
            <div className="form-item">
              <Mail />
              <input type={"text"} placeholder={"Email"} required={true} autoFocus={true} />
            </div>
            <div className="form-item">
              <Lock />
              <input type={"password"} placeholder={"Password"} required={true} />
            </div>
            <div className="form-item-other">
              {/*  add check box element*/}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
