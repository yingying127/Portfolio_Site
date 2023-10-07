const SocialMediaIcons = () => {
    return (
      <div className="flex justify-center md:justify-start my-10 gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/yingyingfeng1/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-white-link" src="../assets/linkedin-white.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/yingying127"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github-white-link" src="../assets/github-white.png" />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIcons;
  