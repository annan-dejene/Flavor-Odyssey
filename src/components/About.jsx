import about from "../assets/about.jpg";
import { ABOUT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="container mx-auto pb-16">
      <h2 className="mb-16 text-center text-3xl lg:text-4xl">About Us</h2>

      <div className="flex flex-wrap">
        <div className="w-full p-4 lg:w-1/2">
          <img
            src={about}
            alt="about"
            className="mx-auto h-[680px] rounded-3xl lg:-rotate-3"
          />
        </div>

        <div className="w-full px-5 lg:w-1/2">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl"
          >
            {ABOUT.header}
          </motion.h3>

          <motion.div
            className="mt-1 h-1 w-36 bg-rose-300 text-center"
            initial={{ opacity: 0, y: 30, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            tansition={{ duration: 1, delay: 0.2 }}
            className="m-8 text-2xl leading-normal tracking-tight text-[#a7a3a3] lg:max-w-[480px] lg:leading-relaxed"
          >
            {ABOUT.content}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;
