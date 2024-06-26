import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import LineGradient from "../components/LineGradient";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-00 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[500px]"
              src="assets/yypf-curved.png"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[300px] md:max-w-[500px]"
            src="assets/yypf-curved.png"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair">
            Ying Ying
          </p>
          <p className="text-pink-900 text-6xl font-playfair">
            Feng
          </p>
          <LineGradient width="w-1/3" />

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
          Hi! I'm a Software Developer with experience in freelance website design. I am eager to collaborate with forward-thinking teams, in delivering high-quality software solutions that meet user needs and drive technological advancement.
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-to-r from-rose-900 to-pink-700 text-white rounded-md py-3 px-7
              hover:bg-blue hover:text-black hover:drop-shadow-xl transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="p-0.5 rounded-md bg-gradient-to-r from-rose-900 to-pink-700 py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-amber-50 text-black font-bold rounded-md hover:text-rose-900 hover:drop-shadow-xl transition duration-500 w-full h-full flex items-center justify-center px-10 font-'Gabarito'">
              Let's talk
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        > 
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
