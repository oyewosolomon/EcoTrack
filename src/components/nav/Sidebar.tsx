import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { BarChart3, Droplets, Trash2, FileCheck, LayoutDashboard, Leaf } from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: BarChart3, label: "Emissions", href: "/emissions" },
  { icon: Droplets, label: "Water Usage", href: "/water" },
  { icon: Trash2, label: "Waste Management", href: "/waste" },
  { icon: FileCheck, label: "Compliance", href: "/compliance" },
];

export default function Sidebar() {
  const [location] = useLocation();

  return (
    <div className="w-64 bg-sidebar border-r border-border flex flex-col">
      <div className="p-6">
        <a href="/" className="text-2xl flex items-center gap-2  font-bold text-sidebar-foreground">
        <Leaf className="h-6 w-6 text-primary" />
        EcoTrack</a>
        <p className="text-sm text-sidebar-foreground/60">Environmental Monitoring</p>
      </div>
      <nav className="flex-1 px-4">
        {navItems.map(({ icon: Icon, label, href }) => (
          <Link key={href} href={href}>
            <a
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md mb-1 text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors",
                location === href && "bg-sidebar-accent text-sidebar-foreground"
              )}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </a>
          </Link>
        ))}
      </nav>
    </div>
  );
}
