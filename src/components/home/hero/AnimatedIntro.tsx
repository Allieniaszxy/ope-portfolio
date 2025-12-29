import Typewriter from "typewriter-effect";
export default function AnimatedIntro() {
  return (
    <div className="text-lg h-30 px-8 text-center font-medium text-gray-400 sm:text-2xl">
      Hi, I'm Opeyemi - A passionate{" "}
      <span className="text-indigo-400 font-bold ">
        <Typewriter
          options={{
            strings: [
              "Computer Scientist",
              "UI/UX Designer",
              "Marketer Extraordinaire",
              "Virtual Assistant",
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
    </div>
  );
}
