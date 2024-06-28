import { useState } from "react";
import { useRouter } from "next/router";

const Level2 = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Street: "",
    City: "",
    District: "",
    CountryCode: "",
    PhoneNumber: ""
  });

  const onBackButtonClick = () => {
    router.push("/");
  };

  const handleSave = () => {

    console.log("Saving data:", formData);
    router.push("/level3");
    alert("Saved successfully!");
  };

  const handleCancel = () => {
    console.log("Cancelled");
    setFormData({
      Name: "",
      Email: "",
      Street: "",
      City: "",
      District: "",
      CountryCode: "",
      PhoneNumber: ""
    });
  };

  return (
    <div className="w-full relative bg-shades-white h-[879px] overflow-hidden text-center text-lg text-text-color-contentsecondary font-subhead-sm-sh-sm-medium">
      <input
        className="outline-none font-medium font-subhead-sm-sh-sm-medium text-base bg-transparent absolute top-[calc(50%_-_164px)] left-[calc(50%_-_181.5px)] rounded-lg box-border w-[362px] overflow-hidden flex flex-row items-center justify-start py-[18px] px-5 text-dimgray border-[1px] border-solid border-text-and-icon-contentdisbaled"
        name="Name"
        id="Name"
        placeholder="Full Name"
        type="text"
        value={formData.Name}
        onChange={(e) => setFormData({ ...formData, Name: e.target.value })}
      />
      <input
        className="outline-none font-medium font-subhead-sm-sh-sm-medium text-base bg-transparent absolute top-[calc(50%_-_3.5px)] left-[calc(50%_-_181.5px)] rounded-lg box-border w-[363px] overflow-hidden flex flex-row items-center justify-start py-[18px] px-5 text-dimgray border-[1px] border-solid border-text-and-icon-contentdisbaled"
        name="Email"
        id="Email"
        placeholder="Email"
        type="text"
        value={formData.Email}
        onChange={(e) => setFormData({ ...formData, Email: e.target.value })}
      />
      <input
        className="outline-none font-medium font-subhead-sm-sh-sm-medium text-base bg-transparent absolute top-[calc(50%_+_76.5px)] left-[calc(50%_-_181.5px)] rounded-lg box-border w-[362px] overflow-hidden flex flex-row items-center justify-start py-[18px] px-5 text-dimgray border-[1px] border-solid border-text-and-icon-contentdisbaled"
        name="Street"
        id="Street"
        placeholder="Street"
        type="text"
        value={formData.Street}
        onChange={(e) => setFormData({ ...formData, Street: e.target.value })}
      />

      <select
        className="absolute top-[calc(50%_+_155.5px)] left-[calc(50%_-_181.5px)] rounded-lg bg-transparent box-border w-[362px] overflow-hidden flex flex-row items-center justify-start py-[18px] px-5 gap-[10px] font-subhead-sm-sh-sm-medium font-medium text-base text-dimgray border-[1px] border-solid border-text-and-icon-contentdisbaled"
        id="City"
        defaultValue={formData.City}
        onChange={(e) => setFormData({ ...formData, City: e.target.value })}
      >
        <option value="" disabled hidden>
          City
        </option>
        <option value="Pune">Pune</option>
        <option value="Delhi">Delhi</option>
        <option value="Chennai">Chennai</option>
        <option value="Mumbai">Mumbai</option>
      </select>

      <select
        className="absolute top-[calc(50%_+_240.5px)] left-[calc(50%_-_183.5px)] rounded-lg bg-transparent box-border w-[362px] overflow-hidden flex flex-row items-center justify-start py-[18px] px-5 gap-[10px] font-subhead-sm-sh-sm-medium font-medium text-base text-dimgray border-[1px] border-solid border-text-and-icon-contentdisbaled"
        defaultValue={formData.District}
        onChange={(e) => setFormData({ ...formData, District: e.target.value })}
      >
        <option value="" disabled hidden>
          District
        </option>
        <option value="Pune">Pune</option>
        <option value="Delhi">Delhi</option>
        <option value="Chennai">Chennai</option>
        <option value="Mumbai">Mumbai</option>
      </select>

      <div className="flex items-center justify-start absolute top-[calc(50%_-_83.5px)] left-[calc(50%_-_181.5px)]">
        <input
          className="outline-none font-medium font-subhead-sm-sh-sm-medium text-base bg-transparent rounded-lg box-border w-[70px] overflow-hidden flex flex-row items-center justify-start py-[18px] px-5 text-dimgray border-[1px] border-solid border-text-and-icon-contentdisbaled"
          name="CountryCode"
          id="CountryCode"
          placeholder="+91"
          type="text"
          value={formData.CountryCode}
          onChange={(e) => setFormData({ ...formData, CountryCode: e.target.value })}
        />
        <input
          className="outline-none font-medium font-subhead-sm-sh-sm-medium text-base bg-transparent rounded-lg box-border w-[285px] overflow-hidden flex flex-row items-center justify-start py-[18px] px-5 text-dimgray border-[1px] border-solid border-text-and-icon-contentdisbaled ml-[13px]"
          name="PhoneNumber"
          id="PhoneNumber"
          placeholder="Phone Number"
          type="text"
          value={formData.PhoneNumber}
          onChange={(e) => setFormData({ ...formData, PhoneNumber: e.target.value })}
        />
      </div>

      <div className="absolute top-[39px] left-[calc(50%_-_196.5px)] w-[393px] h-[42px] flex flex-row items-center justify-center">
        <div className="self-stretch flex-1 flex flex-row items-center justify-start p-2">
          <button
            className="cursor-pointer border-none p-0 bg-transparent flex flex-row items-center justify-start gap-[5px]"
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
            <div className="text-base leading-[23px] font-subhead-sm-sh-sm-medium text-text-color-contentsecondary text-left">
              Back
            </div>
          </button>
        </div>
        <div className="w-[191px] flex flex-row items-center justify-center">
          <div className="flex-1 leading-[25px] font-medium">Profile</div>
        </div>
        <div className="flex-1 flex flex-row items-center justify-end py-2 pr-4 pl-2 text-right text-base"></div>
      </div>
      <div className="absolute top-[calc(50%_-_315.5px)] left-[calc(50%_-_60.5px)] w-[121px] h-[121px]">
        <div className="absolute top-[calc(50%_-_60.5px)] left-[calc(50%_-_60.5px)] rounded-[50%] bg-border-divider-border w-[121px] h-[121px]" />
        <div className="absolute top-[calc(50%_+_29.5px)] left-[calc(50%_+_26.5px)] flex flex-row items-start justify-start">
          <div className="flex flex-row items-center justify-center relative gap-[10px]">
            <div className="w-[31px] relative rounded-[50%] bg-primary-700 h-[31px] [transform:_rotate(180deg)] z-[0] hover:bg-mediumseagreen-200 hover:cursor-pointer" />
            <img
              className="w-[23px] absolute !m-[0] top-[4px] left-[4px] h-[23px] object-cover z-[1]"
              alt=""
              src="/camera@2x.png"
            />
          </div>
        </div>
      </div>
      <button
        className="cursor-pointer border-none p-2.5 bg-transparent absolute top-[calc(50%_+_325.5px)] left-[calc(50%_-_2.5px)] flex flex-col items-center justify-center"
        onClick={handleSave}
      >
        <div className="rounded-lg bg-primary-700 h-[54px] flex flex-row items-center justify-center py-[15.5px] px-[67px] box-border">
          <div className="text-base leading-[23px] font-medium font-subhead-sm-sh-sm-medium text-shades-white text-center">
            Save
          </div>
        </div>
      </button>

      <button
        className="cursor-pointer border-none p-2.5 bg-transparent absolute top-[calc(50%_+_325.5px)] left-[calc(50%_-_191.5px)] flex flex-col items-center justify-center"
        onClick={handleCancel}
      >
        <div className="h-[54px] rounded-lg box-border flex flex-row items-center justify-center py-[15.5px] px-[58px] border-[1px] border-solid border-primary-700">
          <div className="text-base leading-[23px] font-medium font-subhead-sm-sh-sm-medium text-text-color-contentsecondary text-center">
            Cancel
          </div>
        </div>
      </button>
    </div>
  );
};

export default Level2;
