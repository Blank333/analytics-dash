import { calculateRanksUser } from "@/app/utility/calculateRanks";
import UserLeaderCard from "../userleader-card";
import { userInfo } from "../types/userInfo";

export default function UserLeaderboard({ users }: { users: userInfo[] }) {
  const rankedUsers = calculateRanksUser(users);

  return (
    <div className="flex flex-col gap-8">
      {rankedUsers.map((user: userInfo) => (
        <UserLeaderCard
          key={user.name}
          user={user}
        />
      ))}
    </div>
  );
}
