import Image from "next/image";
import AnimatedIntro from "./AnimatedIntro";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen relative flex items-center justify-center overflow-hidden"
    >
      <div className="z-10 flex flex-col items-center">
        {/* Image + Glow wrapper */}
        <div className="relative w-36 h-36 flex items-center justify-center">
          {/* Glow (scoped to image only) */}
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-blue-500 to-purple-600 blur-lg opacity-50 animate-pulse" />

          {/* Image */}
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

        {/* Text (outside glow scope) */}
        <h1 className="mt-6 text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-blue-500 to-purple-300">
          Hi, I'm a Web Designer
        </h1>
        <AnimatedIntro />
      </div>
    </section>
  );
}
