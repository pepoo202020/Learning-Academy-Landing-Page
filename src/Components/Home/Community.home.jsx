import system01 from "../../Assets/system01.png";
import system02 from "../../Assets/system02.png";
import system03 from "../../Assets/system03.png";

const systems = [
  {
    image: system01,
    title: "Membership Organisations",
    paragraph:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    image: system02,
    title: "National Associations",
    paragraph:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    image: system03,
    title: "Clubs And Groups",
    paragraph:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

const Community = () => {
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
    "
    >
      <h1
        className="
            text-[#4D4D4D]
            font-semibold
            lg:text-[36px]
            text-[20px]
            lg:leading-[44px]
            mb-[8px]
            text-center
        "
      >
        Manage your entire community <br /> in a single system
      </h1>
      <p
        className="
            text-[#717171]
            text-[16px]
            font-normal
            leading-[24px]
            mb-[16px]
        "
      >
        Who is Nextcent suitable for?
      </p>
      <div
        className="
            flex
            items-center
            justify-between
            w-full
            lg:flex-nowrap
            flex-wrap
        "
      >
        {systems.map((system, index) => (
          <div
            key={index}
            className="
                 flex
                 flex-col
                 items-center
                 justify-start
                 mt-[24px]
                 flex-wrap
                 lg:mb-0
                 mb-5
            "
          >
            <img
              src={system.image}
              alt={system.title}
              className="
                 mb-[16px]
              "
            />
            <h1
              className="
                 text-[#4D4D4D]
                 font-bold
                 lg:text-[24px]
                 text-[20]
                 leading-[36px]
                 mb-[8px]
              "
            >
              {system.title}
            </h1>
            <p
              className="
                 text-[#717171]
                 font-normal
                 text-[14px]
                 leading-[20px]
                 text-center
              "
            >
              {system.paragraph}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
