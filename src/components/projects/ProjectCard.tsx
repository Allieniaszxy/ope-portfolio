import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  imagePath: string;
  link: string;
}

export default function ProjectCard({
  title,
  description,
  imagePath,
  link,
}: ProjectCardProps) {
  return (
    <div>
      <Image
        src={imagePath}
        alt={"project-image"}
        width={800}
        height={600}
        className="rounded-lg"
      />
      <p className="my-4 text-xl sm:text-2xl font-semibold text-gray-200">
        {title}
      </p>
      <p className="text-gray-400 font-medium">{description}</p>
    </div>
  );
}
