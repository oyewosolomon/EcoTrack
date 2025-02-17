import { Bar, BarChart as RechartsBar, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

interface BarChartProps {
  data: Array<{ name: string; value: number }>;
  fill?: string;
}

export default function BarChart({ data, fill = "hsl(var(--primary))" }: BarChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <RechartsBar data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="value" fill={fill} />
      </RechartsBar>
    </ResponsiveContainer>
  );
}
