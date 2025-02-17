import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import Landing from "@/pages/Landing";
import Dashboard from "@/pages/Dashboard";
import Emissions from "@/pages/Emissions";
import WaterUsage from "@/pages/WaterUsage";
import WasteManagement from "@/pages/WasteManagement";
import Compliance from "@/pages/Compliance";
import NotFound from "@/pages/not-found";
import Sidebar from "@/components/nav/Sidebar";
import TopNav from "@/components/nav/TopNav";

function Router() {
  const [location] = useLocation();
  const showNav = location !== "/";

  return (
    <div className="min-h-screen bg-background">
      {showNav ? (
        <div className="flex h-screen">
          <Sidebar />
          <div className="flex-1 flex flex-col overflow-hidden">
            <TopNav />
            <main className="flex-1 overflow-y-auto p-6">
              <Switch>
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/emissions" component={Emissions} />
                <Route path="/water" component={WaterUsage} />
                <Route path="/waste" component={WasteManagement} />
                <Route path="/compliance" component={Compliance} />
                <Route component={NotFound} />
              </Switch>
            </main>
          </div>
        </div>
      ) : (
        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
      )}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;