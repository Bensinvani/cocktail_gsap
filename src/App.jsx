import gsap from "gsap"; // import GSAP
import { ScrollTrigger, SplitText } from "gsap/all"; //import GSAP Plugins
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

// then register them
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
    </main>
  );
};

export default App;
