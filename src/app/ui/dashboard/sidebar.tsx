import Image from "next/image";
import logo from "/public/logo.svg";
import Link from "next/link";
import NavLinks from "./navlinks";
import SupportNavLinks from "./supportnavlinks";

export default function SideBar() {
  return (
    <div className="flex flex-col justify-between h-screen shadow p-9 bg-white border border-custom rounded-[20px]">
      <div className="flex flex-col items-center gap-8 ">
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Logo"
            width={138}
            height={17}
          />
        </Link>
        <div className="flex flex-col gap-1">
          <NavLinks />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="font-medium text-black-custom-50 px-3">Support</h1>
          <SupportNavLinks />
        </div>
      </div>
      <div className="border-t-2 flex flex-col gap-2 pt-8">
        {/* PLACEHOLDER  */}
        <Image
          className="rounded-full bg-black"
          src=""
          alt=""
          width={34}
          height={34}
        />
        <div>
          <h4 className="font-bold">Sam Wheeler</h4>
          <p className="text-sm text-black-custom-50">samwheeler@example.com</p>
        </div>
      </div>
    </div>
  );
}
