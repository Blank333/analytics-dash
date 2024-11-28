"use client";

import React from "react";
import NavButton from "../nav-button";
import { Cog6ToothIcon, LightBulbIcon } from "@heroicons/react/16/solid";

export default function SupportNavLinks() {
  const links = [
    {
      name: "Get Started",
      href: "/dashboard/getstarted",
      icon: LightBulbIcon,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Cog6ToothIcon,
    },
  ];
  return (
    <>
      {links.map((link) => (
        <NavButton
          key={link.name}
          name={link.name}
          href={link.href}
          icon={link.icon}
        />
      ))}
    </>
  );
}
