import { cn } from "../lib/utils";
import DP1 from "../assets/img/dp1.jpg";
import DP2 from "../assets/img/dp2.jpg";
import DP3 from "../assets/img/dp3.jpg";
import PrimaryButton from "./ui/primary-button";
import StarIcon from "../assets/icons/star.png";
import MaxWidthWrapper from "./max-width-wrapper";
import HeroImage from "../assets/img/heroimg.jpg";
import { FaArrowRight, FaPlay } from "react-icons/fa6";
import { services, testimonials } from "../lib/constants";
import MultiplyIcon from "../assets/icons/multiplyIcon.svg";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <MaxWidthWrapper className="h-full">
        <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 py-20 lg:pt-16 lg:pb-0 xl:py-0">
          <div className="col-span-1 xl:col-span-2 w-full h-full flex flex-col items-start justify-center px-5 lg:pt-5 xl:pt-0 xl:pl-0 xl:pr-20">
            <div className="w-full text-4xl md:text-7xl lg:text-5xl xl:text-7xl font-[750] text-black tracking-tight">
              The Art and Science&nbsp;
              <div className="inline-flex items-center justify-center -space-x-3">
                <img
                  src={DP1}
                  alt="dp-1"
                  className="size-7 md:size-12 rounded-full object-cover aspect-square border border-white"
                />
                <img
                  src={DP2}
                  alt="dp-2"
                  className="size-7 md:size-12 rounded-full object-cover aspect-square border border-white"
                />
                <img
                  src={DP3}
                  alt="dp-3"
                  className="size-7 md:size-12 rounded-full object-cover aspect-square border border-white"
                />
              </div>
              &nbsp; of Crafting Exceptional Designs
            </div>
            <span className="w-full text-left text-gray-700 mt-5 text-sm md:text-base">
              Transforming ideas into stellar designs requires a dynamic
              blend&nbsp;
              <br className="hidden xl:inline" />
              of creativity, technical expertise, and user-focused thinking.
            </span>
            <PrimaryButton text="Discover" className="my-5 md:my-10" />
            <div className="w-full xl:w-[75%] 2xl:w-1/2 flex flex-col items-center justify-center">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={cn(
                    "w-full flex items-center justify-center gap-5 py-5",
                    {
                      "border-y border-gray-300": service.id === 2,
                    }
                  )}
                >
                  <div className="h-full flex items-start justify-center">
                    <service.icon className="size-5" />
                  </div>
                  <div className="flex-1 flex flex-col items-center justify-center gap-2">
                    <span className="w-full text-left !leading-[16px] tracking-wider uppercase">
                      {service.name}
                    </span>
                    <span className="w-full text-left text-xs text-gray-500 font-medium">
                      {service.description}
                    </span>
                  </div>
                  <div className="h-full flex items-start justify-center">
                    <FaArrowRight />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative col-span-1 w-full h-[700px] md:h-[800px] lg:h-auto bg-background flex flex-col items-center justify-center px-16">
            <div className="absolute bottom-7 md:bottom-14 lg:bottom-7 xl:bottom-20 2xl:bottom-36 z-0 w-full md:w-[55%] lg:w-[82.5%] xl:w-full pr-4 pl-[135px] md:pl-[165px]">
              <div className="relative w-2/3 ml-auto grid grid-cols-5 border-l border-t border-black">
                {[...Array(25)].map((_, idx) => (
                  <div
                    key={idx}
                    className="size-8 border-r border-b border-black"
                  />
                ))}
                <img
                  src={StarIcon}
                  alt="star-icon"
                  className="size-10 absolute -left-5 bottom-2.5 md:bottom-5"
                />
              </div>
            </div>
            <div className="relative w-full md:w-72 h-[500px] flex items-center justify-center rounded-full shadow-[rgba(183,_121,_31,_0.2)_0px_60px_40px_-7px] z-[1]">
              <img
                src={MultiplyIcon}
                alt="multiply-icon"
                className="size-24 absolute top-0 right-0 left-auto md:right-auto md:left-0 aspect-[9/16] object-cover z-[1]"
              />
              <img
                src={HeroImage}
                alt="hero-image"
                className="absolute h-[500px] object-cover rounded-full z-0"
              />
              <button className="flex items-center justify-center p-1 rounded-full bg-accent2 z-[3]">
                <div className="size-8 p-2 bg-black rounded-full">
                  <FaPlay className="text-white size-full" />
                </div>
                <span className="flex-1 text-left font-medium text-black capitalize px-5">
                  Our Team
                </span>
              </button>
            </div>
            <div className="absolute w-1/2 xl:w-2/3 top-5 left-5 lg:left-auto lg:right-5 xl:top-auto xl:right-auto xl:bottom-32 xl:-left-44 z-[2] bg-accent1 p-7 rounded-2xl flex flex-col items-center justify-center gap-5 text-white/85">
              <span className="w-full uppercase text-sm font-medium tracking-wider">
                Testimonials
              </span>
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex flex-col items-center justify-center text-xs"
                >
                  <span className="w-full text-left">{testimonial.name}</span>
                  <div className="w-full flex items-center justify-center gap-2.5">
                    <div className="w-full h-2 rounded-full bg-gray-500">
                      <div
                        style={{
                          width: `${testimonial.percentage}%`,
                        }}
                        className={`mr-auto rounded-full h-2 ${testimonial.color}`}
                      />
                    </div>
                    <span>{testimonial.percentage}+</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
