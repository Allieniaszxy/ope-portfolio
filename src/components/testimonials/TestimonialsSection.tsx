import { FaStar } from "react-icons/fa6";
import Header from "../general/Header";
import Image from "next/image";

const testimonials = [
  {
    name: "Jane Doe",
    position: "CEO, Company",
    rating: 5,
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus nec ante hendrerit placerat. Nullam nec metus nec ante hendrerit placerat.",
    image: "/images/hero.jpg",
  },
  {
    name: "Jane Doe",
    position: "CEO, Company",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus nec ante hendrerit placerat. Nullam nec metus nec ante hendrerit placerat.",
    image: "/images/hero1.jpg",
    rating: 4,
  },
  {
    name: "Jane Doe",
    position: "CEO, Company",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus nec ante hendrerit placerat. Nullam nec metus nec ante hendrerit placerat.",
    image: "/images/hero2.jpg",
    rating: 3,
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="">
      <div>
        {" "}
        <Header title="Testimonials" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] sm:w-[80%] mx-auto mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              data-aos="fade-right"
              data-aos-delay={index * 100}
              key={index}
              className="bg-gray-800 p-6 rounded-xl border-gray-700 border shadow-lg "
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className={`w-4 h-4 ${
                      index < testimonial.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-400 fill-gray-400"
                    }`}
                  />
                ))}
              </div>
              <p className="italic mb-6 text-gray-400">
                &ldquo; {testimonial.testimonial} &rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt="testimonial-image"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div className="py-4">
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">
                    {testimonial.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
