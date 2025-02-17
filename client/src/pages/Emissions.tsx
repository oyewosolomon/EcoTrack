import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AreaChart from "@/components/charts/AreaChart";
import PieChart from "@/components/charts/PieChart";
import { monthlyEmissions, emissionsByType } from "@/lib/mock-data";

export default function Emissions() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Emissions Tracking</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Current Year</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,540 tCO2e</div>
            <p className="text-xs text-muted-foreground">Total emissions</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Target</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,200 tCO2e</div>
            <p className="text-xs text-muted-foreground">Year-end goal</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Reduction</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">-15%</div>
            <p className="text-xs text-muted-foreground">Year over year</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Emissions Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <AreaChart data={monthlyEmissions} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Emissions by Type</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart data={emissionsByType} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
