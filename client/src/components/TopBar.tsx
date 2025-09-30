import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "./ThemeToggle";

export function TopBar() {
  return (
    <header className="flex items-center justify-between gap-4 border-b p-4">
      <div className="flex items-center gap-4 flex-1">
        <SidebarTrigger data-testid="button-sidebar-toggle" />
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search tickets, customers, or agents..."
            className="pl-9"
            data-testid="input-search"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button data-testid="button-add-ticket">
          <Plus className="h-4 w-4 mr-2" />
          Add Ticket
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
