import HeroSection from "@/components/home/hero/HeroSection";
import ServiceSection from "@/components/services/ServiceSection";
import ResumeSection from "@/components/resume/ResumeSection";
import ProjectSection from "@/components/projects/ProjectSection";
import SkillSection from "@/components/skills/SkillSection";
import TestimonialsSection from "@/components/testimonials/TestimonialsSection";
import ContactSection from "@/components/contact/ContactSection";
import AnimationLayout from "../../layouts/AnimationLayout";
import { Toaster } from "react-hot-toast";
export default function Home() {
  return (
    <AnimationLayout>
      <HeroSection />
      <ServiceSection />
      <ResumeSection />
      <ProjectSection />
      <SkillSection />
      <TestimonialsSection />
      <ContactSection />
      <Toaster />
    </AnimationLayout>
  );
}
