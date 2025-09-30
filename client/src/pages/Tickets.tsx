import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/StatusBadge";
import { Search, Plus, Filter, Download, AlertCircle, ChevronDown, X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Badge } from "@/components/ui/badge";

const tickets = [
  { id: "#TK-1234", subject: "Unable to login to account", customer: "John Doe", company: "Acme Corp", agent: "Sarah Williams", status: "new", priority: "High", created: "2024-09-30 10:30" },
  { id: "#TK-1233", subject: "Feature request: Dark mode", customer: "Jane Smith", company: "Tech Solutions", agent: "Mike Johnson", status: "in-progress", priority: "Normal", created: "2024-09-30 09:15" },
  { id: "#TK-1232", subject: "Payment processing error", customer: "Mike Johnson", company: "Finance Inc", agent: "John Doe", status: "waiting", priority: "High", created: "2024-09-30 08:45" },
  { id: "#TK-1231", subject: "How to export data?", customer: "Sarah Williams", company: "Data Corp", agent: "Jane Smith", status: "assigned", priority: "Low", created: "2024-09-29 16:20" },
  { id: "#TK-1230", subject: "API integration help needed", customer: "Robert Brown", company: "Dev Studio", agent: "Sarah Williams", status: "completed", priority: "Normal", created: "2024-09-29 14:10" },
  { id: "#TK-1229", subject: "Mobile app crashing", customer: "Emily Davis", company: "Mobile Inc", agent: "Mike Johnson", status: "in-progress", priority: "High", created: "2024-09-29 11:30" },
  { id: "#TK-1228", subject: "Question about pricing", customer: "David Wilson", company: "Startup LLC", agent: "John Doe", status: "reviewed", priority: "Low", created: "2024-09-29 09:00" },
  { id: "#TK-1227", subject: "Security concern", customer: "Lisa Anderson", company: "Security Co", agent: "Sarah Williams", status: "on-hold", priority: "High", created: "2024-09-28 15:45" },
];

