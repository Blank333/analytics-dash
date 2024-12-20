import { InformationCircleIcon } from "@heroicons/react/24/outline";
import LineChart from "./line-chart";

export default function MetricCard({
  name,
  content,
  totalUsers,
  info,
  graphData,
}: {
  name: string;
  content?: string;
  info?: boolean;
  graphData?: any;
  totalUsers?: number;
}) {
  return (
    <div className="flex flex-col bg-white rounded-20 min-h-44 w-full h-full p-4 gap-4 shadow border-custom">
      <div className="flex flex-col gap-8 relative">
        <div className="flex gap-2">
          <p className="text-sm">{name}</p>
          {/* For info tooltips */}
          {info && (
            <button>
              <InformationCircleIcon
                color="#6B6C7E"
                className="w-4 h-4 absolute right-0 top-1"
              />
            </button>
          )}
        </div>
        <h2 className="text-2xl font-bold">
          {content}
          {/* For Active Users */}
          {totalUsers && (
            <span className="text-black-custom-50 font-semibold text-lg">
              /{totalUsers}
            </span>
          )}
        </h2>
      </div>
      <div className="flex justify-center">
        {/* For graphs */}
        {graphData && <LineChart data={graphData} />}
      </div>
    </div>
  );
}
