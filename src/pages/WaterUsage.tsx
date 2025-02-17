import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import BarChart from "@/components/charts/BarChart";
import AreaChart from "@/components/charts/AreaChart";
import { waterUsageByFacility, waterTrends } from "@/lib/mock-data";

export default function WaterUsage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Water Usage Monitoring</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">270K gal</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Efficiency</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">Usage optimization</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Recycled</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45K gal</div>
            <p className="text-xs text-muted-foreground">Reused water</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Usage by Facility</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart data={waterUsageByFacility} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Trends</CardTitle>
          </CardHeader>
          <CardContent>
            <AreaChart data={waterTrends} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