export default function Tickets() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredTickets, setFilteredTickets] = useState(tickets);
  const [isFiltering, setIsFiltering] = useState(false);
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [ticketToDelete, setTicketToDelete] = useState<string | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchQuery.trim().length === 0) {
      setFilteredTickets(tickets);
      setIsFiltering(false);
      return;
    }

    setIsFiltering(true);
    const timer = setTimeout(() => {
      const query = searchQuery.toLowerCase();
      const filtered = tickets.filter(
        (ticket) =>
          ticket.id.toLowerCase().includes(query) ||
          ticket.subject.toLowerCase().includes(query) ||
          ticket.customer.toLowerCase().includes(query) ||
          ticket.company.toLowerCase().includes(query) ||
          ticket.agent.toLowerCase().includes(query)
      );
      setFilteredTickets(filtered);
      setIsFiltering(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    searchInputRef.current?.focus();
  };

  const handleKeyboardNavigation = (e: React.KeyboardEvent, ticketId: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setSelectedRow(ticketId);
    }
  };

  const handleDeleteClick = (ticketId: string) => {
    setTicketToDelete(ticketId);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    setDeleteDialogOpen(false);
    setTicketToDelete(null);
  };

  const getPriorityStyles = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-chart-5 font-semibold";
      case "Normal":
        return "text-chart-3 font-medium";
      case "Low":
        return "text-muted-foreground font-normal";
      default:
        return "text-muted-foreground";
    }
  };

  const getPriorityIcon = (priority: string) => {
    if (priority === "High") {
      return <AlertCircle className="h-3.5 w-3.5 mr-1.5" />;
    }
    return null;
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight" data-testid="text-page-title">
              All Tickets
            </h1>
            <p className="text-sm text-muted-foreground">
              Comprehensive ticket details view with status updates and priority settings
            </p>
          </div>
          <Button 
            className="min-h-11 self-start sm:self-auto" 
            data-testid="button-add-ticket"
            aria-label="Create new ticket"
          >
            <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
            Create Ticket
          </Button>
        </div>

        <Card className="p-4 md:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
            <div className="relative flex-1">
              <Search 
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" 
                aria-hidden="true"
              />
              <Input
                ref={searchInputRef}
                placeholder="Search tickets by ID, subject, customer..."
                className="pl-9 pr-9 min-h-11"
                value={searchQuery}
                onChange={handleSearchChange}
                data-testid="input-search"
                aria-label="Search tickets"
                aria-describedby="search-description"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8"
                  onClick={handleClearSearch}
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
              <span id="search-description" className="sr-only">
                Search across ticket ID, subject, customer, company, and agent fields
              </span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button 
                variant="outline" 
                className="min-h-11"
                data-testid="button-filter"
                aria-label="Open filter options"
              >
                <Filter className="h-4 w-4 mr-2" aria-hidden="true" />
                Filter
                <ChevronDown className="h-4 w-4 ml-2" aria-hidden="true" />
              </Button>
              <Button 
                variant="outline" 
                className="min-h-11"
                data-testid="button-export"
                aria-label="Export tickets to file"
              >
                <Download className="h-4 w-4 mr-2" aria-hidden="true" />
                Export
              </Button>
            </div>
          </div>

          {isFiltering && (
            <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground animate-pulse">
              <div className="h-1 w-full bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-primary/50 animate-pulse w-3/4 transition-all duration-300" />
              </div>
            </div>
          )}

          {filteredTickets.length === 0 ? (
            <div 
              className="flex flex-col items-center justify-center py-16 px-4"
              role="status"
              aria-live="polite"
            >
              <AlertCircle className="h-12 w-12 text-muted-foreground/50 mb-4" />
              <h3 className="text-lg font-medium mb-2">No tickets found</h3>
              <p className="text-sm text-muted-foreground text-center max-w-md mb-4">
                {searchQuery 
                  ? `No tickets match your search "${searchQuery}". Try different keywords or clear the search.`
                  : "There are no tickets to display at the moment."}
              </p>
              {searchQuery && (
                <Button 
                  variant="outline" 
                  onClick={handleClearSearch}
                  className="min-h-11"
                >
                  Clear Search
                </Button>
              )}
            </div>
          ) : (
            <>
              <div className="border rounded-md overflow-hidden">
                <div className="overflow-x-auto">
                  <table 
                    className="w-full"
                    role="table"
                    aria-label="Support tickets table"
                  >
                    <thead className="bg-muted/50 sticky top-0 z-10">
                      <tr role="row">
                        <th 
                          className="text-left text-sm font-semibold p-4 whitespace-nowrap"
                          scope="col"
                          aria-label="Ticket ID"
                        >
                          Ticket ID
                        </th>
                        <th 
                          className="text-left text-sm font-semibold p-4 min-w-[200px]"
                          scope="col"
                          aria-label="Subject"
                        >
                          Subject
                        </th>
                        <th 
                          className="text-left text-sm font-semibold p-4 whitespace-nowrap"
                          scope="col"
                          aria-label="Customer"
                        >
                          Customer
                        </th>
                        <th 
                          className="text-left text-sm font-semibold p-4 whitespace-nowrap"
                          scope="col"
                          aria-label="Company"
                        >
                          Company
                        </th>
                        <th 
                          className="text-left text-sm font-semibold p-4 whitespace-nowrap"
                          scope="col"
                          aria-label="Agent"
                        >
                          Agent
                        </th>
                        <th 
                          className="text-left text-sm font-semibold p-4 whitespace-nowrap"
                          scope="col"
                          aria-label="Status"
                        >
                          Status
                        </th>
                        <th 
                          className="text-left text-sm font-semibold p-4 whitespace-nowrap"
                          scope="col"
                          aria-label="Priority"
                        >
                          Priority
                        </th>
                        <th 
                          className="text-left text-sm font-semibold p-4 whitespace-nowrap"
                          scope="col"
                          aria-label="Created date"
                        >
                          Created
                        </th>
                        <th 
                          className="text-left text-sm font-semibold p-4 whitespace-nowrap"
                          scope="col"
                          aria-label="Actions"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody role="rowgroup">
                      {filteredTickets.map((ticket, index) => (
                        <tr 
                          key={ticket.id} 
                          className="border-t hover-elevate transition-colors duration-150 cursor-pointer focus-within:ring-2 focus-within:ring-primary/20"
                          data-testid={`row-ticket-${ticket.id}`}
                          role="row"
                          tabIndex={0}
                          onKeyDown={(e) => handleKeyboardNavigation(e, ticket.id)}
                          aria-label={`Ticket ${ticket.id}: ${ticket.subject}`}
                          aria-rowindex={index + 2}
                        >
                          <td className="p-4" role="cell">
                            <span className="font-mono text-sm text-primary font-medium">
                              {ticket.id}
                            </span>
                          </td>
                          <td className="p-4" role="cell">
                            <span className="text-sm font-medium line-clamp-2">
                              {ticket.subject}
                            </span>
                          </td>
                          <td className="p-4" role="cell">
                            <span className="text-sm">{ticket.customer}</span>
                          </td>
                          <td className="p-4" role="cell">
                            <span className="text-sm text-muted-foreground">
                              {ticket.company}
                            </span>
                          </td>
                          <td className="p-4" role="cell">
                            <span className="text-sm">{ticket.agent}</span>
                          </td>
                          <td className="p-4" role="cell">
                            <StatusBadge status={ticket.status as any} />
                          </td>
                          <td className="p-4" role="cell">
                            <div className={`flex items-center text-sm ${getPriorityStyles(ticket.priority)}`}>
                              {getPriorityIcon(ticket.priority)}
                              <span>{ticket.priority}</span>
                            </div>
                          </td>
                          <td className="p-4" role="cell">
                            <span className="text-sm text-muted-foreground whitespace-nowrap">
                              {ticket.created}
                            </span>
                          </td>
                          <td className="p-4" role="cell">
                            <div className="flex gap-1">
                              <Button 
                                variant="ghost" 
                                size="sm"
                                className="min-h-9"
                                data-testid={`button-view-${ticket.id}`}
                                aria-label={`View ticket ${ticket.id}`}
                              >
                                View
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
                <p className="text-sm text-muted-foreground" aria-live="polite">
                  Showing {filteredTickets.length} of 1,328 tickets
                  {searchQuery && ` (filtered by "${searchQuery}")`}
                </p>
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    disabled 
                    className="min-h-11"
                    data-testid="button-previous"
                    aria-label="Go to previous page"
                  >
                    Previous
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="min-h-11"
                    data-testid="button-next"
                    aria-label="Go to next page"
                  >
                    Next
                  </Button>
                </div>
              </div>
            </>
          )}
        </Card>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the ticket
              {ticketToDelete && ` ${ticketToDelete}`} from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="min-h-11">Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={confirmDelete}
              className="min-h-11 bg-chart-5 hover:bg-chart-5/90"
            >
              Delete Ticket
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
