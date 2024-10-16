import {
  SiPython,
  SiCss3,
  SiHtml5,
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
  SiNodedotjs,
  SiExpress,
  SiPrisma,
  SiPostgresql,
  SiNextdotjs,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const SkillsTab = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col items-center mb-7">
        <p className="text-blue-600 text-center text-lg md:text-2xl">
          Programming Languages
        </p>
        <div className="grid grid-cols-7 text-2xl md:text-3xl lg:text-5xl gap-5 md:gap-10 mt-4">
          <SiC color="black" title="C" />
          <SiCplusplus color="black" title="C++" />
          <SiJavascript color="black" title="JavaScript" />
          <SiTypescript color="black" title="TypeScript" />
          <SiPython color="black" title="Python" />
          <FaJava color="black" title="Java" />
          <SiPostgresql color="black" title="PostgreSQL" />
        </div>
      </div>

      <div className="flex flex-col items-center my-7">
        <p className="text-blue-600 text-center text-lg md:text-2xl">
          Markup/Styling Languages
        </p>
        <div className="grid grid-cols-3 gap-8 md:gap-12 text-2xl md:text-3xl lg:text-5xl mt-4">
          <SiHtml5 color="black" title="HTML5" />
          <SiCss3 color="black" title="CSS3" />
          <SiXaml color="black" title="XML/XAML" />
        </div>
      </div>

      <div className="flex flex-col items-center my-7">
        <p className="text-blue-600 text-center text-lg md:text-2xl">
          Libraries and Frameworks
        </p>
        <div className="grid grid-cols-7 gap-8 md:gap-12 text-2xl md:text-3xl lg:text-5xl mt-4">
          <SiReact color="black" title="React.js" />
          <SiNextdotjs color="black" title="Next.js" />
          <SiNodedotjs color="black" title="Node.js" />
          <SiExpress color="black" title="Express.js" />
          <SiSpring color="black" title="Java Spring" />
          <SiSpringboot color="black" title="Spring Boot" />
          <SiTailwindcss color="black" title="Tailwind CSS" />
        </div>
      </div>

      <div className="flex flex-col items-center my-7">
        <p className="text-blue-600 text-center text-lg md:text-2xl">
          Technologies
        </p>
        <div className="grid grid-cols-7 gap-6 md:gap-12 text-2xl md:text-3xl lg:text-5xl mt-4">
          <SiGit color="black" title="Git" />
          <SiVercel color="black" title="Vercel" />
          <SiPrisma color="black" title="Prisma" />
          <SiVite color="black" title="Vite" />
          <SiEslint color="black" title="ESLint" />
          <SiPrettier color="black" title="Prettier" />
          <SiLatex color="black" title="LaTeX" />
        </div>
      </div>
    </div>
  );
};

export default SkillsTab;
