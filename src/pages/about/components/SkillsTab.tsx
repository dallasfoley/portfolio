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
  SiXaml,
  SiEslint,
  SiPrettier,
  SiMysql,
  SiPostgresql,
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
          className="grid grid-cols-8 text-2xl md:text-3xl 
        lg:text-5xl gap-5  md:gap-10"
        >
          <SiC color="black" title="C"></SiC>
          <SiCplusplus color="black" title="C++"></SiCplusplus>
          <SiJavascript color="black" title="JavaScript" className="" />
          <SiTypescript color="black" title="TypeScript" className="" />
          <SiPython color="black" title="Python" className="" />
          <FaJava color="black" title="Java"></FaJava>
          <SiMysql color="black" title="MySQL"></SiMysql>
          <SiPostgresql color="black" title="PostgreSQL"></SiPostgresql>
        </div>
      </div>
      <div>
        <p className="text-blue-600 text-center text-lg md:text-2xl my-7">
          Markup/Styling Languages
        </p>
        <div className="grid grid-cols-3 gap-8 md:gap-12 text-2xl md:text-3xl lg:text-5xl">
          <SiHtml5 color="black" title="HTML5" />
          <SiCss3 color="black" title="CSS3" />
          <SiXaml color="black" title="XML/XAML" />
        </div>
      </div>
      <div>
        <p className="text-blue-600 text-center text-lg md:text-2xl my-7">
          Libraries and Frameworks
        </p>
        <div className="grid grid-cols-5 gap-8 md:gap-12 text-2xl md:text-3xl lg:text-5xl">
          <SiSpring color="black" title="Java Spring"></SiSpring>
          <SiSpringboot color="black" title="Spring Boot"></SiSpringboot>
          <SiReact color="black" title="React.js" className="" />
          <SiNextdotjs color="black" title="Next.js" />
          <SiTailwindcss color="black" title="Tailwind CSS" />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p className="text-blue-600 text-center text-lg md:text-2xl my-7">
          Technologies
        </p>

        <div className="grid grid-cols-6 gap-6 md:gap-12 text-2xl md:text-3xl lg:text-5xl">
          <SiGit color="black" title="Git" className="" />
          <SiVite color="black" title="Vite" className="" />
          <SiVercel color="black" title="Vercel" />
          <SiEslint color="black" title="ESLint" />
          <SiPrettier color="black" title="Prettier" />
          <SiLatex color="black" title="LaTeX" className="" />
        </div>
      </div>
    </div>
  );
};

export default SkillsTab;
