import SocialMediaIconsFooter from "../components/SocialMediaIconsFooter";

const Footer = () => {
  return (
    <footer className="bg-amber-50 opacity-80 py-4">
      <div className="w-10/12 mx-auto">
        <div className="md:flex justify-center md:justify-between">
          <SocialMediaIconsFooter />
          <p className="font-gabarito text-md text-black">
            ©2023 Property of Ying Ying Feng. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
