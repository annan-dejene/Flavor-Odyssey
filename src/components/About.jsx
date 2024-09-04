import about from "../assets/about.jpg";
import { ABOUT } from "../constants";

const About = () => {
  return (
    <section id="about" className="container mx-auto py-16">
      <h2 className="mb-16 text-center text-3xl lg:text-4xl">About Us</h2>

      <div className="flex flex-wrap">
        <div className="w-full p-4 lg:w-1/2">
          <img
            src={about}
            alt="about"
            className="mx-auto h-[680px] rounded-3xl lg:-rotate-3"
          />
        </div>

        <div className="w-full px-2 lg:w-1/2">
          <h3 className="text-4xl md:text-5xl">{ABOUT.header}</h3>
          <div className="mt-1 h-1 w-36 -rotate-3 bg-rose-300 text-center" />
          <p className="m-8 text-2xl leading-normal tracking-tight text-[#a7a3a3] lg:max-w-[480px] lg:leading-relaxed">
            {ABOUT.content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
