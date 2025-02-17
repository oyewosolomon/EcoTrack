import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PieChart from "@/components/charts/PieChart";
import BarChart from "@/components/charts/BarChart";
import { wasteComposition } from "@/lib/mock-data";

export default function WasteManagement() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Waste Management</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Total Waste</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">450 tons</div>
            <p className="text-xs text-muted-foreground">This quarter</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Recycling Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75%</div>
            <p className="text-xs text-muted-foreground">Above target</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Hazardous Waste</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">25%</div>
            <p className="text-xs text-muted-foreground">Of total waste</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
            <CardTitle>Monthly Waste Generation</CardTitle>
          </CardHeader>
          <CardContent>
            <BarChart data={wasteComposition} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
