const Actions = () => {
  return (
    <div
      className="
            lg:flex
            items-center
            gap-[14px]
            hidden
        "
    >
      <button
        className="
            transition-all
            px-[20px]
            py-[10px]
            text-[14px]
            text-[#4CAF4F]
            font-medium
            hover:text-[#49b94d]
        "
      >
        Login
      </button>
      <button
        className="
            transition-all
            px-[20px]
            py-[10px]
            text-[14px]
            text-white
            font-medium
            bg-[#4CAF4F]
            rounded
            hover:bg-[#49b94d]
        "
      >
        Signup
      </button>
    </div>
  );
};

export default Actions;
