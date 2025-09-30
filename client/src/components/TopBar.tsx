import { Search, Plus, Bell, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ThemeToggle } from "./ThemeToggle";
import { Badge } from "@/components/ui/badge";

export function TopBar() {
  return (
    <header 
      className="flex items-center justify-between gap-4 border-b p-4 transition-colors duration-200 sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      role="banner"
      aria-label="Top navigation bar"
    >
      <div className="flex items-center gap-4 flex-1">
        <SidebarTrigger 
          data-testid="button-sidebar-toggle"
          aria-label="Toggle sidebar navigation" 
          className="transition-all duration-200"
        />
        <div className="relative w-full max-w-md">
          <Search 
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none transition-colors duration-200" 
            aria-hidden="true"
          />
          <Input
            type="search"
            placeholder="Search tickets, customers, agents..."
            className="pl-9 h-11 transition-all duration-200 focus-visible:ring-2"
            data-testid="input-search"
            aria-label="Search tickets, customers, or agents"
            role="searchbox"
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon"
          data-testid="button-help"
          aria-label="Help and documentation"
          className="relative transition-all duration-200"
          title="Help and documentation"
        >
          <HelpCircle className="h-5 w-5" aria-hidden="true" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon"
          data-testid="button-notifications"
          aria-label="Notifications - 2 unread"
          className="relative transition-all duration-200"
          title="View notifications"
        >
          <Bell className="h-5 w-5" aria-hidden="true" />
          <Badge 
            variant="destructive" 
            className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs font-semibold"
            aria-label="2 unread notifications"
          >
            2
          </Badge>
        </Button>
        <Button 
          data-testid="button-add-ticket"
          className="min-h-11 transition-all duration-200 shadow-sm"
          aria-label="Create new ticket"
          title="Create a new support ticket"
        >
          <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
          <span>Add Ticket</span>
        </Button>
        <ThemeToggle />
      </div>
    </header>
  );
}
