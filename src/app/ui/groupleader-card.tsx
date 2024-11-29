import leaderboardArrowDown from "/public/icons/leaderboardArrowDown.svg";
import leaderboardArrowUp from "/public/icons/leaderboardArrowUp.svg";
import { groupInfo } from "./types/groupInfo";
import Image from "next/image";

export default function GroupLeaderCard({ groups }: { groups: groupInfo }) {
  const rankDiff = groups.previous_rank - groups.current_rank;
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <div className="flex flex-col ">
          <h5 className="font-semibold">{groups.group_name}</h5>
          <p className="text-black-custom-50">
            {groups.points_per_user} - {groups.accuracy_percentage}% Correct
          </p>
        </div>
      </div>
      <div className="flex gap-2 items-center">
        {rankDiff * Math.sign(rankDiff)}
        {rankDiff > 0 ? (
          <Image
            src={leaderboardArrowUp}
            alt="Rank Up"
          />
        ) : rankDiff < 0 ? (
          <Image
            src={leaderboardArrowDown}
            alt="Rank Down"
          />
        ) : (
          <span>-</span>
        )}
      </div>
    </div>
  );
}
