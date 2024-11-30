import { convertSecondsToMandS } from "@/app/utility/convertSeconds";
import MetricCard from "../metric-card";
import { taskDataInfo } from "../types/taskDataInfo";

export default function MetricsInfo({
  taskData,
  graphData,
}: {
  taskData: taskDataInfo;
  graphData?: any;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 flex-col md:flex-row ">
        <MetricCard
          name={"Active Users"}
          content={`${taskData.active_users.current}`}
          totalUsers={taskData.active_users.total}
        />
        <MetricCard
          name={"Questions Answered"}
          content={`${taskData.questions_answered.toLocaleString()}`}
        />
        <MetricCard
          name={"Av. Session Length"}
          content={convertSecondsToMandS(
            taskData.average_session_length_seconds
          )}
        />
      </div>
      <div>
        <div className="flex gap-4 flex-col md:flex-row">
          <MetricCard
            name={"Starting Knowledge"}
            content={`${taskData.starting_knowledge_percentage}%`}
            info={true}
            graphData={graphData}
          />
          <MetricCard
            name={"Current Knowledge"}
            content={`${taskData.current_knowledge_percentage}%`}
            graphData={graphData}
          />
          <MetricCard
            name={"Knowledge Gain"}
            content={`${
              taskData.current_knowledge_percentage -
              taskData.starting_knowledge_percentage
            }%`}
            graphData={graphData}
          />
        </div>
      </div>
    </div>
  );
}
