"use client";

import { useState } from "react";
import arrowDown from "/public/icons/arrowDown.svg";
import arrowUp from "/public/icons/arrowUp.svg";
import Image from "next/image";
import clsx from "clsx";

export default function TimeFrameSelect({
  name,
  options,
}: {
  name: string;
  options: Array<string>;
}) {
  const [selected, setSelected] = useState<string>("This Year");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsExpanded(false);
  };
  return (
    <div className={clsx({ shadow: isExpanded }, "w-full")}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex justify-between items-center w-full rounded-20 border border-custom bg-white px-4 py-2 h-12"
      >
        <p>
          {name}: <span className="font-bold">{selected}</span>
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
      {isExpanded && (
        <div className="absolute right-0 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {options.map((option) => (
              <button
                key={option}
                className={clsx(
                  { "bg-blue-custom-10 font-bold": selected === option },
                  { "text-gray-700": selected !== option },
                  "flex w-full items-center px-4 py-2 text-sm hover:bg-blue-100 hover:text-blue-600"
                )}
                onClick={() => handleSelect(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
