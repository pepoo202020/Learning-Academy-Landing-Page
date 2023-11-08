import { ArrowRight } from "@mui/icons-material";

const Demo = () => {
  return (
    <div
      className="
        py-8
        bg-slate-50
        flex
        flex-col
        justify-start
        items-center
        gap-8
    "
    >
      <h1
        className="
            
            text-center
            text-gray-800
            lg:text-6xl
            text-3xl
            font-semibold
        "
      >
        Pellentesque suscipit <br /> fringilla libero eu.
      </h1>
      <button
        className="
            px-8
            py-3.5
            bg-green-500
            rounded
            inline-flex
            items-center
            justify-center
            gap-2
            text-center
            text-white
            text-base
            font-medium
            leading-normal
            hover:bg-transparent
            hover:text-green-500
            transition-all
            hover:border
            hover:border-green-500
        "
      >
        Get a Demo{" "}
        <span>
          {" "}
          <ArrowRight />{" "}
        </span>
      </button>
    </div>
  );
};

export default Demo;
