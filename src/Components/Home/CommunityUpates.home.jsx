import { ArrowRight } from "@mui/icons-material";
import communityUpdateImage01 from "../../Assets/communityUpdate01.png";
import communityUpdateImage02 from "../../Assets/communityUpdate02.png";
import communityUpdateImage03 from "../../Assets/communityUpdate03.png";

const communityUpdates = [
  {
    image: communityUpdateImage01,
    title: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    image: communityUpdateImage02,
    title:
      "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    image: communityUpdateImage03,
    title: "Revamping the Membership Model with Triathlon Australia",
  },
];

const CommunityUpdates = () => {
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
            text-center 
            text-neutral-600 
            lg:text-4xl
            text-2xl
            font-semibold 
            lg:leading-[44px]
            mb-[8px]
        "
      >
        Caring is the new marketing
      </h1>
      <p
        className="
            text-center
            lg:w-[628px]
            text-neutral-500
            text-base
            font-normal
            leading-normal
            mb-[16px]
        "
      >
        The Nexcent blog is the best place to read about the latest membership
        insights, trends and more. See who's joining the community, read about
        how our community are increasing their membership income and lot's
        more.​
      </p>
      <div
        className="
            inline-flex
            items-center
            lg:justify-between
            justify-center
            gap-5
            flex-wrap
        "
      >
        {communityUpdates.map((communityUpdate, index) => (
          <div
            key={index}
            className="
                inline-flex
                flex-col
                lg:justify-start
                justify-center
                items-center
                relative
                h-[366px]
            "
          >
            <img src={communityUpdate.image} alt="" />
            <div
              className="
                    p-4
                    bg-slate-50
                    rounded-lg
                    shadow
                    flex-col
                    flex
                    justify-start
                    items-center
                    gap-4
                    absolute
                    bottom-[10px]
                "
            >
              <p
                className="
                    lg:w-[285px]
                    text-center
                    text-neutral-500
                    lg:text-xl
                    font-semibold
                    leading-7
                "
              >
                {communityUpdate.title}
              </p>
              <h1
                className="
                    self-stretch
                    p-2
                    justify-center
                    items-center
                    gap-2
                    inline-flex
                    text-green-500
                    lg:text-xl
                    font-semibold
                    leading-7
                "
              >
                Readmore{" "}
                <span>
                  <ArrowRight />
                </span>
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityUpdates;
