import { groupInfo } from "../ui/types/groupInfo";
import { userInfo } from "../ui/types/userInfo";

export const calculateRanksUser = (users: userInfo[]) => {
  const currentRanked = [...users].sort(
    (a, b) => b.accuracy_percentage - a.accuracy_percentage
  );
  currentRanked.forEach((user, index) => {
    user.current_rank = index + 1;
  });

  const previousRanked = [...users].sort(
    (a, b) => b.previous_accuracy_percentage - a.previous_accuracy_percentage
  );
  previousRanked.forEach((user, index) => {
    user.previous_rank = index + 1;
  });

  return users;
};

export const calculateRanksGroup = (groups: groupInfo[]) => {
  const currentRanked = [...groups].sort(
    (a, b) => b.accuracy_percentage - a.accuracy_percentage
  );
  currentRanked.forEach((user, index) => {
    user.current_rank = index + 1;
  });

  const previousRanked = [...groups].sort(
    (a, b) => b.previous_accuracy_percentage - a.previous_accuracy_percentage
  );
  previousRanked.forEach((user, index) => {
    user.previous_rank = index + 1;
  });

  return groups;
};
