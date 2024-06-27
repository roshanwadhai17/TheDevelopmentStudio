import { useState } from "react";
import { useRouter } from "next/router";

const Level2 = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    CountryCode: "",
    PhoneNumber: "",
    Gender: ""
  });

  const onBackButtonClick = () => {
    router.push("/level1");
  };

  const onButtonClick = () => {
    router.push("/level3");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div className="w-full relative bg-shades-white h-[1005px] overflow-hidden text-left text-base text-text-color-contentsecondary font-subhead-sm-sh-sm-medium">
      <div className="absolute top-[calc(50%_-_378.5px)] left-[calc(50%_-_180.5px)] flex flex-col items-center justify-center text-5xl">
        <div className=" leading-[30px] font-medium">
          <p className="m-0">Sign up with your email or </p>
          <p className="m-0">phone number</p>
        </div>
      </div>
      <input
        className="m-0 absolute top-[calc(50%_+_37.5px)] left-[calc(50%_-_181.5px)] w-6 h-6"
        type="checkbox"
      />
      <a className="[text-decoration:none] absolute top-[calc(50%_+_31.5px)] left-[calc(50%_-_147.5px)] text-xs leading-[18px] font-medium inline-block w-[328px] text-text-and-icon-contentdisbaled">
        <p className="m-0">
          <span>By signing up. you agree to the </span>
          <span className="text-base-color-primary-color">
            Terms of service
          </span>
          <span className="text-text-and-icon-contentdisbaled"> and</span>
        </p>
        <p className="m-0 text-base-color-primary-color">Privacy policy.</p>
      </a>
      <div className="absolute top-[calc(50%_+_181.5px)] left-[calc(50%_-_171.5px)] w-[343px] h-6 text-center text-text-and-icon-contentdisbaled">
        <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_8.5px)] leading-[24px] font-medium">
          or
        </div>
        <div className="absolute top-[calc(50%_-_0.5px)] left-[calc(50%_-_172px)] bg-text-and-icon-contentdisbaled box-border w-[157px] h-px border-t-[1px] border-solid border-text-and-icon-contentdisbaled" />
        <div className="absolute top-[calc(50%_-_0.5px)] left-[calc(50%_+_15px)] bg-text-and-icon-contentdisbaled box-border w-[157px] h-px border-t-[1px] border-solid border-text-and-icon-contentdisbaled" />
      </div>
      <button className="cursor-pointer py-3 px-[88.5px] bg-[transparent] absolute top-[calc(50%_+_225.5px)] left-[calc(50%_-_180.5px)] rounded-lg flex flex-row items-center justify-center gap-[8px] border-[1.5px] border-solid border-border-divider-border">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/gmail.svg"
        />
        <div className="relative text-base leading-[24px] font-medium font-subhead-sm-sh-sm-medium text-text-color-contenttertiary text-center hover:cursor-auto">
          Sign up with Gmail
        </div>
      </button>
      <button
        className="cursor-pointer py-3 px-[73px] bg-[transparent] absolute top-[calc(50%_+_293.5px)] left-[calc(50%_-_180.5px)] rounded-lg flex flex-row items-center justify-center gap-[8px] border-[1.5px] border-solid border-border-divider-border"
        id="Button"
      >
        <img className="w-6 relative h-6" alt="" src="/facebook.svg" />
        <div className="relative text-base leading-[24px] font-medium font-subhead-sm-sh-sm-medium text-text-color-contenttertiary text-center">
          Sign up with Facebook
        </div>
      </button>
      <button className="cursor-pointer py-3 px-[89px] bg-[transparent] absolute top-[calc(50%_+_361.5px)] left-[calc(50%_-_180.5px)] rounded-lg flex flex-row items-center justify-center gap-[8px] border-[1.5px] border-solid border-border-divider-border">
        <img
          className="w-6 relative h-6 overflow-hidden shrink-0"
          alt=""
          src="/apple.svg"
        />
        <div className="relative text-base leading-[24px] font-medium font-subhead-sm-sh-sm-medium text-text-color-contenttertiary text-center">
          Sign up with Apple
        </div>
      </button>

      <div className="absolute top-[calc(50%_+_419.5px)] left-[calc(50%_-_135.5px)] leading-[24px] font-medium text-center text-text-color-contenttertiary">
        <span>Already have an account? </span>
        <span className="text-primary-700">Sign in</span>
      </div>

      <div className="flex items-center justify-start absolute top-[calc(50%_-_126.5px)] left-[calc(50%_-_182.5px)]">
        <input
          className="[outline:none] font-medium font-subhead-sm-sh-sm-medium text-base bg-[transparent] rounded-lg box-border w-[70px] overflow-hidden flex flex-row items-center justify-start py-[18px] px-5 text-dimgray border-[1px] border-solid border-text-and-icon-contentdisbaled"
          name="CountryCode"
          id="CountryCode"
          placeholder="+91"
          type="text"
          value={formData.CountryCode}
          onChange={handleChange}
        />
        <input
          className="[outline:none] font-medium font-subhead-sm-sh-sm-medium text-base bg-[transparent] rounded-lg box-border w-[285px] overflow-hidden flex flex-row items-center justify-start py-[18px] px-5 text-dimgray border-[1px] border-solid border-text-and-icon-contentdisbaled ml-[13px]"
          name="PhoneNumber"
          id="PhoneNumber"
          placeholder="Phone Number"
          type="text"
          value={formData.PhoneNumber}
          onChange={handleChange}
        />
      </div>

      <input
        className="[outline:none] font-medium font-subhead-sm-sh-sm-medium text-base bg-[transparent] absolute top-[calc(50%_-_292.5px)] left-[calc(50%_-_182.5px)] rounded-lg box-border w-[362px] overflow-hidden flex flex-row items-center justify-start py-[18px] px-5 text-dimgray border-[1px] border-solid border-text-and-icon-contentdisbaled"
        name="Name"
        id="Name"
        placeholder="Name"
        type="text"
        value={formData.Name}
        onChange={handleChange}
      />
      <input
        className="[outline:none] font-medium font-subhead-sm-sh-sm-medium text-base bg-[transparent] absolute top-[calc(50%_-_209.5px)] left-[calc(50%_-_182.5px)] rounded-lg box-border w-[362px] overflow-hidden flex flex-row items-center justify-start py-[18px] px-5 text-dimgray border-[1px] border-solid border-text-and-icon-contentdisbaled"
        name="Email"
        id="Email"
        placeholder="Email"
        type="text"
        value={formData.Email}
        onChange={handleChange}
      />
      <select
        className="absolute top-[calc(50%_-_42.5px)] left-[calc(50%_-_182.5px)] rounded-lg bg-[transparent] box-border w-[362px] overflow-hidden flex flex-row items-center justify-start py-[18px] px-5 gap-[10px] font-subhead-sm-sh-sm-medium font-medium text-base text-dimgray border-[1px] border-solid border-text-and-icon-contentdisbaled"
        id="Gender"
        name="Gender"
        value={formData.Gender}
        onChange={handleChange}
      >
        <option value="" disabled hidden>Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
      
      <div className="absolute top-[42px] left-[calc(50%_-_197.5px)] w-[393px] h-[42px] flex flex-row items-center justify-center text-right">
        <div className="self-stretch flex-1 flex flex-row items-center justify-start p-2">
          <button
            className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-center justify-start gap-[5px]"
            id="BackButton"
            onClick={onBackButtonClick}
          >
            <div className="w-6 relative h-6">
              <img
                className="absolute h-[64.58%] w-[35.42%] top-[17.5%] right-[34.17%] bottom-[17.92%] left-[30.42%] max-w-full overflow-hidden max-h-full hover:bg-darkgray"
                alt=""
                src="/angleleft1.svg"
              />
            </div>
            <div className="relative text-base leading-[23px] font-subhead-sm-sh-sm-medium text-text-color-contentsecondary text-left hover:text-darkgray">
              Back
            </div>
          </button>
        </div>
        <div className="self-stretch flex-1 flex flex-row items-center justify-end py-2 pr-4 pl-2">
          <div className="w-[33px] relative leading-[23px] hidden">Skip</div>
        </div>
      </div>

      <button
        className="cursor-pointer [border:none] p-2.5 bg-[transparent] absolute top-[calc(50%_+_103.5px)] left-[calc(50%_-_179.5px)] flex flex-col items-center justify-center"
        onClick={onButtonClick}
      >
        <div className="w-[335px] rounded-lg bg-primary-700 h-[54px] flex flex-row items-center justify-center py-[15.5px] px-[67px] box-border hover:bg-mediumseagreen-200">
          <div className=" text-base leading-[23px] font-medium font-subhead-sm-sh-sm-medium text-shades-white text-center">
            Sign Up
          </div>
        </div>
      </button>
    </div>
  );
};

export default Level2;
