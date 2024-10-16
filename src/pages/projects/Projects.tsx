import Button from "@mui/material/Button";

const URLs = [
  [
    "https://github.com/dallasfoley/recipe-finder",
    "/recipe-finder.png",
    "Recipe Finder",
    "Next.js, TypeScript, PostgreSQL, Prisma, Tailwind",
    "https://recipe-finder-peach.vercel.app",
  ],
  [
    "https://github.com/dallasfoley/Pokedol",
    "/poke2.png",
    "Pokedol",
    "React.js, TypeScript, Node/Express.js, MySQL",
    "https://pokedol.vercel.app/",
  ],
  [
    "https://github.com/dallasfoley/personal-site",
    "/portfolio3.png",
    "Portfolio",
    "Next.js, TypeScript, Tailwind",
    "",
  ],
  [
    "https://github.com/dallasfoley/Calculator",
    "/calc.png",
    "Calculator",
    "React.js, TypeScript, Vite, CSS",
  ],
  [
    "https://github.com/dallasfoley/ActionSudokuGame",
    "/sudoku.png",
    "Action Sudoku",
    "C++, CMake, wxWidgets, XML",
  ],
  [
    "https://github.com/dallasfoley/CanadianExperience",
    "/canadien2.png",
    "Canadian Experience",
    "C++, CMake, wxWidgets",
  ],
];

const Projects = () => {
  return (
    <div className="m-0 w-full min-h-screen flex flex-col items-center justify-around">
      <h1 className="text-6xl font-bold text-blue-400 my-16">Projects</h1>
      <div className="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-10 lg:gap-15 xl:gap-20 m-5">
        {URLs.map((url, key) => (
          <div
            key={key}
            className="flex flex-col justify-between w-full items-center text-black text-lg md:text-xl mt-10"
          >
            <img
              src={url[1]}
              alt="img"
              width={300}
              height={300}
              className="
               rounded-xl transform transition-transform duration-300 hover:scale-110"
            />
            <div
              className="flex flex-col justify-around items-center rounded-2xl mx-4
              sm:w-36 sm:h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 mt-5 md:mt-10 lg:mt-15 p-2 bg-white opacity-90 shadow-lg"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
                aspectRatio: "1 / 1",
              }}
            >
              <p className="text-xl text-center md:text-3xl my-2">{url[2]}</p>
              <div className="flex flex-col justify-around items-center">
                <a
                  className="transform transition-transform duration-300 hover:text-red-500 hover:scale-110 my-3"
                  href={url[0]}
                >
                  <Button variant="contained">
                    <p className="text-sm md:text-md">See on GitHub</p>{" "}
                  </Button>
                </a>
                {url.length === 5 && (
                  <a
                    href={url[4]}
                    className="transform transition-transform duration-300 hover:text-red-500 hover:scale-110 my-3"
                  >
                    <Button variant="contained">
                      <p className="text-sm md:text-md">See Site</p>
                    </Button>
                  </a>
                )}
                <p className="text-center md:text-lg my-3">
                  Tech Stack: {url[3]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
