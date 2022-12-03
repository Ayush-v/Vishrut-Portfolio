import HeroImage from "../../assets/heroimage.JPG";
import { Link as LinkS } from "react-scroll";

export default function HeroSection() {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <main className="lg:relative bg-[#F4F4F4] m-4 rounded-3xl overflow-hidden max-w-7xl mx-auto">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Hi,</span>{" "}
              <span className="block text-primary xl:inline">
                I'm Vishrut Vashisht
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              {/* Culinary management student. */}A self motivated culinary
              management student. Looking forward to make you never forget your
              next dish.
              {/* Looking forward to make you taste your next
              dish. */}
            </p>
            <div className="mt-8 flex gap-x-4">
              <LinkS
                to="Work"
                smooth={true}
                spy={true}
                duration={1000}
                className="inline-block rounded-lg bg-primary px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-primabg-primary hover:bg-primary/75 hover:ring-primary/hover:bg-primary/90 cursor-pointer"
              >
                My Work
              </LinkS>
              <LinkS
                to="contact"
                smooth={true}
                spy={true}
                duration={1000}
                className="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20 cursor-pointer"
              >
                Contact Me
              </LinkS>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={HeroImage}
            alt=""
          />
        </div>
      </main>
    </div>
  );
}
