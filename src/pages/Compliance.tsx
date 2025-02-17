import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PieChart from "@/components/charts/PieChart";
import { complianceStatus } from "@/lib/mock-data";

export default function Compliance() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Regulatory Compliance</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Overall Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">94%</div>
            <p className="text-xs text-muted-foreground">Compliance rate</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Reports Due</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5</div>
            <p className="text-xs text-muted-foreground">Next 30 days</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-sm font-medium">Active Permits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Across facilities</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Compliance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <PieChart data={complianceStatus} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Requirements</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Annual Environmental Report</h3>
                <p className="text-sm text-muted-foreground">Due in 15 days</p>
              </div>
              <div className="text-yellow-500">Pending</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Emissions Monitoring Report</h3>
                <p className="text-sm text-muted-foreground">Due in 30 days</p>
              </div>
              <div className="text-yellow-500">Pending</div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Waste Management Plan Update</h3>
                <p className="text-sm text-muted-foreground">Due in 45 days</p>
              </div>
              <div className="text-green-500">In Progress</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
