import HeroSection from "@/components/home/hero/HeroSection";
import ServiceSection from "@/components/home/services/ServiceSection";
import ResumeSection from "@/components/resume/ResumeSection";
import ProjectSection from "@/components/projects/ProjectSection";
import SkillSection from "@/components/skills/SkillSection";
export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <ResumeSection />
      <ProjectSection />
      <SkillSection />
    </>
  );
}
