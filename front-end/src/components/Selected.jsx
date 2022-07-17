import React, { useState } from "react";

const Selected = ({ data }) => {
  const [select, setSelect] = useState(data[0]?.url);

  return (
    <div className="select md:mx-40 mt-4 flex">
      <a
        target="_blank"
        rel="noreferrer"
        href={select}
        className="bg-blue-500 px-3 py-2"
      >
        Download Video
      </a>
      <select
        value={select}
        onChange={(e) => setSelect(e.target.value)}
        className="flex-1"
      >
        {data?.map((item) => (
          <option value={item.url}>
            <div>
              <span> {item.container.toUpperCase()}</span>
              <span className="ml-2"> {item.qualityLabel}</span>
            </div>
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selected;
