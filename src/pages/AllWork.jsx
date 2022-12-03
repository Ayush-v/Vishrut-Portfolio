import Image1 from "../assets/food/food1.jpg";
import Image2 from "../assets/food/food2.jpg";
import Image3 from "../assets/food/food3.jpg";
import Image4 from "../assets/food/food4.jpg";
import Image5 from "../assets/food/food5.jpg";
import Image6 from "../assets/food/food6.jpg";
import Image7 from "../assets/food/food7.jpg";
import Image8 from "../assets/food/food8.jpg";
import Image9 from "../assets/food/food9.jpg";
import Image10 from "../assets/food/food10.jpg";
import Image11 from "../assets/food/food11.jpg";
import Image12 from "../assets/food/food12.jpg";
import Image13 from "../assets/food/food13.jpg";
import Image14 from "../assets/food/food14.jpg";
import Image15 from "../assets/food/food15.jpg";
import Image16 from "../assets/food/food16.jpg";
import Image17 from "../assets/food/food17.jpg";
import Image18 from "../assets/food/food18.jpg";
import Image19 from "../assets/food/food19.JPG";
import Image20 from "../assets/food/food20.JPG";
import Image21 from "../assets/food/food21.jpg";
import { Link } from "react-router-dom";

const files = [
  {
    title: "Gluten free brownie with candy orange",
    size: "Durham college Whitby campus",
    source: Image1,
  },
  {
    title: "Charcuterie board and mussels",
    size: "shimp cocktail cafe",
    source: Image2,
  },
  {
    title: "Harvest Dinner",
    size: "Durham college Whitby campus",
    source: Image3,
  },
  {
    title: "Fish en papillote",
    size: "Durham college Whitby campus",
    source: Image4,
  },
  {
    title: "Lemon meringue",
    size: "Bistro 67 and audra Richardson",
    source: Image5,
  },
  {
    title: "Duck confit with romensco and carrot puree",
    size: "Durham college Whitby campus",
    source: Image6,
  },
  {
    title: "Italian buttercream cake",
    size: "Durham college Whitby campus",
    source: Image7,
  },
  {
    title: "Coconut Panna Cotta",
    size: "Bistro 67 and audra Richardson",
    source: Image8,
  },
  {
    title: "Flank steak",
    size: "Bistro 67 and audra Richardson",
    source: Image9,
  },
  {
    title: "Chocolate bread pudding with cherry granita",
    size: "Durham college Whitby campus",
    source: Image10,
  },
  {
    title: "Carrot ice cream with granola nits",
    size: "Bistro 67 and audra Richardson",
    source: Image11,
  },
  {
    title: "Salmon steak with asparagus",
    size: "Bistro 67 and audra Richardson",
    source: Image12,
  },
  {
    title: "chocolate bread pudding h",
    size: "Durham college Whitby campus",
    source: Image13,
  },
  {
    title: "Gluten free brownie with candied orange",
    size: "Durham college Whitby campus",
    source: Image14,
  },
  {
    title: "Charcuterie board",
    size: "Bistro 67 and audra Richardson",
    source: Image15,
  },
  {
    title: "Smoked Cranberry Glaze",
    size: "Durham college Whitby campus",
    source: Image16,
  },
  {
    title: "Chicken supreme with asparagus and pee puree",
    size: "Bistro 67 and audra Richardson",
    source: Image17,
  },
  {
    title: "Durham college Whitby campus",
    size: "Durham college Whitby campus",
    source: Image18,
  },
  {
    title: "Assorted dessert platter",
    size: "Durham college Whitby campus",
    source: Image19,
  },
  {
    title: "Sea bream with mash potatoes",
    size: "Durham college Whitby campus",
    source: Image20,
  },
  {
    title: "Fondant potatoes",
    size: "Durham college Whitby campus",
    source: Image21,
  },
];

const AllWork = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 my-6">
      <div className="lg:relative m-4 max-w-7xl mx-auto">
        <Link
          to="/"
          className="block text-sm font-semibold text-primary hover:text-primary"
        >
          <span aria-hidden="true"> &larr;</span>Home
        </Link>
        <h1 className="text-5xl mb-8 mt-5 text-primary underline font-medium">
          All My Recent Work
        </h1>
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {files.map((file) => (
            <div key={file.source}>
              <div className="w-full">
                <img
                  src={file.source}
                  alt=""
                  className="rounded-2xl h-48 w-96 object-cover"
                />
              </div>
              <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                {file.title}
              </p>
              <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                {file.size}
              </p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllWork;
