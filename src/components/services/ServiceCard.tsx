import { IconType } from "react-icons";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: IconType;
}

export default function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div>
      <Icon color="gray" size={40} />
      <h3 className="text-xl font-bold my-4 md:text-2xl text-gray-200">
        {title}
      </h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
}
