import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AreaChart from "@/components/charts/AreaChart";
import BarChart from "@/components/charts/BarChart";
import PieChart from "@/components/charts/PieChart";
import { monthlyEmissions, waterUsageByFacility, wasteComposition, complianceStatus } from "@/lib/mock-data";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Emissions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,540 tCO2e</div>
            <p className="text-xs text-muted-foreground">-12% from last year</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Water Usage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">270K gal</div>
            <p className="text-xs text-muted-foreground">+5% this month</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Waste Diverted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <p className="text-xs text-muted-foreground">+2% from target</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Compliance Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">Above industry average</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Monthly Emissions Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <AreaChart data={monthlyEmissions} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Water Usage by Facility</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart data={waterUsageByFacility} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Waste Composition</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart data={wasteComposition} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Compliance Status</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart data={complianceStatus} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
