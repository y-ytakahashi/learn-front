import "./App.scss";
import logoImage from "./assets/logo.png";
import { Lock, Mail, Facebook, Google } from "@mui/icons-material";

function App() {
  return (
    <>
      <div className="container">
        <div className="login-card">
          <div className="logo">
            <img src={logoImage} alt="logo" />
          </div>
          <div className="header">
            <h1>Sign in</h1>
            <div>Please login to use platform</div>
          </div>
          <form className="login-form">
            <div className="item">
              <Mail className={"icon"} />
              <input type={"text"} placeholder={"Email"} required={true} autoFocus={true} />
            </div>
            <div className="item">
              <Lock className={"icon"} />
              <input type={"password"} placeholder={"Password"} required={true} />
            </div>
            <div className="other">
              <div className="checkBox">
                <input type={"checkBox"} id={"rememberMeCheckbox"} />
                <label htmlFor={"rememberMeCheckbox"}>Remember me</label>
              </div>
              <a href={"#"}>I forgot my password</a>
            </div>
            <button type={"submit"}>Sign In</button>
          </form>
          <div className="footer">
            Don't have an account? <a href={"#"}>Create a freee account</a>
          </div>
        </div>
        <div className="login-card-social">
          <span>Other Sign-in Platform</span>
          <div className="btn">
            <a href={"#"}>
              <Facebook />
            </a>
            <a href={"#"}>
              <Google />
            </a>
          </div>
        </div>

      </div>
    </>
  );
}

export default App;
