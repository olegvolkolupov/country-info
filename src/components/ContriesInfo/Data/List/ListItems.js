import React from "react";

export default function ListItems({ itemStyle, linkButtonStyle, countryName, onHandleLink }) {
  return (
    <li className={itemStyle}>
      <button
        type="button"
        className={linkButtonStyle}
        onClick={onHandleLink}
      >
        {countryName.common}
      </button>
    </li>
  );
}
