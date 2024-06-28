import Link from "next/link";

const Level1 = () => {
  return (
    <div className="w-full bg-shades-white h-[852px] overflow-hidden flex flex-col items-center justify-start py-[43px] px-0 box-border gap-[94px] text-left text-base text-default-systemblue-light font-subhead-sm-sh-sm-medium">
      <div className="self-stretch h-[42px] flex flex-row items-center justify-center">
        <div className="flex-1 flex flex-row items-center justify-start p-2 gap-[5px]">
          <img
            className="w-6 relative h-6 hidden"
            alt=""
            src="/angleleft.svg"
          />
        </div>

        <div className="cursor-pointer py-2 pr-4 pl-2 bg-transparent  flex-1 flex flex-row items-center justify-end">
          <button className="cursor-pointer p-0 bg-transparent text-base leading-[23px] font-subhead-sm-sh-sm-medium text-text-color-contentsecondary text-right inline-block hover:text-darkgray">
            Skip
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center lg:flex-col lg:items-center lg:justify-center">
        <div className="flex flex-col items-center justify-center">
          <img
            className="h-52 transition-transform duration-300 transform hover:scale-105"
            alt=""
            src="/anywhere-you-are.svg"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center text-center text-5xl text-text-color-contentsecondary">
        <div className="w-[280px] relative h-[99px]">
          <div className="absolute top-[0px] left-[30px] leading-[30px] font-medium">
            Anywhere you are
          </div>
          <div className="absolute top-[42px] left-[0px] text-sm leading-[19px] font-medium text-neutral-gray400 w-[280px]">
            <p className="m-0">
              Sell houses easily with the help of Listenoryx and to make this
              line big I am writing more.
            </p>
          </div>
        </div>
      </div>
      <Link href="/level2" passHref>
        <button
          className="cursor-pointer p-0 bg-transparent h-[86px] flex flex-col items-center justify-start relative hover:flex lg:items-center lg:justify-center transition-transform duration-300 transform hover:scale-110"
          id="RoundButton"
        >
          <div className="w-[86px]  rounded-full bg-primary-100 h-[86px] z-0" />
          <div className="absolute top-[8px] left-[8px] flex flex-row items-center justify-center gap-[10px] z-1">
            <div className="w-[70px]  rounded-full bg-base-color-primary-color h-[70px] z-0 hover:bg-mediumseagreen-100" />
            <img
              className="w-6 absolute top-[23px] left-[23px] h-6 object-contain z-1"
              alt=""
              src="/arrow-left@2x.png"
            />
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Level1;
