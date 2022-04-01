import * as React from "react";

function More(props) {
  return (
    <svg width="1em" height="1em" viewBox="0 0 16 4" fill="none" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 0C.9 0 0 .9 0 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM6 2c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
        fill="#050E29"
      />
    </svg>
  );
}

const MemoMore = React.memo(More);
export default MemoMore;