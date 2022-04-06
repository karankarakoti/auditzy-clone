import * as React from "react";

function CloseMenu({fill}) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill={fill ? fill : '#fff'} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.4 0.613275C17.1509 0.363605 16.8127 0.223294 16.46 0.223294C16.1073 0.223294 15.7691 0.363605 15.52 0.613275L8.99996 7.11994L2.47996 0.599942C2.23085 0.350272 1.89265 0.209961 1.53996 0.209961C1.18727 0.209961 0.84907 0.350272 0.599961 0.599942C0.0799609 1.11994 0.0799609 1.95994 0.599961 2.47994L7.11996 8.99994L0.599961 15.5199C0.0799609 16.0399 0.0799609 16.8799 0.599961 17.3999C1.11996 17.9199 1.95996 17.9199 2.47996 17.3999L8.99996 10.8799L15.52 17.3999C16.04 17.9199 16.88 17.9199 17.4 17.3999C17.92 16.8799 17.92 16.0399 17.4 15.5199L10.88 8.99994L17.4 2.47994C17.9066 1.97328 17.9066 1.11994 17.4 0.613275Z"
        fill={fill ? fill : '#fff'}
      />
    </svg>
  );
}

export default CloseMenu;
