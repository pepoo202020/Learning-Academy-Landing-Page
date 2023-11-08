import membersIcon from "../../Assets/membersIcon.png";
import clubsIcon from "../../Assets/clubsIcon.png";
import eventBookingsIcon from "../../Assets/eventBookingsIcon.png";
import paymentsIcon from "../../Assets/paymentsIcon.png";

import CountUp from "react-countup";
import ReactVisibilitySensor from "react-visibility-sensor";
import { useState } from "react";

const achievments = [
  {
    achievment_Image: membersIcon,
    achievment_number: 2245341,
    achievment_name: "Members",
  },
  {
    achievment_Image: clubsIcon,
    achievment_number: 46328,
    achievment_name: "Clubs",
  },
  {
    achievment_Image: eventBookingsIcon,
    achievment_number: 828867,
    achievment_name: "Event Bookings",
  },
  {
    achievment_Image: paymentsIcon,
    achievment_number: 1926436,
    achievment_name: "Payments",
  },
];

const Achievements = () => {
  const [memberNumber, setMemberNumber] = useState(0);
  const [clubNumber, setClubNumber] = useState(0);
  const [eventBookingNumber, setEventBookingNumber] = useState(0);
  const [paymnetsNumber, setPaymentsNumber] = useState(0);
  return (
    <div
      className="
        lg:px-[144px]
        md:px-[120px]
        px-10
        py-10
        bg-[#F5F7FA]
        "
    >
      <ReactVisibilitySensor
        onChanged={(isVisible) => {
          if (isVisible) {
            setMemberNumber(2245341);
            setClubNumber(46328);
            setEventBookingNumber(828867);
            setPaymentsNumber(1926436);
          }
        }}
      >
        <div
          className="
          flex
          items-center
          justify-center
          gap-[72px]
          lg:flex-row
          flex-col
       "
        >
          <div
            className="
              lg:w-1/2
          "
          >
            <h1
              className="
                  text-[#4D4D4D]
                  font-semibold
                  lg:text-start
                  text-center
                  lg:text-[36px]
                  text-[28px]
                  leading-10
              "
            >
              Helping a local <br />
              <span
                className="
                  text-[#4CAF4F]
                  
              "
              >
                {" "}
                business reinvent itself
              </span>
            </h1>
            <p
              className="
                  text-[#18191F]
                  text-[16px]
                  text-center
                  leading-6
              "
            >
              We reached here with our hard work and dedication
            </p>
          </div>
          <div
            className="
              flex
              flex-wrap
              gap-[30px]
              lg:w-1/2
              lg:justify-start
              justify-center
          "
          >
            {achievments.map((achievment, index) => (
              <div
                key={index}
                className="
                  flex
                  gap-[6px]
              "
              >
                <img
                  src={achievment.achievment_Image}
                  alt={achievment.achievment_name}
                />

                <div
                  className="
                      w-[191px]
                  "
                >
                  <CountUp
                    className="
                        text-[#4D4D4D]
                        font-blod
                        text-[28px]
                        leading-9
                    "
                    end={achievment.achievment_number}
                    duration={3}
                    separator=","
                  />
                  <p>{achievment.achievment_name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ReactVisibilitySensor>
    </div>
  );
};

export default Achievements;
