import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

const links = [
  "https://github.com/dallasfoley",
  "https://www.linkedin.com/in/dallastfoley/",
  "https://www.instagram.com/dallastfoley/",
];

const icons = [
  <SiGithub key={1} style={{ fontSize: "60px" }} />,
  <SiLinkedin key={2} style={{ fontSize: "60px" }} />,
  <SiInstagram key={3} style={{ fontSize: "60px" }} />,
];

const Contact = () => {
  return (
    <div className="flex flex-col lg:flex-row h-full">
      <div className="m-10 lg:basis-1/2 flex flex-col justify-center items-center text-black text-xl md:text-4xl">
        <div className="flex flex-row items-center">
          <MdEmail className="text-xl md:text-3xl lg:text-4xl" />
          <p className="m-5"> dallastfoley@gmail.com</p>
        </div>
        <div className="flex flex-row m-5 items-center">
          <FaPhone className="text-xl md:text-3xl lg:text-4xl" />
          <p className="ml-5"> (248)-962-5493</p>
        </div>
        <div className="flex justify-around">
          {icons.map((icon, key) => (
            <a
              href={links[key]}
              key={key}
              className="m-5 mt-10 text-4xl text-white transition duration-500 
          ease-in-out hover:text-red-500 hover:-translate-y-3"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
      <div className="flex-grow m-0 lg:basis-1/2 flex flex-col justify-around items-center">
        <h1 className="text-5xl text-blue-400 font-bold mt-10">Contact Me</h1>
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          className="w-full max-w-md flex flex-col justify-around items-center p-5"
        >
          <input
            type="hidden"
            name="access_key"
            value="a1b887f5-ca7e-4942-84d9-2879b248c238"
          />
          <input
            type="text"
            name="name"
            placeholder="Your name..."
            className="h-14 w-72 md:h-20 md:w-96 rounded-3xl p-3 my-5"
          />
          <input
            type="text"
            name="email"
            placeholder="Your email..."
            className="h-14 w-72 md:h-20 md:w-96 p-3 rounded-3xl my-5"
          />
          <input
            type="text"
            name="message"
            placeholder="Your message..."
            className="h-64 w-72 md:w-96 p-3 rounded-3xl my-5"
          />
          <button
            type="submit"
            className="h-20 w-20 flex items-center justify-center mb-5 rounded-3xl bg-slate-700 transition duration-300 
        ease-in-out hover:bg-red-500 hover:scale-110"
          >
            <IoIosSend style={{ fontSize: "40px", color: "white" }} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
