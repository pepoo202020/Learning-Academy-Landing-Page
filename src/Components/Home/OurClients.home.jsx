import clientLogo01 from "../../Assets/client01.png";
import clientLogo02 from "../../Assets/client02.png";
import clientLogo03 from "../../Assets/client03.png";
import clientLogo04 from "../../Assets/client04.png";
import clientLogo05 from "../../Assets/client05.png";
import clientLogo06 from "../../Assets/client06.png";
import clientLogo07 from "../../Assets/client07.png";

const clients = [
  clientLogo01,
  clientLogo02,
  clientLogo03,
  clientLogo04,
  clientLogo05,
  clientLogo06,
  clientLogo07,
];

const OurClients = () => {
  return (
    <div
      className="
      lg:px-[144px]
      md:px-[120px]
      px-10
      py-10
      flex
      flex-col
      items-center
      justify-center
      flex-wrap
    "
    >
      <h1
        className="
          text-[#4D4D4D]
          font-semibold
          lg:text-[36px]
          text-[28px]
          leading-[44px]
          mb-[8px]
        "
      >
        Our Clients
      </h1>
      <p
        className="
          text-[#717171]
          font-normal
          text-[16px]
          text-center
          leading-[24px]
          mb-[16px]
        "
      >
        We have been working with some Fortune 500+ clients
      </p>
      <div
        className="
          flex
          items-center
          lg:justify-between
          justify-center
          lg:gap-0
          gap-5
          w-full
          cursor-pointer
          flex-wrap
        "
      >
        {clients.map((logo, index) => (
          <img
            src={logo}
            alt=""
            className="
            hover:scale-110
            transition-all
          "
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default OurClients;
