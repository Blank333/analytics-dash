import Image from "next/image";
import { topicInfo } from "./types/topicInfo";
import ProgressBar from "./progress-bar";

export default function TopicCard({
  topicData,
  danger,
}: {
  topicData: topicInfo;
  danger: boolean;
}) {
  return (
    <div className="flex justify-between gap-4 items-end">
      <div className="flex gap-4 w-full">
        <div className="flex items-center">
          <Image
            src={topicData.image}
            alt={`${topicData.name} Image`}
            width={49}
            height={32}
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col w-full gap-1">
          <h5 className="font-semibold text-sm">{topicData.name}</h5>
          <ProgressBar
            progress={topicData.correct_percentage}
            danger={danger}
          />
        </div>
      </div>
      <div className="flex items-center font-semibold text-sm">
        {topicData.correct_percentage}%{" "}
        <span className="text-black-custom-50">Correct</span>
      </div>
    </div>
  );
}
