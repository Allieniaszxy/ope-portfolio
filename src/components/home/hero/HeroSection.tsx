"use client";

import Image from "next/image";
import AnimatedIntro from "./AnimatedIntro";
import LinkButton from "@/components/general/LinkButton";
import { LuArrowRight } from "react-icons/lu";
import Particles from "./Particles";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden flex items-center justify-center"
    >
      {/* PARTICLES BACKGROUND */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="relative w-36 h-36 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-600 blur-lg opacity-50 animate-pulse" />
          <div className="relative w-full h-full rounded-full overflow-hidden z-10">
            <Image
              src="/images/moses.jpg"
              alt="Hero"
              fill
              sizes="144px"
              className="object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="mt-6 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-300">
          Hi, I&apos;m a Web Designer
        </h1>

        <AnimatedIntro />

        <LinkButton
          href="#projects"
          label="See my work"
          icon={LuArrowRight}
          rounded
        />
      </div>
    </section>
  );
}
