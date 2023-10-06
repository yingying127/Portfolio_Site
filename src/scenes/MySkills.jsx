import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
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
            As a fullstack developer and former data scientist/entrepreneur, I bring a unique and potent 
            combination of skills to the table. Some of these skills include:
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
                src="assets/coding2-long.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/coding2-long.png" />
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
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            A good GUI can be the difference between a company that is successful, and one that is not.
            I have experience in building beautiful, responsive, and intuitive interfaces for web applications.
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
              <p className="font-gabarito font-semibold text-5xl">02</p>
              <p className="font-gabarito font-semibold text-3xl mt-3">
                Back End
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            I bring a great deal of knowledge and skill to the table when it comes to building scalable,
            secure, and efficient backends for web applications. I can work in multiple frameworks and languages 
            to augment the effectiveness of any team.
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
                ML/AI
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            My breadth of experience allows me to contribute to any aspect of a team in a significant capacity.
            I have experience in building and deploying machine learning models, as well as providing business
            analytics.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
