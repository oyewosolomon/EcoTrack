import { Area, AreaChart as RechartsArea, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

interface AreaChartProps {
  data: Array<{ name: string; value: number }>;
  stroke?: string;
  fill?: string;
}

export default function AreaChart({ data, stroke = "hsl(var(--primary))", fill = "hsl(var(--primary))" }: AreaChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <RechartsArea data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
        <defs>
          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={fill} stopOpacity={0.1}/>
            <stop offset="95%" stopColor={fill} stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="value"
          stroke={stroke}
          fillOpacity={1}
          fill="url(#colorValue)"
        />
      </RechartsArea>
    </ResponsiveContainer>
  );
}
