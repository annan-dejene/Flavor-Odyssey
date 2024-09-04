import { REVIEW } from "../constants";
import andrea from "../assets/andrea.jpg";

const Review = () => {
  return (
    <section id="review" className="container mx-auto pb-16">
      <p className="px-8 text-xl font-extralight italic leading-relaxed tracking-wide md:text-3xl md:leading-loose lg:mx-auto lg:w-[800px]">
        {REVIEW.content}
      </p>

      <div className="mx-auto mt-5 flex w-full justify-center gap-5">
        <img
          src={andrea}
          alt="andrea"
          className="h-40 w-40 rounded-full object-cover"
        />

        <div className="flex flex-col justify-center">
          <h3 className="text-xl">{REVIEW.name}</h3>
          <p className="text-slate-500">{REVIEW.profession}</p>
        </div>
      </div>
    </section>
  );
};

export default Review;
