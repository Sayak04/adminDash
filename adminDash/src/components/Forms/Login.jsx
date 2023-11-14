import { useState } from "react";
import styled from "styled-components";
import LoginGoogle from "./../SocialMediaLogins/LoginGoogle";
import LoginGithub from "../SocialMediaLogins/LoginGitHub";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form>
        <input
          type="email"
          placeholder="Email-Id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="primary-button bg-blue-500 text-white" type="submit">
          LOGIN
        </button>
      </form>
      <OrSeperator>
        <span>OR</span>
      </OrSeperator>
      <AlternateLogins>
        <LoginGoogle />
        <LoginGithub />
      </AlternateLogins>
    </div>
  );
};

const OrSeperator = styled.div`
  font-family: Nunito Sans;
  color: rgba(0, 0, 34, 0.5);
  font-weight: 800;
  padding: 0.7rem;
`;

const AlternateLogins = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Login;
