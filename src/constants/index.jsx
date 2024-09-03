import dish1 from "../assets/dish1.jpeg";
import dish2 from "../assets/dish2.jpeg";
import dish3 from "../assets/dish3.jpeg";
import dish4 from "../assets/dish4.jpeg";
import dish5 from "../assets/dish5.jpeg";
import dish6 from "../assets/dish6.jpeg";
import dish7 from "../assets/dish7.jpeg";
import dish8 from "../assets/dish8.jpeg";
import dish9 from "../assets/dish9.jpeg";
import dish10 from "../assets/dish10.jpeg";

import chinese from "../assets/chinese.jpg";
import german from "../assets/german.jpg";
import greek from "../assets/greek.jpg";

import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";

export const LINKS = [
  { text: "Dishes", targetId: "dishes" },
  { text: "About", targetId: "about" },
  { text: "Mission", targetId: "mission" },
  { text: "Expertise", targetId: "expertise" },
  { text: "Review", targetId: "review" },
  { text: "Contact", targetId: "contact" },
];

export const DISHES = [
  {
    image: dish1,
    title: "Smoked Salmon Breakfast Casserole",
    description:
      "Rye bagels, hot-smoked salmon, and cream cheese combine for a stick-to-your-ribs egg bake.",
  },
  {
    image: dish2,
    title: "Flat Croissant with Nutella and Berries",
    description:
      "This flat croissant with Nutella and berries is as delicious as a tart.",
  },
  {
    image: dish3,
    title: "Shakshuka for One",
    description:
      "This shakshuka for one is for those days when you need a break from breakfast cereal.",
  },
  {
    image: dish4,
    title: "Juicy Roasted Chicken",
    description:
      "This roasted chicken is perfectly seasoned and just like the way my grandmother used to make it. ",
  },
  {
    image: dish5,
    title: "Baked Teriyaki Chicken",
    description:
      "This teriyaki chicken recipe uses a homemade teriyaki sauce to glaze chicken thighs that are baked in the oven for the most delicious sticky chicken.",
  },
  {
    image: dish6,
    title: "Hotdog Roll-Ups",
    description: "Here's a fun and tasty twist on a classic dog.",
  },
  {
    image: dish7,
    title: "Hawaiian Ham and Cheese Sliders",
    description:
      "Hawaiian sliders are great for potlucks for something fun and easy to share.",
  },
  {
    image: dish8,
    title: "Seared Chuck Eye Steak",
    description:
      "This chuck steak cuts like a ribeye. Seared in a hot skillet, then rested while you prepare a quick and easy pan sauce, this steak is tender and delicious.",
  },
  {
    image: dish9,
    title: "Fajita Marinade",
    description:
      "This fajita marinade with lime juice and olive oil is spiced up with cayenne pepper. It adds so much flavor to the meat for delicious fajitas.",
  },
  {
    image: dish10,
    title: "Grilled Balsamic Beef",
    description:
      "This grilled balsamic beef would be one of my signature dishes if I were a chef at a barbecue restaurant.",
  },
];

export const ABOUT = {
  header: "Our Culinary Journey!",
  content:
    "Discover a world of flavors at Flavor Odyssey, where innovation meets tradition. Our award-winning chef brings together diverse culinary influences to create unforgettable dishes. From bold spices to delicate harmonies, every bite is a symphony of taste. Experience the fusion of cultures in a casual and inviting atmosphere.",
};

export const MISSION =
  "At our restaurant, our mission is to delight our guests with exceptional culinary experiences that celebrate the fusion of flavors and cultures, while providing a warm and inviting atmosphere.";

export const CUSINES = [
  {
    number: "01.",
    image: german,
    title: "German",
    description:
      "Hearty, flavorful, and often featuring hearty meats, potatoes, and sauerkraut, German cuisine is known for its comfort food appeal.",
  },
  {
    number: "02.",
    image: greek,
    title: "Greek",
    description:
      "Mediterranean flavors and fresh ingredients are hallmarks of Greek cuisine.",
  },
  {
    number: "03.",
    image: chinese,
    title: "Chinese",
    description:
      "Known for its vibrant flavors, intricate techniques, and balance of sweet, sour, salty, and spiciness. Offers a diverse array of dishes",
  },
];

export const REVIEW = {
  name: "Xaviour Fernando",
  profession: "Food Critic",
  content:
    "“Flavor Odyssey is a culinary masterpiece that defies expectations. With a menu that seamlessly blends flavors from around the globe, every dish is a delightful surprise. Thier meals are a symphony of textures and tastes, a testament to the chef's artistry. The ambiance is warm and inviting, making it the perfect setting for a memorable dining experience.”",
};

export const CONTACT = [
  { key: "address", value: "Address: 123 Main Street, Foodieville, CA 90210" },
  { key: "phone", value: "Phone: (555) 555-5555" },
  { key: "email", value: "Email: flavor@Odyssey.com" },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/",
    icon: <FaFacebook fontSize={30} className="hover:opacity-80" />,
  },

  {
    href: "https://x.com/",
    icon: <FaInstagram fontSize={30} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaXTwitter fontSize={30} className="hover:opacity-80" />,
  },
];
