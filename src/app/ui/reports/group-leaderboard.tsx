import { calculateRanksGroup } from "@/app/utility/calculateRanks";
import { groupInfo } from "../types/groupInfo";
import GroupleaderCard from "../groupleader-card";

export default function GroupLeaderBoard({ groups }: { groups: groupInfo[] }) {
  const rankedGroups = calculateRanksGroup(groups);

  return (
    <div className="flex flex-col gap-4">
      {rankedGroups.map((group: groupInfo) => (
        <GroupleaderCard
          key={group.group_name}
          groups={group}
        />
      ))}
    </div>
  );
}
