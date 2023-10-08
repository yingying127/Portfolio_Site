import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-6 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-gabarito font-semibold text-4xl mb-5">
            MY <span className="text-pink-900">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            As a full stack developer with a background in architecture, I offer an abstract and unique skill set that bridges the world of design and development.
            <br></br>Some of these skills include:
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/coding1.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/coding1.png" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* FRONT END */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-gabarito font-semibold text-5xl">01</p>
              <p className="font-gabarito font-semibold text-3xl mt-3">
                Front End
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-pink-900 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            An effective and visually appealing user interface is an essential component in achieving favorable outcomes. <br></br>
            Through my experience, I have demonstrated the ability to craft stunning, highly responsive, and user-friendly interfaces for web applications.
          </p>
        </motion.div>

        {/* BACK END */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-gabarito font-semibold text-black text-5xl">02</p>
              <p className="font-gabarito font-semibold text-black text-3xl mt-3">
                Back End
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-amber-50 absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            An organized database enhances scalability and security for web applications. <br></br>
            I am dedicated to acquiring new skills, and I possess proficiency in multiple frameworks and languages, which enhances team effectiveness.
          </p>
        </motion.div>
        {/* ML/AI */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-gabarito font-semibold text-5xl">03</p>
              <p className="font-gabarito font-semibold text-3xl mt-3">
                APIs
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
          I have hands-on experience working with various APIs, integrating external services to enhance the functionality of web applications. <br></br>
          This experience has enabled me to build versatile and interconnected software solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
