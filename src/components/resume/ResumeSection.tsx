import {
  LuAward,
  LuBookOpen,
  LuGraduationCap,
  LuPackage,
  LuServer,
} from "react-icons/lu";
import Header from "../general/Header";
import ResumeCard from "./ResumeCard";
import { RiNextjsFill } from "react-icons/ri";

export default function ResumeSection() {
  return (
    <section id="resume" className="my-12">
      <div className="w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* education section */}
        <div className="" data-aos="zoom-out">
          <Header title="My Education" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={LuGraduationCap}
              role="Master of Computer Science"
              date="Feb 2022 - Dec 2023"
              description="Higher National Diploma in Computer Science | Lagos State Polytechnic | Focused on algorithms, data structures, and software development and web development and technologies"
            />
            <ResumeCard
              icon={LuBookOpen}
              role="Relevant Coursework"
              description="Web Development and Technologies, Data Structures and Algorithms, Software Engineering, Database Management, Computer Networks, Computer Security, Programming Languages (Java, C++)"
            />
            <ResumeCard
              icon={LuAward}
              role="Academic Achievement"
              description="Dean's List | Lagos State Polytechnic | Best Senior Project | Member of the Computer Science Club"
            />
          </div>
        </div>

        {/* work section */}
        <div data-aos="zoom-in" data-aos-delay="200">
          <Header title="My Work Experience" as="h2" />
          <div className="space-y-6">
            <ResumeCard
              icon={RiNextjsFill}
              role="Frontend Developer"
              date="July 2024 - Present"
              description="Crafting responsive and user-friendly websites using Next.js and other modern web technologies. Focus on performance, accessibility, and scalability."
            />
            <ResumeCard
              icon={LuServer}
              role="Backend Developer"
              description="Building scalable and secure backend systems using Node.js and other modern web technologies. Focus on performance, accessibility, and scalability."
            />
            <ResumeCard
              icon={LuPackage}
              role="Fullstack Developer"
              description="Crafting responsive and user-friendly websites using Next.js and other modern web technologies. Focus on performance, accessibility, and scalability."
            />
          </div>
        </div>
      </div>
    </section>
  );
}
