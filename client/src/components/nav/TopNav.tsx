import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Bell } from "lucide-react";

export default function TopNav() {
  return (
    <header className="h-16 border-b border-border bg-background flex items-center px-6">
      <div className="ml-auto flex items-center gap-4">
        <button className="p-2 hover:bg-accent rounded-full">
          <Bell className="h-5 w-5" />
        </button>
        <Avatar>
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}
