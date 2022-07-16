import React from "react";

const Select = ({ formats, select, handleOnChange }) => {
  return (
    <select
      onChange={handleOnChange}
      value={select}
      className="w-full p-2 outline-none border border-blue-500 scroll-none"
    >
      {formats?.map((item) => (
        <option value={item?.url} className="p-2" key={item?.url}>
          <p>{item?.qualityLabel}</p>
        </option>
      ))}
    </select>
  );
};

export default Select;
