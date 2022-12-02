import About from "../components/sections/About";
import ContactMe from "../components/sections/ContactMe";
import HeroSection from "../components/sections/HeroSection";
import MyWork from "../components/sections/MyWork";

const Home = () => {
  return (
    <>
      <HeroSection />
      <About />
      <MyWork />
      <ContactMe />
    </>
  );
};

export default Home;
