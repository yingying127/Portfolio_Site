import SocialMediaIconsFooter from "../components/SocialMediaIconsFooter";

const Footer = () => {
  return (
    <footer className="bg-amber-50 opacity-80 py-4">
      <div className="w-10/12 mx-auto">
        <div className="md:flex justify-center md:justify-between text-center">
          <SocialMediaIconsFooter />
          <p className="md:flex justify-center font-gabarito text-md text-black">
            <span className="md:flex justify-center text-xl">©</span> &nbsp;Property of Ying Ying Feng. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
