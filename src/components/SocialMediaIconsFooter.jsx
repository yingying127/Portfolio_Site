const SocialMediaIconsFooter = () => {
    return (
      <div className="flex justify-center md:justify-start gap-7">
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://www.linkedin.com/in/yingyingfeng1/"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="linkedin-link" src="../assets/linkedin.png" />
        </a>
        <a
          className="hover:opacity-50 transition duration-500"
          href="https://github.com/yingying127"
          target="_blank"
          rel="noreferrer"
        >
          <img alt="github-link" src="../assets/github.png" />
        </a>
      </div>
    );
  };
  
  export default SocialMediaIconsFooter;
  