import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import CustomSelect from "../custom-select";
import { XMarkIcon } from "@heroicons/react/16/solid";

type Group = [groupName: string, count: number];

export default function PeopleSelect() {
  const [selectedGroup, setSelectedGroup] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<string>("");

  const { groups, users }: { groups: Group[]; users: string[] } = {
    groups: [
      ["All Users", 400],
      ["Managers", 14],
      ["Trainers", 4],
    ],
    users: ["Adrian Lu", "Evelyn Hamilton"],
  };

  const handleGroupSelect = (groupName: string) => {
    setSelectedGroup(groupName);
  };

  const handleUserSelect = (user: string) => {
    setSelectedUser(user);
  };

  const clearSelection = () => {
    setSelectedGroup("");
    setSelectedUser("");
  };

  return (
    <CustomSelect
      name="People"
      selected={
        selectedGroup && selectedUser
          ? "Multiple selected"
          : [selectedGroup, selectedUser]
      }
    >
      {(selectedGroup || selectedUser) && (
        <div
          className="absolute top-3 right-12 text-gray-500 cursor-pointer"
          onClick={clearSelection}
        >
          Clear
        </div>
      )}
      <div className="bg-white w-full top-12 z-10 rounded-b-20 border-custom flex flex-col gap-2 p-4">
        <div className="flex gap-2">
          {selectedGroup && (
            <div className="rounded-full bg-gray-200 px-3 py-1">
              <p className="flex items-center gap-2 font-semibold">
                {selectedGroup}
                <span>
                  <XMarkIcon
                    width={18}
                    height={18}
                    className="text-gray-500 cursor-pointer"
                    onClick={() => setSelectedGroup("")}
                  />
                </span>
              </p>
            </div>
          )}
          {selectedUser && (
            <div className="rounded-full bg-gray-200 px-3 py-1">
              <p className="flex items-center gap-2 font-semibold">
                {selectedUser}
                <span>
                  <XMarkIcon
                    width={18}
                    height={18}
                    className="text-gray-500 cursor-pointer"
                    onClick={() => setSelectedUser("")}
                  />
                </span>
              </p>
            </div>
          )}
        </div>
        {/* Search Input */}
        <div className="flex gap-2 items-center border-b pb-2">
          <MagnifyingGlassIcon
            width={16}
            height={16}
            className="text-black-custom-50"
          />
          <input
            className="w-full focus:outline-none"
            type="search"
            placeholder="Search"
          />
        </div>

        {/* Group Selection */}
        <div className="py-2 border-b pb-1">
          <p className="text-black-custom-50 font-semibold ">GROUPS</p>
          {groups.map(([groupName, count]) => (
            <div
              key={groupName}
              className="flex items-center gap-2 py-1"
            >
              <input
                type="radio"
                id={groupName}
                name="group"
                value={groupName}
                checked={selectedGroup.includes(groupName)}
                onChange={() => handleGroupSelect(groupName)}
                className="cursor-pointer"
              />
              <label
                htmlFor={groupName}
                className="cursor-pointer flex gap-2 items-center w-full font-semibold"
              >
                <span>{groupName}</span>
                <span className="text-sm text-black-custom-50">{count}</span>
              </label>
            </div>
          ))}
        </div>

        {/* User Selection */}
        <div className="py-2">
          <p className="text-black-custom-50 font-semibold">USERS</p>
          {users.map((user) => (
            <div
              key={user}
              className="flex items-center gap-2 py-1"
            >
              <input
                type="radio"
                id={user}
                name="user"
                value={user}
                checked={selectedUser.includes(user)}
                onChange={() => handleUserSelect(user)}
                className="cursor-pointer"
              />
              <label
                htmlFor={user}
                className="cursor-pointer font-semibold"
              >
                {user}
              </label>
            </div>
          ))}
        </div>
      </div>
    </CustomSelect>
  );
}
