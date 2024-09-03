import video from "../assets/hero.mp4";
import hero from "../assets/hero.jpg";

const Hero = () => {
  return (
    <section
      id=""
      className="relative h-screen flex justify-center items-center"
    >
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

      <div className="relative z-20 flex flex-col p-4 gap-5">
        <h1 className="text-6xl lg:text-7xl font-semibold hero-heading">
          Where Flavors Come Together
        </h1>
        <p className="text-lg tracking-tighter px-5">California, USA</p>
      </div>
    </section>
  );
};

export default Hero;
