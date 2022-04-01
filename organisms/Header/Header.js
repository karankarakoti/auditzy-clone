import Link from 'next/link'
import React, { useState } from 'react'

const navbar = [
  {
    id: "0",
    name: "Home",
    url: "/",
    children: [],
  },
  {
    id: "1",
    name: "Features",
    url: "#",
    children: [
      {
        id: "1.1",
        name: "Site Auditing",
        url: "#",
      },
      {
        id: "1.2",
        name: "Competitor Analysis",
        url: "#",
      },
      {
        id: "1.3",
        name: "Site Monitoring",
        url: "#",
      },
    ],
  },
  {
    id: "2",
    name: "Pricing",
    url: "/",
    children: [],
  },
  {
    id: "3",
    name: "Resources",
    url: "#",
    children: [
      {
        id: "3.1",
        name: "Site Auditing",
        url: "#",
      },
      {
        id: "3.2",
        name: "Competitor Analysis",
        url: "#",
      },
      {
        id: "3.3",
        name: "Site Monitoring",
        url: "#",
      },
    ],
  },
  {
    id: "4",
    name: "Contact Us",
    url: "/",
    children: [],
  },    
]

export const Header = () => {

  const [menu, setMenu] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>Header</div>
  )
}