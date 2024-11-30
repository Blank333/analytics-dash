import { useEffect, useState } from "react";
import clsx from "clsx";
import CustomSelect from "../custom-select";

export default function TopicSelect({ topics }: { topics: string[] }) {
  const [selected, setSelected] = useState<string>("All");

  const handleSelect = (option: string) => {
    if (selected === option) {
      setSelected("All");
    } else {
      setSelected(option);
    }
  };
  return (
    <CustomSelect
      name="Topic"
      selected={selected}
    >
      <div className="bg-white w-full top-12 z-10 rounded-b-20  border-custom flex flex-col gap-2">
        {topics.map((topic) => (
          <button
            key={topic}
            className={clsx(
              { "bg-blue-custom-10 font-bold": selected === topic },
              { "text-gray-700": selected !== topic },
              "flex w-full items-center px-2 py-2 text-sm hover:bg-blue-100 hover:text-blue-600 rounded-xl"
            )}
            onClick={() => handleSelect(topic)}
          >
            {topic}
          </button>
        ))}
      </div>
    </CustomSelect>
  );
}
