"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavButton({
  name,
  href,
  icon: Icon,
}: {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  const path = usePathname();

  return (
    <>
      <Link
        href={href}
        className={clsx(
          { "bg-blue-custom-10 text-blue-custom": href === path },
          { "text-black-custom-70 ": href !== path },
          "flex h-[48px] grow items-center justify-center gap-2 rounded-[10px] w-48 p-3 text-sm font-medium hover:bg-blue-custom-10 hover:text-blue-custom md:flex-none md:justify-start md:p-2 md:px-3"
        )}
      >
        <Icon className="w-6" />
        <p className="hidden md:block">{name}</p>
      </Link>
    </>
  );
}
