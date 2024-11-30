import { AreaChart, Area, ResponsiveContainer } from "recharts";

export default function LineChart({ data }: { data: any }) {
  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      minHeight={30}
    >
      <AreaChart
        width={50}
        height={30}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <Area
          type="monotone"
          dataKey="value"
          stroke="#1b59f8"
          strokeWidth={2}
          fill="#e9e9ff"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
