import { useState } from "react";
import clsx from "clsx";
import CustomSelect from "../custom-select";

export default function TimeFrameSelect() {
  const [selected, setSelected] = useState<string>("This Year");
  const options = ["Last 7 Days", "This Month", "This Year", "Custom"];

  const handleSelect = (option: string) => {
    setSelected(option);
  };
  return (
    <CustomSelect
      name="Timeframe"
      selected={selected}
    >
      <div className="bg-white w-full top-12 z-10 rounded-b-20  border-custom flex flex-col gap-2">
        {options.map((option) => (
          <button
            key={option}
            className={clsx(
              { "bg-blue-custom-10 font-bold": selected === option },
              { "text-gray-700": selected !== option },
              "flex w-full items-center px-2 py-2 text-sm hover:bg-blue-100 hover:text-blue-600 rounded-xl"
            )}
            onClick={() => handleSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </CustomSelect>
  );
}
