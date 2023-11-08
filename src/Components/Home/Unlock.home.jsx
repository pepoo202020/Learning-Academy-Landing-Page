import unlockImage from "../../Assets/rafiki.png";

const Unlock = () => {
  return (
    <div
      className="
        lg:px-[144px]
        md:px-[120px]
        px-10
        py-10
        flex
        items-center
        justify-center
        lg:flex-row
        flex-col
        lg:gap-0
        gap-5
        
    "
    >
      <div className="lg:w-1/2">
        <img src={unlockImage} alt="" />
      </div>
      <div
        className="
           lg:w-1/2
           flex
           flex-col
           lg:justify-start
           justify-center
           
        "
      >
        <h1
          className="
                text-[#4D4D4D]
                font-semibold
                lg:text-[36px]
                text-[28px]
                lg:text-start
                text-center
                leading-10
                mb-[16px]
            "
        >
          The unseen of spending three years at Pixelgrade
        </h1>
        <p
          className="
                text-[#717171]
                text-[14px]
                lg:text-start
                text-center
                leading-5
                mb-[32px]
            "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          justo ipsum. Sed accumsan quam vitae est varius fringilla.
          Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
          tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
          Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec
          elementum pulvinar odio.
        </p>
        <button
          className="
                bg-[#4CAF4F]
                py-[14px]
                px-[32px]
                text-white
                font-medium
                text-[16px]
                leading-6
                rounded
                hover:bg-transparent
                hover:text-[#4CAF4F]
                hover:border
                hover:border-[#4CAF4F]
                transition-all
            "
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Unlock;
