import clsx from "clsx";
import Image from "next/image";
import arrowDown from "/public/icons/arrowDown.svg";
import arrowUp from "/public/icons/arrowUp.svg";
import { useState } from "react";

export default function CustomSelect({
  name,
  children,
  selected,
}: {
  name: string;
  selected: any;
  children: React.ReactNode;
}) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  return (
    <div className="relative w-full h-12 ">
      <div className="flex flex-col gap-2 justify-center border border-custom bg-white rounded-20 w-full absolute px-4">
        <div
          className={clsx(
            { " border-b": isExpanded },
            "flex items-center w-full h-12 cursor-pointer "
          )}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <button className="flex justify-between items-center  w-full">
            <p>
              {name}:{" "}
              <span className="font-bold">
                {typeof selected !== "string"
                  ? selected.map((item: string) => item)
                  : selected}
              </span>
            </p>
            {isExpanded ? (
              <Image
                alt="Close Timeframe Menu"
                src={arrowUp}
              />
            ) : (
              <Image
                alt="Open Timeframe Menu"
                src={arrowDown}
              />
            )}
          </button>
        </div>

        {isExpanded && children}
      </div>
    </div>
  );
}
