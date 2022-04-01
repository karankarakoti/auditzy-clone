import * as React from "react";

function GridIcon({ fill }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 8H6C7.1 8 8 7.1 8 6V2C8 0.9 7.1 0 6 0H2C0.9 0 0 0.9 0 2V6C0 7.1 0.9 8 2 8Z"
        fill={fill ? fill : "#535765"}
      />
      <path
        d="M2 18H6C7.1 18 8 17.1 8 16V12C8 10.9 7.1 10 6 10H2C0.9 10 0 10.9 0 12V16C0 17.1 0.9 18 2 18Z"
        fill={fill ? fill : "#535765"}
      />
      <path
        d="M10 2V6C10 7.1 10.9 8 12 8H16C17.1 8 18 7.1 18 6V2C18 0.9 17.1 0 16 0H12C10.9 0 10 0.9 10 2Z"
        fill={fill ? fill : "#535765"}
      />
      <path
        d="M12 18H16C17.1 18 18 17.1 18 16V12C18 10.9 17.1 10 16 10H12C10.9 10 10 10.9 10 12V16C10 17.1 10.9 18 12 18Z"
        fill={fill ? fill : "#535765"}
      />
    </svg>
  );
}

export default GridIcon;
