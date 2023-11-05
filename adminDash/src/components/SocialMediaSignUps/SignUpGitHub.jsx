import GitHubImage from "../../assets/GitHub.png";

const SignUpGitHub = () => {
  return (
    <div>
      <button className="flex justify-center items-center w-[11.38889rem] h-[2.5rem] border border-solid border-gray-300 rounded-[0.278rem] bg-white cursor-pointer hover:bg-gray-100">
        <div className="w-[7.8rem] text-text-color text-text-size font-semibold leading-[1.6rem] font-text capitalize">
          Sign Up With GitHub
        </div>
        <div className="w-[1.78rem] h-[1.7rem] ml-1">
          <img src={GitHubImage} alt="github logo" />
        </div>
      </button>
    </div>
  );
};

export default SignUpGitHub;
