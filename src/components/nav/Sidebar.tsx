import { useState } from "react";
import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { BarChart3, Droplets, Trash2, FileCheck, LayoutDashboard, Menu, X, Leaf } from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
  { icon: BarChart3, label: "Emissions", href: "/emissions" },
  { icon: Droplets, label: "Water Usage", href: "/water" },
  { icon: Trash2, label: "Waste Management", href: "/waste" },
  { icon: FileCheck, label: "Compliance", href: "/compliance" },
];

export default function Sidebar() {
  const [location] = useLocation();
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileSidebarOpen(!isMobileSidebarOpen)}
        className="fixed md:hidden top-4 left-4 z-50 p-2 rounded-lg bg-sidebar-accent text-sidebar-foreground"
      >
        {isMobileSidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed md:relative w-64 bg-sidebar border-r border-border flex flex-col transition-transform duration-300 ease-in-out",
          isMobileSidebarOpen ? "translate-x-0 bg-white" : "-translate-x-full md:translate-x-0"
        )}
      >
        {/* Branding */}
        <div className="p-6">
          <a href="/" className="text-2xl flex items-center gap-2 font-bold text-sidebar-foreground">
          <Leaf className="h-6 w-6 text-primary" />
            EcoTrack
          </a>
          <p className="text-sm text-sidebar-foreground/60">Environmental Monitoring</p>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 px-4 bg-white">
          {navItems.map(({ icon: Icon, label, href }) => (
            <Link key={href} href={href}>
              <a
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md mb-1 text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent transition-colors",
                  location === href && "bg-sidebar-accent text-sidebar-foreground"
                )}
              >
                <Icon className="h-5 w-5" />
                <span className="">{label}</span>
              </a>
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay for Mobile (Click to Close Sidebar) */}
      {isMobileSidebarOpen && (
        <div
          onClick={() => setIsMobileSidebarOpen(false)}
          className="fixed inset-0 bg-black/10 md:hidden z-50"
        />
      )}
    </>
  );
}