import Image from "next/image";
import downloadIcon from "/public/icons/download.svg";
export default function page() {
  return (
    <div className="flex justify-between ">
      <h1 className="text-2xl font-bold">Reports</h1>
      <button className="flex items-center">
        <Image
          src={downloadIcon}
          alt="Download"
          width={22}
          height={22}
        />
        <span className="font-bold">Download</span>
      </button>
    </div>
  );
}
