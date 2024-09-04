/* eslint-disable react/prop-types */
const Dish = ({ dish }) => {
  return (
    <div className="m-3 mx-auto w-[50%] border border-slate-400/30 sm:m-0 sm:w-full">
      <img
        src={dish.image}
        alt={dish.title}
        className="mx-auto h-[220px] w-[300px] rounded-3xl object-contain p-2"
      />
      <div className="p-2 text-center sm:text-left">
        <h3 className="mb-2 text-lg tracking-tighter">{dish.title}</h3>
        <p className="truncate text-sm text-slate-400">{dish.description}</p>
      </div>
    </div>
  );
};

export default Dish;
