import PropTypes from "prop-types";

const Menu = ({ className = "" }) => {
  return (
    <section
      className={`absolute bottom-[0px] left-[calc(50%_-_193.5px)] w-[393px] h-[140px] text-left text-xs text-base-color-primary-color font-body-sm-body-sm-medium ${className}`}
      id="Menu"
    >
      <img
        className="absolute bottom-[0px] left-[calc(50%_-_196.5px)] w-[393px] h-[140px] object-cover"
        alt=""
        src="/image-3@2x.png"
      />
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute bottom-[70px] left-[calc(50%_-_18.5px)] w-10 h-10"
        id="wallet"
      >
        <img className="relative w-7 h-6 hidden" alt="" src="/subtract.svg" />
        <img
          className="absolute h-3/5 w-[70%] top-[20%] right-[15%] bottom-[20%] left-[15%] max-w-full overflow-hidden max-h-full"
          alt=""
          src="/subtract1.svg"
        />
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute bottom-[20px] left-[calc(50%_+_128.5px)] w-[38px] h-[42px]"
        id="Profile"
      >
        <img
          className="absolute bottom-[18px] left-[calc(50%_-_12px)] w-6 h-6"
          alt=""
          src="/user.svg"
        />
        <div className="absolute bottom-[0px] left-[calc(50%_-_19px)] text-xs leading-[18px] font-medium font-body-sm-body-sm-medium text-text-color-contentsecondary text-left">
          Profile
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute bottom-[17px] left-[calc(50%_-_101.5px)] w-[57px] h-[42px]"
        id="Favouriter"
      >
        <img
          className="absolute bottom-[18px] left-[calc(50%_-_12.5px)] w-6 h-6 object-cover"
          alt=""
          src="/heart@2x.png"
        />
        <div className="absolute bottom-[0px] left-[calc(50%_-_28.5px)] text-xs leading-[18px] font-medium font-body-sm-body-sm-medium text-text-color-contentsecondary text-left">
          Favourite
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute bottom-[17px] left-[calc(50%_-_169.5px)] w-9 h-[42px]"
        id="Home"
      >
        <img
          className="absolute bottom-[18px] left-[calc(50%_-_12px)] w-6 h-6 object-cover"
          alt=""
          src="/house@2x.png"
        />
        <div className="absolute bottom-[0px] left-[calc(50%_-_18px)] text-xs leading-[18px] font-medium font-body-sm-body-sm-medium text-text-color-contentsecondary text-left">
          Home
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-0 bg-[transparent] absolute bottom-[20px] left-[calc(50%_+_62.5px)] w-[30px] h-[42px]"
        id="Offer"
      >
        <img
          className="absolute bottom-[18px] left-[calc(50%_-_12px)] w-6 h-6 object-contain"
          alt=""
          src="/discount@2x.png"
        />
        <div className="absolute bottom-[0px] left-[calc(50%_-_15px)] text-xs leading-[18px] font-medium font-body-sm-body-sm-medium text-text-color-contentsecondary text-left">
          Offer
        </div>
      </button>
      <div className="absolute bottom-[20px] left-[calc(50%_-_19.5px)] leading-[18px] font-medium">
        Wallet
      </div>
    </section>
  );
};

Menu.propTypes = {
  className: PropTypes.string,
};

export default Menu;
