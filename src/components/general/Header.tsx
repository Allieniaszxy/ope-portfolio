interface HeaderProps {
  title: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export default function Header({ title, as: Tag = "h1" }: HeaderProps) {
  const sizeClasses = {
    h1: "text-3xl md:text-4xl",
    h2: "text-2xl md:text-3xl",
    h3: "text-xl md:text-2xl",
    h4: "text-lg md:text-xl",
    h5: "text-base md:text-lg",
    h6: "text-sm md:text-base",
  };
  return (
    <div className="py-14 md:py-20 flex justify-center">
      <Tag
        className={`font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-gray-300 ${sizeClasses[Tag]}`}
      >
        {title}
      </Tag>
    </div>
  );
}
