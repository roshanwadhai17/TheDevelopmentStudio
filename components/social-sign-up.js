import { useMemo } from "react";
import PropTypes from "prop-types";

const SocialSignUp = ({
  className = "",
  socialSignUpId,
  apple,
  signUpWithApple,
  propTop,
}) => {
  const socialSignUpStyle = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  return (
    <button
      className={`cursor-pointer py-3 px-[89px] bg-[transparent] absolute top-[calc(50%_+_361.5px)] left-[calc(50%_-_180.5px)] rounded-lg flex flex-row items-center justify-center gap-[8px] border-[1.5px] border-solid border-border-divider-border ${className}`}
      style={socialSignUpStyle}
    >
      <img
        className="w-6 relative h-6 overflow-hidden shrink-0"
        alt=""
        src={apple}
      />
      <div className="relative text-base leading-[24px] font-medium font-subhead-sm-sh-sm-medium text-text-color-contenttertiary text-center">
        {signUpWithApple}
      </div>
    </button>
  );
};

export default SocialSignUp;
