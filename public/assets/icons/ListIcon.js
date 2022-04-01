import * as React from "react";

function ListIcon({ fill }) {
  return (
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1 9H3C3.55 9 4 8.55 4 8V6C4 5.45 3.55 5 3 5H1C0.45 5 0 5.45 0 6V8C0 8.55 0.45 9 1 9ZM1 14H3C3.55 14 4 13.55 4 13V11C4 10.45 3.55 10 3 10H1C0.45 10 0 10.45 0 11V13C0 13.55 0.45 14 1 14ZM1 4H3C3.55 4 4 3.55 4 3V1C4 0.45 3.55 0 3 0H1C0.45 0 0 0.45 0 1V3C0 3.55 0.45 4 1 4ZM6 9H17C17.55 9 18 8.55 18 8V6C18 5.45 17.55 5 17 5H6C5.45 5 5 5.45 5 6V8C5 8.55 5.45 9 6 9ZM6 14H17C17.55 14 18 13.55 18 13V11C18 10.45 17.55 10 17 10H6C5.45 10 5 10.45 5 11V13C5 13.55 5.45 14 6 14ZM5 1V3C5 3.55 5.45 4 6 4H17C17.55 4 18 3.55 18 3V1C18 0.45 17.55 0 17 0H6C5.45 0 5 0.45 5 1Z"
        fill={fill ? fill : "#535765"}
      />
    </svg>
  );
}

export default ListIcon;