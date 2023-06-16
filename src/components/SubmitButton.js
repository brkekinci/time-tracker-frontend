import { useState } from "react";
import _ from "lodash";

const SubmitButton = ({ onSubmit, text, className, invalid, disabled }) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <button
      disabled={isClicked || disabled}
      className={className || " btn btn-primary"}
      onClick={
        !invalid
          ? _.debounce(async () => {
              setIsClicked(true);
              await onSubmit();
              setTimeout(() => {
                setIsClicked(false);
              }, 3000);
            }, 1)
          : null
      }
    >
      {isClicked ? (
        <div
          className="spinner-border spinner-border-sm text-white"
          role="status"
        />
      ) : (
        text
      )}
    </button>
  );
};

export default SubmitButton;
