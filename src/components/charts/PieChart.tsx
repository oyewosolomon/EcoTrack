import { PieChart as RechartsPie, Pie, ResponsiveContainer, Cell, Tooltip } from 'recharts';

interface PieChartProps {
  data: Array<{ name: string; value: number }>;
  colors?: string[];
}

export default function PieChart({ 
  data,
  colors = ["hsl(var(--primary))", "hsl(var(--secondary))", "hsl(var(--accent))"]
}: PieChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <RechartsPie>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
        >
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Tooltip />
      </RechartsPie>
    </ResponsiveContainer>
  );
}
