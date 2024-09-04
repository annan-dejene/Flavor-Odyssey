import mission from "../assets/mission.mp4";
import poster from "../assets/mission.jpg";
import { MISSION } from "../constants";
import { motion } from "framer-motion";

const Mission = () => {
  return (
    <section id="mission">
      <div className="container mx-auto pb-16 text-center">
        <h2 className="mb-8 text-3xl lg:text-4xl">Our Mission</h2>

        <div className="relative flex items-center justify-center">
          <motion.video
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            src={mission}
            muted
            autoPlay
            loop
            playsInline
            poster={poster}
            className="w-full rounded-3xl"
          ></motion.video>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute h-full w-full rounded-3xl bg-black/70"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute max-w-[500px] text-xl leading-relaxed tracking-tight"
          >
            {MISSION}
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
