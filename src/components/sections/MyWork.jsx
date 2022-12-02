import { Link } from "react-router-dom";
// import food1 from "../../assets/food/food1.jpg";
// import food2 from "../../assets/food/food6.jpg";

const categories = [
  {
    name: "Bistro 67 and Audra Richardson",
    // imageSrc: food1,
  },
  {
    name: "Dish 2",
    // imageSrc: food2,
  },
  {
    name: "Dish 3",
    imageSrc: "/src/assets/food/food3.JPG",
  },
  {
    name: "Dish 4",
    imageSrc: "/src/assets/food/food4.JPG",
  },
  {
    name: "Shrimp Cocktail Cafe",
    imageSrc: "/src/assets/food/food5.JPG",
  },
];

export default function MyWork() {
  return (
    <div className="bg-white" id="Work">
      <div className="py-16 sm:py-24 xl:max-w-7xl xl:mx-auto xl:px-8">
        <div className="px-4 sm:px-6 sm:flex sm:items-center sm:justify-between lg:px-8 xl:px-0">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            My Work
          </h2>
          <Link
            to="allWork"
            className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block"
          >
            Browse all my work<span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="box-content py-3 relative h-80 xl:h-[325px] overflow-x-auto">
              <div className="absolute min-w-screen-xl px-4 flex space-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:grid xl:grid-cols-5 xl:gap-x-[450px]">
                {categories.map((category) => (
                  <div
                    key={category.name}
                    className="relative w-[400px] h-80 rounded-lg p-6 flex flex-col overflow-hidden group hover:-translate-y-2 transition-all duration-200"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img
                        src={category.imageSrc}
                        alt=""
                        className="w-full h-full object-center object-cover"
                      />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50 group-hover:opacity-75 group-hover:h-full transition-all duration-200"
                    />
                    <span className="relative mt-auto group-hover:my-auto text-center text-xl font-bold text-white transition-all duration-300 ">
                      {category.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <Link
            to="allWork"
            className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Browse all my work<span aria-hidden="true"> &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
