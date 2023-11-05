import { useState } from "react";
import styled from "styled-components";
import "../../App.css";
import axios from "axios";
import SignUpGoogle from "../SocialMediaSignUps/SignUpGoogle";
import SignUpGitHub from "../SocialMediaSignUps/SignUpGitHub";
import { toast } from "react-toastify";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypedPassword, setRetypedPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // check if the password and the retyped password match
      if (password !== retypedPassword) {
        toast.error("Passwords do not match");
        return;
      }

      // check the strength of the password
      
      
      const result = await axios
        .post("/api/v1/sign-up", {
          firstName,
          lastName,
          email,
          password,
        })
        .then((response) => {
          console.log(response);
          toast.success(`Welcome ${firstName} ${lastName}`);
        })
        .catch((error) => {
          console.log(error);
          toast.error("Axios Error: " + error.message);
        });
    } catch (err) {
      console.log(err);
      toast.error("Something went wrong");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Confirm Password"
          value={retypedPassword}
          onChange={(e) => setRetypedPassword(e.target.value)}
        />
        <button className="primary-button bg-blue-500" type="submit">
          SIGN UP
        </button>
      </form>
      <OrSeperator>
        <span>OR</span>
      </OrSeperator>
      <AlternateSignUps>
        <SignUpGoogle />
        <SignUpGitHub />
      </AlternateSignUps>
    </div>
  );
};

const OrSeperator = styled.div`
  font-family: Nunito Sans;
  color: rgba(0, 0, 34, 0.5);
  font-weight: 800;
  padding: 0.7rem;
`;

const AlternateSignUps = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default SignUp;
