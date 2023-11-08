import sliderImg01 from "../../Assets/heroImg01.png";
import sliderImg02 from "../../Assets/heroImg02.png";
import sliderImg03 from "../../Assets/heroImg03.png";

import { SwiperSlide, Swiper } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
const sliderContents = [
  {
    title: "Lessons and insights",
    coloredTitle: "from 8 years",
    paragraph:
      "Where to grow your business as a photographer: site or social media?",
    image: sliderImg01,
  },
  {
    title: "Unlock Your Potential",
    coloredTitle: "",
    paragraph:
      "Discover boundless opportunities to learn, grow, and succeed with our diverse courses and expert instructors.",
    image: sliderImg02,
  },
  {
    title: "Knowledge, Your Superpower",
    coloredTitle: "",
    paragraph:
      "Elevate your skills, expand your horizons, and turn knowledge into your greatest asset.",
    image: sliderImg03,
  },
];

const HeroSection = () => {
  return (
    <div
      className="
        bg-[#F5F7FA]
        w-full
        lg:px-[144px]
        md:px-[120px]
        px-10
    "
    >
      <Swiper
        slidesPerView={1}
        modules={[Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
      >
        {sliderContents.map((sliderItem, index) => (
          <SwiperSlide key={index}>
            <div
              className="
                flex
                items-center
                justify-between
                my-5
                w-full
              "
            >
              <div
                className="
                  flex
                  flex-col
                  justify-center
                  items-start
                  lg:max-w-[657px]
                "
              >
                <h1
                  className="
                    text-[#4D4D4D]
                    font-semibold
                    lg:text-[64px]
                    text-[32px]
                    lg:leading-[76px]
                    leading-8
                    mb-[16px]
                  "
                >
                  {sliderItem.title}
                  <span
                    className="
                      text-[#4CAF4F]
                    "
                  >
                    {` ${sliderItem.coloredTitle}`}
                  </span>
                </h1>
                <p
                  className="
                    text-[#717171]
                    font-normal
                    text-[16px]
                    leading-[24px]
                    mb-[32px]
                  "
                >
                  {sliderItem.paragraph}
                </p>
                <button
                  className="
                    px-[32px]
                    py-[14px]
                    text-white
                    bg-[#4CAF4F]
                    lg:mb-0
                    mb-5
                  "
                >
                  Register
                </button>
              </div>
              <img
                className="lg:block hidden"
                src={sliderItem.image}
                alt={sliderItem.title}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;
