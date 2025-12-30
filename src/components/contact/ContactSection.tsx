import Link from "next/link";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope, FaPhone } from "react-icons/fa6";
import { LuSend } from "react-icons/lu";

const contactInfo = [
  {
    title: "Email",
    value: "leshisofiat@gmail.com",
    link: "mailto:leshisofiat@gmail.com",
    icon: <FaEnvelope className="w-6 h-6" />,
  },
  {
    title: "Phone",
    value: "+234 81 6421 5870",
    link: "tel:+2348164215870",
    icon: <FaPhone className="w-6 h-6" />,
  },
  {
    title: "Location",
    value: "Lagos, Nigeria",
    icon: <FaMapMarkerAlt className="w-6 h-6" />,
    link: "https://www.google.com/maps/place/Lagos",
  },
];

export default function ContactSection() {
  const InputStyles =
    "px-4 py-3.5 my-4 bg-slate-800 outline-none rounded-md w-full text-gray-200 placeholder-gray-400";
  return (
    <section id="contact" className="py-16 lg:py-30">
      <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12">
        <div>
          <h2 className="font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-indigo-500 to-gray-300 py-3 text-3xl md:text-4xl">
            Ready to Collaborate?
          </h2>
          <p className="text-gray-400 mb-10 text-base lg:text-lg leading-relaxed">
            Let&apos;s work together to bring your vision to life.
          </p>
          <div className="space-y-5 mb-12">
            {contactInfo.map((info, index) => (
              <Link
                href={info.link}
                key={index}
                className="group flex items-center fap-4 px-2 py-3 transition-colors hover:bg-white/5 rounded-lg"
              >
                <div className="h-15 w-15 rounded-full bg-white/5 text-white transition-transform group-hover:scale-105 grid place-items-center">
                  {info.icon}
                </div>
                <div>
                  <h4 className="text-md font-medium text-white">
                    {info.title}
                  </h4>
                  <p className="text-md text-gray-400">{info.value}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* form */}
        <div>
          <form action="" className="rounded-lg bg-lsate-900 px-4 py-8">
            <input
              type="text"
              placeholder="Your Name"
              className={InputStyles}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className={InputStyles}
              required
            />
            <input
              type="text"
              placeholder="Subject of message"
              className={InputStyles}
              required
            />
            <textarea
              placeholder="Your Message"
              className={`${InputStyles} resize-none `}
              rows={5}
              required
            ></textarea>
            <button className="w-full py-4 bg-linear-to-r from-blue-900 to-purple-800 hover:text-white font-semibold rounded-lg transition-all hover:from-blue-800 hover:to-purple-700 text-white flex items-center justify-center gap-2 cursor-pointer diabled:cursor-not-allowed disabled:opacity-70">
              <LuSend size={20} />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
