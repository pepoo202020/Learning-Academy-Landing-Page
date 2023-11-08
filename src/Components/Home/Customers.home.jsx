import { ArrowRight } from "@mui/icons-material";
import customerImage01 from "../../Assets/customer01.png";
import customerImage02 from "../../Assets/customer02.png";
import customerImage03 from "../../Assets/customer03.png";
import customerImage04 from "../../Assets/customer04.png";
import customerImage05 from "../../Assets/customer05.png";
import customerImage06 from "../../Assets/customer06.png";
import customerImage00 from "../../Assets/image_9.png";

const customerImages = [
  customerImage01,
  customerImage02,
  customerImage03,
  customerImage04,
  customerImage05,
  customerImage06,
];

const Customers = () => {
  return (
    <div
      className="
        lg:px-[144px]
        md:px-[120px]
        px-10
        py-10
        bg-[#F5F7FA]
        flex
        items-center
        justify-center
        lg:gap-[78px]
        gap-10
        lg:flex-row
        flex-col
      "
    >
      <div
        className="
            lg:w-[326px]
            lg:h-[326px]
        "
      >
        <img src={customerImage00} alt="" />
      </div>

      <div
        className="
            lg:w-[784px]
        "
      >
        <p
          className="
                text-[16px]
                text-[#717171]
                font-medium
                leading-6
                mb-[16px]
                lg:text-start
                text-center
            "
        >
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis
          sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus.
          Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut
          molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula
          molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue
          ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu
          turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim
          sapien, vitae placerat ante feugiat eget. Quisque vulputate odio
          neque, eget efficitur libero condimentum id. Curabitur id nibh id sem
          dignissim finibus ac sit amet magna.
        </p>
        <h1
          className="
                text-[#4CAF4F]
                text-[20px]
                font-semibold
                leading-7
                mb-[8px]
                lg:text-start
                text-center
            "
        >
          Tim Smith
        </h1>
        <p
          className="
                text-[#89939E]
                text-[16px]
                font-normal
                leading-6
                mb-[32px]
                lg:text-start
                text-center
            "
        >
          British Dragon Boat Racing Association
        </p>
        <div
          className="
                flex
                items-center
                lg:justify-start
                justify-center
                lg:gap-[32px]
                gap-5
                flex-wrap
            "
        >
          <div
            className="
                flex
                items-center
                lg:justify-start
                justify-center
                lg:gap-[41px]
                flex-wrap
                gap-10
            "
          >
            {customerImages.map((customerImage, index) => (
              <img
                className="
                cursor-pointer
                hover:scale-110
                transition-all
              "
                src={customerImage}
                alt=""
                key={index}
              />
            ))}
          </div>
          <div>
            <h1
              className="
                    text-[#4CAF4F]
                    text-[20px]
                    font-semibold
                    leading-7 
                    cursor-pointer
                    transition-all
                "
            >
              Meet all customers
              <ArrowRight
                className="
                hover:animate-ping
            "
              />
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
