import Dish from "./Dish";
import { DISHES } from "../constants";

const Dishes = () => {
  return (
    <section id="dishes" className="container mx-auto py-16">
      <h2 className="mb-16 text-center text-3xl lg:text-4xl">Our Dishes</h2>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-4">
        {DISHES.map((dish, index) => (
          <Dish key={index} dish={dish} />
        ))}
      </div>
    </section>
  );
};

export default Dishes;
