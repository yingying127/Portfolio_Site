import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  // dictates the transition of children one by one with 0.2 gap between
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  // initial and final edition of each child element
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtext }) => {
  // represents the text that appears on hover. Z-30 allows it to be on top of the image
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-gabarito">{title}</p>
        <p className="mt-7">{subtext}</p>
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

// display different text depending on project title
// display different image depending on project title


const Projects = () => {
  return (
    <section id="projects" className="pt-24 pb-24">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-gabarito font-semibold text-4xl">
            <span className="text-pink-900">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-1/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Across the stack, the projects I have worked on have helped people, businesses, and expanded my 
          knowledge base and skills in web development.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-pink-900
              max-w-[400px] max-h-[400px] text-2xl font-gabarito font-semibold"
          >
            EFFICIENT BACKENDS
          </div>
          <Project title="Boba Girl" subtext="An e-commerce store offers the convenience of purchasing boba ingredients and kits, which are delivered for a homemade boba experience."/>
          <Project title="Life Below Water" subtext="A theoretical online recycling program designed to monitor recycling activity, manage receipts, and distribute rewards."/>

          {/* ROW 2 */}
          <Project title="Gift Finder" subtext="A platform for gift suggestions, wishlist sharing, and reserving gifts within user communities."/>
          <div
            className="flex justify-center text-center items-center p-10 bg-amber-50 text-pink-900
              max-w-[400px] max-h-[400px] text-2xl font-gabarito font-semibold"
          >
            FUNCTIONAL APIs
          </div>
          <Project title="Meet me at the Spot" subtext="A curated website to view public exhibitions at various museums. "/>

          {/* ROW 3 */}
          <Project title="Portfolio Site" subtext="This portfolio site, built in React.js."/>
          <Project title="Bubble Bear Tea" subtext="A website for a bubble tea shop highlighting the menu and the owners' commitment and backstory."/>
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-gabarito font-semibold"
          >
            SMOOTH FRONTENDS
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
