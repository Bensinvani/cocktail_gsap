import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { navLinks } from "../../constants";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      // זה אומר שהפעולה תתבצע כאשר הדף יגלול כלפי מטה
      scrollTrigger: {
        trigger: "nav", // הכוונה של הניווט
        start: "top top", // התחלה של הניווט ואיפה הוא מסתיים
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backgroundFilter: "blur(10px)",
        duration: 1,
        ease: "power1.inout",
      }
    );
  });
  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
