import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { MdMail } from "react-icons/md";

const links = [
  "https://github.com/dallasfoley",
  "https://www.linkedin.com/in/dallastfoley/",
  "https://www.instagram.com/dallastfoley/",
  "https://dallastfoley.netlify.app/contact",
];

const icons = [
  <SiGithub key={1} style={{ fontSize: "90px" }} />,
  <SiLinkedin key={2} style={{ fontSize: "90px" }} />,
  <SiInstagram key={3} style={{ fontSize: "90px" }} />,
  <MdMail key={4} style={{ fontSize: "90px" }} />,
];

export default function Home() {
  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <h1 className="text-5xl md:text-8xl text-blue-600 font-bold mt-20 mb-10">
        Hi, I'm Dallas
      </h1>
      <h1 className="text-3xl md:text-4xl text-blue-600 font-bold mt-10 mb-20">
        Frontend Developer
      </h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-20 md:flex justify-around">
        {icons.map((icon, key) => (
          <a
            href={links[key]}
            key={key}
            className=" text-white transition duration-500 
          ease-in-out hover:text-red-500 hover:-translate-y-3"
          >
            {icon}
          </a>
        ))}
      </div>
    </div>
  );
}
