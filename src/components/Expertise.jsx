import { CUSINES } from "../constants";

const Expertise = () => {
  return (
    <section id="expertise" className="container mx-auto pb-8">
      <h2 className="mb-8 text-center text-3xl lg:text-4xl">Our Expertise</h2>

      <div className="flex flex-col gap-8">
        {CUSINES.map((cusine) => (
          <div
            key={cusine.number}
            className={
              "flex flex-wrap pb-3 " +
              (cusine.number === "03."
                ? ""
                : "border-b-2 border-dotted border-zinc-600/40")
            }
          >
            <div className="flex w-full lg:w-1/2">
              <p className="self-center pl-5 text-xl text-slate-300">
                {cusine.number}
              </p>
              <img
                src={cusine.image}
                alt={cusine.title}
                width={300}
                height={200}
                className="mx-auto rounded-3xl object-contain"
              />
            </div>

            <div className="flex w-full flex-col p-8 lg:w-1/2">
              <h3 className="mb-5 text-center text-2xl uppercase text-rose-300 lg:text-left">
                {cusine.title}
              </h3>
              <p className="text-base">{cusine.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
