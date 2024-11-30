"use client";

import React from "react";
import NavButton from "../nav-button";
import {
  ArrowTrendingUpIcon,
  BoltIcon,
  DocumentCheckIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";

export default function NavLinks() {
  const links = [
    {
      name: "Reports",
      href: "/dashboard",
      icon: ArrowTrendingUpIcon,
    },
    {
      name: "Library",
      href: "/dashboard/library",
      icon: BoltIcon,
    },
    {
      name: "People",
      href: "/dashboard/people",
      icon: UserGroupIcon,
    },
    {
      name: "Activities",
      href: "/dashboard/activities",
      icon: DocumentCheckIcon,
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
