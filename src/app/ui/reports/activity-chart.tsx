import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import { activityInfo } from "../types/activityInfo";

export default function ActivityChart({
  activityData,
}: {
  activityData: activityInfo;
}) {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
    >
      <BarChart
        width={500}
        height={300}
        data={activityData.monthly}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
        barSize={10}
      >
        <XAxis
          dataKey="month"
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
        />
        <Bar
          dataKey="value"
          fill="url(#barGradient)"
          background={{ fill: "#F2F7FF", radius: [50, 50, 50, 50] as any }}
          radius={[50, 50, 50, 50]}
        />

        {/* Bar Gradient */}
        <defs>
          <linearGradient
            id="barGradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop
              offset="0%"
              stopColor="#1B59F8AA"
            />
            <stop
              offset="80%"
              stopColor="#1B59F8CC"
            />
          </linearGradient>
        </defs>
      </BarChart>
    </ResponsiveContainer>
  );
}
