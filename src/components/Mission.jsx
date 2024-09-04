import mission from "../assets/mission.mp4";
import poster from "../assets/hero.jpg";
import { MISSION } from "../constants";

const Mission = () => {
  return (
    <section id="mission">
      <div className="container mx-auto pb-16 text-center">
        <h2 className="mb-8 text-3xl lg:text-4xl">Our Mission</h2>

        <div className="relative flex items-center justify-center">
          <video
            src={mission}
            muted
            autoPlay
            loop
            playsInline
            poster={poster}
            className="w-full rounded-3xl"
          ></video>

          <div className="absolute h-full w-full rounded-3xl bg-black/70" />

          <p className="absolute max-w-[500px] text-xl leading-relaxed tracking-tight">
            {MISSION}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
