import { useEffect, useState } from "react";
import Transaction from "../components/transaction";
import Menu from "../components/menu";

const Level4 = () => {
  const [data, setData] = useState({
    availableBalance: 0,
    totalExpense: 0,
    transactions: [],
  });

  useEffect(() => {
    fetch("https://d919c276-1a7a-46a6-b23d-a7717594cf32.mock.pstmn.io/data")
      .then((response) => response.json())
      .then((data) => {
        setData({
          availableBalance: data.avialableBalance,
          totalExpense: data.totalExpense,
          transactions: data.transactions,
        });
        console.log("Fetched data:", data); 
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col justify-between bg-shades-white text-left text-sm text-text-color-contenttertiary font-subhead-sm-sh-sm-medium">
      <div className="absolute top-[818px] left-[0px] w-[393px] h-[34px] hidden">
        <div className="absolute bottom-[8px] left-[calc(50%_-_66.5px)] rounded-[100px] bg-neutral-gray-900 w-[134px] h-[5px]" />
      </div>
      <button className="cursor-pointer absolute top-[calc(50%_-_396px)] left-[calc(50%_-_178.5px)] w-[34px] h-[34px] bg-transparent">
        <div className="absolute top-[calc(50%_-_17px)] left-[calc(50%_-_17px)] rounded bg-mediumaquamarine-100 w-[34px] h-[34px]" />
        <img
          className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-6 h-6"
          alt=""
          src="/hamburger-menu.svg"
        />
      </button>
      <button className="cursor-pointer absolute top-[calc(50%_-_396px)] left-[calc(50%_+_140.5px)] w-[34px] h-[34px] bg-transparent">
        <div className="absolute top-[calc(50%_-_17px)] left-[calc(50%_-_17px)] rounded bg-shades-white w-[34px] h-[34px]" />
        <img
          className="absolute top-[calc(50%_-_12px)] left-[calc(50%_-_12px)] w-6 h-6 object-cover"
          alt=""
          src="/notification@2x.png"
        />
      </button>
      <div className="absolute top-[calc(50%_-_321px)] left-[calc(50%_-_6.5px)] flex flex-col items-center justify-center p-2.5">
        <button
          className="cursor-pointer py-[15.5px] px-10 bg-[transparent] rounded-lg box-border h-[54px] flex flex-row items-center justify-center border-[1px] border-solid border-primary-700"
          id="Button"
        >
          <div className="relative text-base leading-[23px] font-medium font-subhead-sm-sh-sm-medium text-primary-700 text-center hover:text-seagreen">
            Add Money
          </div>
        </button>
      </div>
      <div
        className="absolute top-[calc(50%_-_218px)] left-[calc(50%_-_181.5px)] w-[166px] h-[145px] cursor-pointer"
        id="AvailableBalance"
      >
        <div className="absolute top-[calc(50%_-_72.5px)] left-[calc(50%_-_83px)] rounded-lg bg-primary-50 box-border w-[166px] h-[145px] border-[1px] border-solid border-base-color-primary-color hover:bg-mediumaquamarine-200" />
        <div className="absolute top-[calc(50%_+_18.5px)] left-[calc(50%_-_64px)] leading-[19px] font-medium">
          Available Balance
        </div>
        <span
          className="absolute top-[calc(50%_-_34.5px)] left-[calc(50%_-_48px)] text-9xl leading-[34px] font-medium"
          id="AvlBal"
        >
           ₹{data.availableBalance}
        </span>
      </div>
      <div
        className="absolute top-[calc(50%_-_218px)] left-[calc(50%_+_14.5px)] w-[166px] h-[145px] cursor-pointer text-center"
        id="Total Expend"
      >
        <div className="absolute top-[calc(50%_-_72.5px)] left-[calc(50%_-_83px)] rounded-lg bg-primary-50 box-border w-[166px] h-[145px] border-[1px] border-solid border-base-color-primary-color hover:bg-mediumaquamarine-200" />
        <div className="absolute top-[calc(50%_+_18.5px)] left-[calc(50%_-_45px)] leading-[19px] font-medium">
          Total Expend
        </div>
        <span
          className="absolute top-[calc(50%_-_34.5px)] left-[calc(50%_-_41px)] text-9xl leading-[34px] font-medium text-left"
          id="TotalEx"
        >
           ₹{data.totalExpense}
        </span>
      </div>
      <div className="absolute top-[calc(50%_-_43px)] left-[calc(50%_-_181.5px)] w-[362px] h-[23px] text-base text-text-color-contentsecondary">
        <div className="absolute top-[calc(50%_-_11.5px)] left-[calc(50%_-_181px)] leading-[23px] font-semibold">
          Transactions
        </div>
        <div className="absolute top-[calc(50%_-_8.5px)] left-[calc(50%_+_141px)] text-xs leading-[18px] font-medium text-primary-800 text-right hover:text-darkgray cursor-pointer">
          See All
        </div>
      </div>
      {data.transactions.map((transaction, index) => (
        <Transaction
          key={index}
          welton={transaction.label}
          prop={`${transaction.type === "expense" ? "-" : ""}₹${transaction.amount}`}
          up={transaction.type === "expense" ? "/up@2x.png" : "/down@2x.png"}
          propTop={`calc(50% + ${index * 80}px)`}
        />
      ))}
      <Menu className="fixed" />
    </div>
  );
};

export default Level4;
