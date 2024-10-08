import video from "../assets/hero.mp4";
import hero from "../assets/hero.jpg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={video}
          muted
          autoPlay
          loop
          playsInline
          poster={hero}
          className="h-full w-full object-cover"
        ></video>
      </div>

      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-black" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="relative z-20 flex flex-col gap-5 self-end px-4 py-36"
      >
        <h1 className="hero-heading text-6xl font-semibold lg:text-7xl">
          Where Flavors Come Together
        </h1>
        <p className="px-5 text-lg tracking-tighter">California, USA</p>
      </motion.div>
    </section>
  );
};

export default Hero;
