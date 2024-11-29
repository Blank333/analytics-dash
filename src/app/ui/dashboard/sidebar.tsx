import Image from "next/image";
import logoLarge from "/public/logolarge.svg";
import profilePicture from "/public/profilePicture.jpeg";
import logo from "/public/logo.png";
import Link from "next/link";
import NavLinks from "./nav-links";
import SupportNavLinks from "./support-nav-links";

export default function SideBar() {
  return (
    <div className="flex flex-col justify-between h-screen sticky top-0 shadow p-4 lg:p-9 bg-white border border-custom rounded-20 w-16 lg:w-64">
      <div className="flex flex-col items-center gap-0 lg:gap-8 w-full">
        {/* Logo */}
        <Link
          href={"/"}
          className="mb-4 lg:m-0"
        >
          {/* Desktop */}
          <Image
            src={logoLarge}
            alt="Logo"
            width={138}
            height={17}
            className="hidden lg:block"
          />{" "}
          {/* Mobile */}
          <Image
            src={logo}
            alt="Logo"
            width={32}
            height={32}
            className="block lg:hidden"
          />
        </Link>
        <div className="flex flex-col gap-1">
          <NavLinks />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-medium text-black-custom-50 px-3 hidden lg:block">
            Support
          </h1>
          <SupportNavLinks />
        </div>
      </div>
      <div className="border-t-2 flex flex-col gap-2 pt-8">
        {/* PLACEHOLDER  */}
        <div>
          <Image
            className="rounded-full bg-black"
            src={profilePicture}
            alt="Profile Picture"
            width={34}
            height={34}
          />
        </div>
        <div className="hidden lg:block">
          <h4 className="font-bold">Sam Wheeler</h4>
          <p className="text-sm text-black-custom-50">samwheeler@example.com</p>
        </div>
      </div>
    </div>
  );
}
