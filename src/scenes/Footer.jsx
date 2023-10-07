import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-24 bg-amber-50 opacity-80 py-6">
      <div className="w-10/12 mx-auto">
        <div className="md:flex justify-center md:justify-between text-center ">
        {/* <SocialMediaIcons/> */}
          <p className="font-gabarito text-md text-yellow">
            ©2022 Property of Ying Ying Feng. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
