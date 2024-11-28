"use client";

import Image from "next/image";
import downloadIcon from "/public/icons/download.svg";
import TimeFrameSelect from "@/app/ui/reports/timeframe-select";
import { useEffect, useState } from "react";
import MetricsInfo from "@/app/ui/reports/metrics-info";

export default function page() {
  const [taskData, setTaskData] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/task-data.json");
        if (!response.ok) {
          throw new Error(`${response.status} Fetching error`);
        }
        const data = await response.json();
        console.log(data); ///////////////////////REMOVE

        setTaskData(data);
      } catch (error) {
        console.error("Error fetching task data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="flex flex-col gap-8">
      <div className="flex justify-between pb-8 border-b-2 ">
        <h1 className="text-2xl font-bold">Reports</h1>
        <button className="flex items-center">
          <Image
            src={downloadIcon}
            alt="Download"
            width={22}
            height={22}
          />
          <span className="font-bold">Download</span>
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-4">
        {/* <TimeFrameSelect
          name="Timeframe"
          options={["Last 7 Days", "This Month", "This Year", "Custom"]}
        />
        <TimeFrameSelect name="People" />
        <TimeFrameSelect name="Topic" /> */}
      </div>
      <div className="flex flex-col lg:flex-row gap-8 h-screen">
        <div className="w-full">
          {taskData.metrics && (
            <MetricsInfo
              current_users={taskData.metrics.active_users.current}
              total_users={taskData.metrics.active_users.total}
              questions_answered={
                taskData.metrics.average_session_length_seconds
              }
              average_session_length_seconds={
                taskData.metrics.starting_knowledge_percentage
              }
              starting_knowledge_percentage={
                taskData.metrics.current_knowledge_percentage
              }
              current_knowledge_percentage={
                taskData.metrics.current_knowledge_percentage -
                taskData.metrics.starting_knowledge_percentage
              }
            />
          )}
        </div>
        <div className="w-full">chart</div>
      </div>
    </main>
  );
}
