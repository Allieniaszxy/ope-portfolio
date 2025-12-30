import React from "react";
import Header from "../general/Header";
import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  return (
    <section id="projects" className="">
      <Header title="Recent Projects" />
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden">
        <ProjectCard
          title="Modern Dashboard UI"
          description="A responsive admin dashboard with data visualization charts, user management, and real-time notifications. Built with Next.js, Tailwind CSS, and Chart.js."
          imagePath="/images/modern-ui.jpg"
          link="https://project1.com"
        />
        <ProjectCard
          title="Modern Education Website"
          description="An interactive learning platform with course catalog, user authentication, and progress tracking. Built with Next.js, Tailwind CSS, and Supabase."
          imagePath="/images/education.jpg"
          link="https://project1.com"
        />
        <ProjectCard
          title="Modern Landing Page"
          description="A high-conversion marketing page with animated components, optimized performance, and SEO best practices. Built with Next.js, Tailwind CSS, and Framer Motion."
          imagePath="/images/education.jpg"
          link="https://project1.com"
        />
        <ProjectCard
          title="Modern SaaS Application"
          description="Full-featured software-as-a-service (SaaS) application with user authentication, subscription management, and analytics. Built with Next.js, Tailwind CSS, and Supabase."
          imagePath="/images/saas.jpg"
          link="https://project1.com"
        />
      </div>
    </section>
  );
}
