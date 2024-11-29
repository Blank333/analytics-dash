import Image from "next/image";
import { userInfo } from "./types/userInfo";
import leaderboardArrowDown from "/public/icons/leaderboardArrowDown.svg";
import leaderboardArrowUp from "/public/icons/leaderboardArrowUp.svg";

export default function UserLeaderCard({ user }: { user: userInfo }) {
  const rankDiff = user.previous_rank - user.current_rank;
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <div>
          <Image
            src={user.image}
            alt={`${user.name} Image`}
            width={42}
            height={42}
            className="rounded-full"
          />
        </div>

        <div className="flex flex-col ">
          <h5 className="font-semibold">{user.name}</h5>
          <p className="text-black-custom-50">
            {user.points} - {user.accuracy_percentage}% Correct
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
