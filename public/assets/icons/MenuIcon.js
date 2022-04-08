import * as React from "react";

function MenuIcon({fill}) {
  return (
    <svg width="22" height="19" viewBox="0 0 22 19" fill={fill ? fill : '#fff'} xmlns="http://www.w3.org/2000/svg">
      <path d="M2 2.00537H20.4404" stroke={fill ? fill : '#fff'} stroke-width="2.875" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M6.81055 10.0522H20.4404" stroke={fill ? fill : '#fff'} stroke-width="2.4374" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M2 17.2944H20.4404" stroke={fill ? fill : '#fff'} stroke-width="2.875" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  );
}

export default MenuIcon;