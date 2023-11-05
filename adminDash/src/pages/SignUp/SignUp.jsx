import styled from "styled-components";
import XeroCode from "../../assets/XeroCode.png";
import BroImg from "../../assets/bro.png";
import SignUpForm from "../../components/Forms/SignUp";
import SignUpVector from "../../components/Vectors/SignUpVector";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div>
      <MainContainer>
        <ContentContainer>
          <div className="grid-container">
            <div className="left-grid">
              <div className="logo-container">
                <img src={XeroCode} alt="logo" />
              </div>
              <div className="hello-container">
                <span>Hello!</span>
              </div>
              <FormContainer>
                <div className="create-account-container">
                  <Line />
                  <CreateText>Create Your Account</CreateText>
                  <Line />
                </div>
                <div className="input-container">
                  <SignUpForm />
                </div>
                <div className="mt-4">
                  <span>Already Have an Account ? </span>
                  <a href="/" style={{ color: "#1F64FF" }}>
                    LOGIN
                  </a>
                </div>
              </FormContainer>
            </div>
            <div className="right-grid">
              <div className="blank-container"></div>
              <div className="img-container">
                <img src={BroImg} alt="bro img" />
              </div>
              <SignUpVector />
            </div>
          </div>
        </ContentContainer>
      </MainContainer>
    </div>
  );
};

const MainContainer = styled.div`
  height: 100vh;
  background-color: rgba(194, 218, 251, 0.9);
  display: flex;
`;

const ContentContainer = styled.div`
  margin: auto;
  width: 55rem;
  height: 35rem;
  border-radius: 0rem 1.94444rem 0rem 1.94444rem;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CreateText = styled.div`
  padding: 0 7px;
`;

const Line = styled.div`
  flex: 1;
  height: 1.3px;
  background-color: #ccc;
`;

const FormContainer = styled.div`
  color: rgba(0, 0, 34, 0.5);
  text-align: center;
  font-family: Nunito;
  font-size: 0.77778rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  text-transform: capitalize;
  border-right: 1px solid #ccc;
  padding-right: 1.7rem;
`;

export default SignUp;
