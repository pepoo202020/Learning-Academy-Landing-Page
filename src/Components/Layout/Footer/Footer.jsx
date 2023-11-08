import {
  Facebook,
  GitHub,
  Instagram,
  Telegram,
  WhatsApp,
} from "@mui/icons-material";
import logo from "../../../Assets/LogoWhite.png";
import { Link } from "react-router-dom";
import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const contents = [
  {
    title: "Company",
    content: ["About us", "Blog", "Contact us", "Pricing", "Testimonials"],
  },
  {
    title: "Support",
    content: [
      "Help center",
      "Terms of Services",
      "Legal",
      "Privacy policy",
      "Status",
    ],
  },
];

const Footer = () => {
  const [email, setEmail] = useState("");
  const form = useRef();
  const handleEmail = () => {
    emailjs.sendForm(
      "service_65lac2u",
      "template_d72j3o6",
      form.current,
      "qpgwAT2dGFPdLMZ05"
    );
  };
  return (
    <div
      className="
        lg:px-[165px]
        px-10
        py-16
        bg-gray-800
        lg:justify-start
        lg:items-start
        justify-center
        items-center
        lg:gap-32
        gap-16
        flex
        lg:flex-row
        flex-col
      "
    >
      <div
        className="
          flex
          flex-col
          justify-start
          lg:items-start
          items-center
          gap-10
        "
      >
        <img src={logo} alt="" />
        <div
          className="
            flex
            flex-col
            justify-start
            
            lg:items-start
            items-center
            gap-2
          "
        >
          <h1
            className="
              text-slate-50
              text-sm
              font-normal
              text-center
              leading-tight
            "
          >
            Copyright © 2020 Abanob Shenoda.
          </h1>
          <p
            className="
              text-slate-50
              text-sm
              font-normal
              leading-tight
            "
          >
            All rights reserved
          </p>
        </div>
        <div
          className="
            justify-start
            items-start
            gap-4
            flex
          "
        >
          <Link
            className="
              w-8
              h-8
              text-white
            "
            to={"https://www.instagram.com/pamposhosh/"}
          >
            <Instagram />
          </Link>
          <Link
            className="
              w-8
              h-8
              text-white
            "
            to={"https://www.facebook.com/abanob.shosh/"}
          >
            <Facebook />
          </Link>
          <Link
            className="
              w-8
              h-8
              text-white
            "
            to={"https://github.com/pepoo202020"}
          >
            <GitHub />
          </Link>
          <Link
            className="
              w-8
              h-8
              text-white
            "
            to={"https://wa.me/+201126884803 "}
          >
            <WhatsApp />
          </Link>
        </div>
      </div>
      {contents.map((contentMap, index) => (
        <div
          key={index}
          className="
              flex-col
              justify-start
              lg:items-start
              items-center
              gap-6
              flex
            "
        >
          <h1
            className="
                text-white
                text-xl
                font-semibold
                leading-7
              "
          >
            {contentMap.title}
          </h1>
          <div
            className="
              flex
              flex-col
              justify-start
              lg:items-start
              items-center
              gap-3
            "
          >
            {contentMap.content.map((c, i) => (
              <p
                key={i}
                className="
                    text-slate-50
                    text-sm
                    font-normal
                    leading-tight
                  "
              >
                {c}
              </p>
            ))}
          </div>
        </div>
      ))}
      <div
        className="
            flex
            flex-col
            justify-start
            lg:items-start
            items-center
            gap-6
        "
      >
        <h1
          className="
                text-white
                text-xl
                font-semibold
                leading-7
              "
        >
          Stay up to date
        </h1>
        <form ref={form}>
          <TextField
            placeholder="message us"
            variant="outlined"
            fullWidth
            color="success"
            style={{ background: "white", opacity: 0.2, color: "gray" }}
            className="rounded-lg"
            value={email}
            name="message"
            onChange={(e) => setEmail(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Telegram
                    className="cursor-pointer"
                    onClick={handleEmail}
                    color="success"
                  />
                </InputAdornment>
              ),
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default Footer;
