import TopicCard from "../topic-card";
import { topicInfo } from "../types/topicInfo";

export default function Topics({
  topics,
  danger,
}: {
  topics: topicInfo[];
  danger: boolean;
}) {
  return (
    <div className="flex flex-col gap-8">
      {topics.map((topic) => (
        <TopicCard
          topicData={topic}
          key={topic.name}
          danger={danger}
        />
      ))}
    </div>
  );
}
