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

const files = [
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image1,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image2,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image3,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image4,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image5,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image6,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image7,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image8,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image9,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image10,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image11,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image12,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image13,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image14,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image15,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image16,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image17,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image18,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image19,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image20,
  },
  {
    title: "IMG_4985.HEIC",
    size: "3.9 MB",
    source: Image21,
  },
];

const AllWork = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8 my-6">
      <div className="lg:relative m-4 max-w-7xl mx-auto">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
          {files.map((file) => (
            <li key={file.source} className="relative">
              <div className="group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
                <img
                  src={file.source}
                  alt=""
                  className="object-cover pointer-events-none group-hover:opacity-75"
                />
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">View details for {file.title}</span>
                </button>
              </div>
              <p className="mt-2 block text-sm font-medium text-gray-900 truncate pointer-events-none">
                {file.title}
              </p>
              <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                {file.size}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllWork;
