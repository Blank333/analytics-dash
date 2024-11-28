import MetricCard from "./metric-card";

function MetricsInfo({
  current_users,
  total_users,
  questions_answered,
  average_session_length_seconds,
  starting_knowledge_percentage,
  current_knowledge_percentage,
}: {
  current_users: number;
  total_users: number;
  questions_answered: number;
  average_session_length_seconds: number;
  starting_knowledge_percentage: number;
  current_knowledge_percentage: number;
}) {
  const convertSeconds = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}m ${remainingSeconds}s`;
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 flex-col md:flex-row ">
        <MetricCard
          name={"Active Users"}
          content={`${current_users}/${total_users}`}
          info={false}
          showGraph={false}
        />
        <MetricCard
          name={"Questions Answered"}
          content={`${questions_answered.toLocaleString()}`}
          info={false}
          showGraph={false}
        />
        <MetricCard
          name={"Av. Session Length"}
          content={convertSeconds(average_session_length_seconds)}
          info={false}
          showGraph={false}
        />
      </div>
      <div>
        <div className="flex gap-4 flex-col md:flex-row">
          <MetricCard
            name={"Starting Knowledge"}
            content={`${starting_knowledge_percentage}%`}
            info={true}
            showGraph={true}
          />
          <MetricCard
            name={"Current Knowledge"}
            content={`${current_knowledge_percentage}%`}
            info={false}
            showGraph={true}
          />
          <MetricCard
            name={"Knowledge Gain"}
            content={`${
              current_knowledge_percentage - starting_knowledge_percentage
            }%`}
            info={false}
            showGraph={true}
          />
        </div>
      </div>
    </div>
  );
}

export default MetricsInfo;
