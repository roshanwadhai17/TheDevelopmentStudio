import { useMemo } from "react";
import PropTypes from "prop-types";

const Transaction = ({ className = "", welton, prop, up, propTop }) => {
  const sendStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <div
      className={`absolute top-[calc(50%_-_4px)] left-[calc(50%_-_181.5px)] w-[362px] h-16 cursor-pointer text-left text-sm text-text-and-icon-contentoninverse font-subhead-sm-sh-sm-medium ${className}`}
      id="Transaction"
      style={sendStyle}
    >
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] [filter:drop-shadow(0px_0px_1px_rgba(0,_0,_0,_0.24))] rounded-lg box-border border-[0.5px] border-solid border-base-color-primary-color hover:bg-shades-white" />
      <div className="absolute top-[15.63%] left-[17.68%] leading-[22px] font-medium">
        {welton}
      </div>
      <div className="absolute top-[54.69%] left-[17.68%] text-xs leading-[18px] text-text-color-contenttertiary">
        Today at 09:20 am
      </div>
      <div className="absolute top-[32.81%] left-[76.52%] leading-[22px] font-medium text-right">
        {prop}
      </div>
      <img
        className="absolute h-[62.5%] w-[11.05%] top-[18.75%] right-[85.91%] bottom-[18.75%] left-[3.04%] max-w-full overflow-hidden max-h-full object-cover"
        alt=""
        src={up}
      />
    </div>
  );
};

Transaction.propTypes = {
  className: PropTypes.string,
  welton: PropTypes.string,
  prop: PropTypes.string,
  up: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
};

export default Transaction;
