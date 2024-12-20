"use client";

import Image from "next/image";
import downloadIcon from "/public/icons/download.svg";
import TimeFrameSelect from "@/app/ui/reports/timeframe-select";
import { useEffect, useState } from "react";
import MetricsInfo from "@/app/ui/reports/metrics-info";
import UserLeaderboard from "@/app/ui/reports/user-leaderboard";
import GroupLeaderBoard from "@/app/ui/reports/group-leaderboard";
import Card from "@/app/ui/reports/card";
import ActivityChart from "@/app/ui/reports/activity-chart";
import Topics from "@/app/ui/reports/topics";
import MetricCard from "@/app/ui/metric-card";
import PeopleSelect from "../ui/reports/people-select";
import TopicSelect from "../ui/reports/topic-select";

export default function Page() {
  const [taskData, setTaskData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/task-data.json");
        if (!response.ok) {
          throw new Error(`${response.status} Fetching error`);
        }
        const data = await response.json();

        setTaskData(data);
      } catch (error) {
        console.error("Error fetching task data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDownload = async () => {
    // const proxyUrl = "https://cors-anywhere.herokuapp.com/";
    const targetUrl = "https://testd5-img.azurewebsites.net/api/imgdownload";

    try {
      const response = await fetch(targetUrl, {
        method: "POST",
        body: JSON.stringify({
          api: taskData.api_secret,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      const base64String = data.base64_string;

      const link = document.createElement("a");
      link.href = `data:image/png;base64,${base64String}`;
      link.download = data.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Download failed", error);
    }
  };

  return (
    <main className="flex flex-col gap-8">
      <div className="flex justify-between pb-8 border-b-2 ">
        <h1 className="text-2xl font-bold">Reports</h1>
        <button
          className="flex items-center"
          onClick={handleDownload}
        >
          <Image
            src={downloadIcon}
            alt="Download"
            width={22}
            height={22}
          />
          <span className="font-bold">Download</span>
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <TimeFrameSelect />
        <PeopleSelect />
        {taskData.topics && (
          <TopicSelect
            topics={[
              ...taskData.topics.weakest.map((item: any) => item.name),
              ...taskData.topics.strongest.map((item: any) => item.name),
            ]}
          />
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Metrics */}
        <div className="w-full">
          {taskData.metrics ? (
            <MetricsInfo
              taskData={taskData.metrics}
              graphData={taskData.activity.monthly}
            />
          ) : (
            <MetricCard name="Metrics" />
          )}
        </div>

        {/* Activity */}
        <div className="p-4 bg-white rounded-20 flex flex-col gap-8 w-full shadow border border-custom h-[60vh] md:h-auto">
          <div className="pb-2 border-b flex justify-between">
            <h4 className="text-black-custom-70 font-medium">Activity</h4>
            {taskData.activity && (
              <select
                defaultValue="Month"
                className="bg-transparent font-semibold"
              >
                {taskData.activity.monthly.map(
                  (item: { month: string; value: number }, index: number) => (
                    <option
                      key={item.month + index}
                      value={item.month}
                    >
                      {item.month}
                    </option>
                  )
                )}
                <option
                  value="Month"
                  hidden
                >
                  Month
                </option>
              </select>
            )}
          </div>
          {taskData.activity && (
            <ActivityChart activityData={taskData.activity} />
          )}
        </div>
      </div>

      {/* Topics */}
      <div className="flex gap-8 w-full flex-col md:flex-row">
        <Card title="Weakest Topics">
          {taskData.topics && (
            <Topics
              topics={taskData.topics.weakest}
              danger={true}
            />
          )}
        </Card>
        <Card title="Strongest Topics ">
          {taskData.topics && (
            <Topics
              topics={taskData.topics.strongest}
              danger={false}
            />
          )}
        </Card>
      </div>

      {/* Leaderboards */}
      <div className="flex gap-8 w-full flex-col md:flex-row">
        <Card title="User Leaderboard">
          {taskData.user_leaderboard && (
            <UserLeaderboard users={taskData.user_leaderboard} />
          )}
        </Card>
        <Card title="Groups Leaderboard">
          {taskData.groups_leaderboard && (
            <GroupLeaderBoard groups={taskData.groups_leaderboard} />
          )}
        </Card>
      </div>
    </main>
  );
}
