import Header from "@/components/general/Header";
import ServiceCard from "./ServiceCard";
import { FiPenTool } from "react-icons/fi";
import { FaCode, FaMobileScreenButton } from "react-icons/fa6";
import { MdBrush } from "react-icons/md";

export default function ServiceSection() {
  return (
    <section id="services" className="">
      <Header title="What I Offer" />
      <div className="w-[90%] mx-auto sm:w-[80%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-20">
        <div data-aos="fade-right">
          {" "}
          <ServiceCard
            title="UI and UX Design"
            description="Designing intuitive and user-friendly interfaces"
            icon={FiPenTool}
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="100">
          <ServiceCard
            title="Web Development"
            description="Building responsive and efficient websites"
            icon={FaCode}
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="200">
          <ServiceCard
            title="Mobile App Development"
            description="Creating engaging and interactive mobile applications"
            icon={FaMobileScreenButton}
          />
        </div>
        <div data-aos="fade-right" data-aos-delay="300">
          <ServiceCard
            title="UI and UX Design"
            description="Designing intuitive and user-friendly interfaces"
            icon={MdBrush}
          />
        </div>
      </div>
    </section>
  );
}
