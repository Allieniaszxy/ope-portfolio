import { DiJavascript, DiNodejs, DiReact, DiGit } from "react-icons/di";
import Header from "../general/Header";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const skills = [
  {
    name: "JavaScript",
    icon: <DiJavascript />,
    skillLevel: "85",
  },
  {
    name: "React Js",
    icon: <DiReact />,
    skillLevel: "80",
  },
  {
    name: "Node Js",
    icon: <DiNodejs />,
    skillLevel: "75",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    skillLevel: "70",
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill />,
    skillLevel: "80",
  },
  {
    name: "Git",
    icon: <DiGit />,
    skillLevel: "80",
  },
  {
    name: "Next Js",
    icon: <RiNextjsFill />,
    skillLevel: "75",
  },
];
export default function SkillSection() {
  return (
    <section id="skills" className="py-16">
      <Header title="My Skills" />
      <div className="flex flex-wrap gap-6 justify-center">
        {skills.map((skill, index) => (
          <div
            className="bg-slate-900 text-center w-40 h-40 rounded-3xl flex flex-col items-center justify-center shadow-lg transition:hover:scale-110"
            key={index}
          >
            <div className="text-5xl text-gray-300">{skill.icon}</div>
            <p className="text-2xl font-semibold my-4 text-gray-200">
              {skill.skillLevel}%
            </p>
            <p className="text-indigo-500 font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
