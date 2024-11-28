import { InformationCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import graph from "/public/graph.png";

export default function MetricCard({
  name,
  content,
  info = false,
  showGraph = false,
}: {
  name: string;
  content: string;
  info: boolean;
  showGraph: boolean;
}) {
  return (
    <div className="flex flex-col bg-white rounded-20 min-h-44 min-w-40  w-full h-full p-4 gap-4 shadow border-custom">
      <div className="flex flex-col gap-8 relative">
        <div className="flex gap-2">
          <p className="text-sm">{name}</p>
          {info && (
            <button>
              <InformationCircleIcon
                color="#6B6C7E"
                className="w-3 h-3 absolute right-0 top-1"
              />
            </button>
          )}
        </div>
        <h2 className="text-2xl font-bold">{content}</h2>
      </div>
      <div className="flex justify-center">
        {showGraph && (
          <Image
            src={graph}
            alt="Graph"
            width={126}
            height={35}
            className="w-full"
          />
        )}
      </div>
    </div>
  );
}
