import { CameraIcon } from "@heroicons/react/24/solid";
import AboutImage from "../../assets/about.JPG";
import Certificate from "../../assets/certificate.jpg";

export default function About() {
  return (
    <div className="bg-white overflow-hidden">
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen" />
        <div className="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none sm:my-auto">
          <div>
            <h2 className="text-base text-primary font-semibold tracking-wide uppercase">
              little
            </h2>
            <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              About Me
            </h3>
          </div>
        </div>
        <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="relative lg:row-start-1 lg:col-start-2">
            <svg
              className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
              aria-hidden="true"
            >
              <defs>
                <pattern
                  id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)"
              />
            </svg>
            <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
              <figure>
                <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
                  <img
                    className="rounded-lg shadow-lg object-cover object-center"
                    src={AboutImage}
                    alt=""
                  />
                </div>
                <figcaption className="mt-3 flex text-sm text-gray-500">
                  <CameraIcon
                    className="flex-none w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                  <span className="ml-2">Durham college Whitby campus</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg text-gray-500">
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
              </p>
              <span className="text-primary">Work Experience</span>
              <div className="text-sm">
                <span className="underline font-semibold">
                  RED LOBSTER VOULENTEER
                </span>
                <br />
                <span className="text-gray-500">
                  THE BISTRO 67 KINGS CORNER
                </span>
              </div>
              <div className="text-sm">
                <span className="underline font-semibold">Kings Corner</span>
                <br />
                <span className="text-gray-500">
                  Bistro 67 ( voulanteer experience)
                </span>
              </div>
              <div className="text-sm">
                <span className="underline font-semibold">Farm Boy</span>
                <br />
                <span className="text-gray-500">Shrimp cocktail cafe</span>
              </div>
              <p className="text-primary mt-5">my recent achivement</p>
              <img src={Certificate} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
