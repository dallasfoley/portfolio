import {
  SiPython,
  SiCss3,
  SiHtml5,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiVite,
  SiLatex,
  SiVercel,
  SiReact,
  SiGit,
  SiC,
  SiCplusplus,
  SiSpring,
  SiSpringboot,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const SkillsTab = () => {
  return (
    <div className="flex flex-col justify-around items-center w-full h-full">
      <div>
        <p className="text-blue-600 text-center text-lg md:text-2xl mb-7">
          Programming Languages
        </p>
        <div
          className="grid grid-cols-6 text-2xl md:text-3xl 
        lg:text-5xl gap-5  md:gap-10"
        >
          <SiC color="black"></SiC>
          <SiCplusplus color="black"></SiCplusplus>
          <SiJavascript color="black" className="" />
          <SiTypescript color="black" className="" />
          <SiPython color="black" className="" />
          <FaJava color="black"></FaJava>
        </div>
      </div>
      <div>
        <p className="text-blue-600 text-center text-lg md:text-2xl my-7">
          Markup/Styling Languages
        </p>
        <div className="grid grid-cols-3 gap-8 md:gap-12 text-2xl md:text-3xl lg:text-5xl">
          <SiHtml5 color="black" />

          <SiCss3 color="black" />
          <SiTailwindcss color="black" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-blue-600 text-center text-lg md:text-2xl my-7">
          Libraries, Frameworks and Technologies
        </p>

        <div
          className="flex justify-between items-center text-2xl md:text-3xl 
          lg:text-5xl w-full md:gap-10 text-black font-bold"
        >
          <SiSpring color="black"></SiSpring>
          <SiSpringboot color="black"></SiSpringboot>
          <SiReact color="black" className="" />
          <SiNextdotjs color="black" className="" />
          <SiGit color="black" className="" />
          <SiVite color="black" className="" />
          <SiVercel color="black" />
          <SiLatex color="black" className="" />
        </div>
      </div>
    </div>
  );
};

export default SkillsTab;
