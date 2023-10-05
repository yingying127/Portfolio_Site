import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-64 bg-red py-6">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-yellow">
            YING YING FENG
          </p>
          <p className="font-playfair text-md text-yellow">
            ©2022 Property of Ying Ying Feng. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
