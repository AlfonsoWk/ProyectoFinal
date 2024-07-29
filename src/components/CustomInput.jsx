import React from "react";
import { MDBInput } from "mdb-react-ui-kit";

const CustomInput = ({ label, type, id, value, onChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="required">
        {label}
      </label>
      <MDBInput
        onChange={onChange}
        value={value}
        size="sm"
        id={id}
        type={type}
      />
    </div>
  );
};

export default CustomInput;
