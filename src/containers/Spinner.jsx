import React from "react";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Spinner = () => {
  return (
    <div
      className="d-flex flex-row justify-content-center align-items-center "
      style={{ width: "100%", height: "350px" }}
    >
      <FontAwesomeIcon
        icon={faSpinner}
        size="3x"
        spin
        color="#000"
        style={{ width: "100%" }}
      />
    </div>
  );
};

export default Spinner;
