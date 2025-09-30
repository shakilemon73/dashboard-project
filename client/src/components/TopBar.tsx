import { Search, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "./ThemeToggle";

export function TopBar() {
  return (
    <header 
      className="flex items-center justify-between gap-4 border-b p-4 transition-colors duration-200"
      role="banner"
      aria-label="Top navigation bar"
    >
      <div className="flex items-center gap-4 flex-1">
        <SidebarTrigger 
          data-testid="button-sidebar-toggle"
          aria-label="Toggle sidebar navigation" 
        />
        <div className="relative w-full max-w-md">
          <Search 
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none transition-colors duration-200" 
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="Search tickets, customers, or agents..."
            className="pl-9 h-11 transition-all duration-200 focus-visible:ring-2"
            data-testid="input-search"
            aria-label="Search tickets, customers, or agents"
            role="searchbox"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button 
          data-testid="button-add-ticket"
          className="min-h-11 transition-all duration-200"
          aria-label="Create new ticket"
        >
          <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
          <span>Add Ticket</span>
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
