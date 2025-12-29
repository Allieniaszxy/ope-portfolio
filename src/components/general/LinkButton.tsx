import Link from "next/link";
import { IconType } from "react-icons";

interface LinkButtonProps {
  href: string;
  label: string;
  icon?: IconType;
  iconPosition?: "left" | "right";
  rounded?: boolean;
  download?: boolean;
}

export default function LinkButton({
  href,
  label,
  icon: Icon,
  iconPosition,
  rounded,
  download,
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`px-8 py-3 bg-linear-to-r from-blue-900 to-purple-800 hover:from-blue-800 hover:to-purple-700 text-white font-medium transition-all hover:scale-[1.02] active:scale-[0.98] duration-300 inline-flex items-center justify-center gap-2 ${
        rounded ? "rounded-full" : "rounded-lg"
      }`}
      download={download}
    >
      {Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
      {label}
      {Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
    </Link>
  );
}
