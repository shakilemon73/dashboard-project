import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/StatusBadge";
import { Search, Plus, Filter, Download } from "lucide-react";

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
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold" data-testid="text-page-title">All Tickets</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Comprehensive ticket details view with status updates and priority settings
            </p>
          </div>
          <Button data-testid="button-add-ticket">
            <Plus className="h-4 w-4 mr-2" />
            Create Ticket
          </Button>
        </div>

        <Card className="p-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search tickets by ID, subject, customer..."
                className="pl-9"
                data-testid="input-search"
              />
            </div>
            <Button variant="outline" data-testid="button-filter">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" data-testid="button-export">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
          </div>

          <div className="border rounded-md">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left text-sm font-medium p-3">Ticket ID</th>
                    <th className="text-left text-sm font-medium p-3">Subject</th>
                    <th className="text-left text-sm font-medium p-3">Customer</th>
                    <th className="text-left text-sm font-medium p-3">Company</th>
                    <th className="text-left text-sm font-medium p-3">Agent</th>
                    <th className="text-left text-sm font-medium p-3">Status</th>
                    <th className="text-left text-sm font-medium p-3">Priority</th>
                    <th className="text-left text-sm font-medium p-3">Created</th>
                    <th className="text-left text-sm font-medium p-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {tickets.map((ticket) => (
                    <tr key={ticket.id} className="border-t hover-elevate" data-testid={`row-ticket-${ticket.id}`}>
                      <td className="p-3">
                        <span className="font-mono text-sm text-primary font-medium">
                          {ticket.id}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="text-sm font-medium">{ticket.subject}</span>
                      </td>
                      <td className="p-3">
                        <span className="text-sm">{ticket.customer}</span>
                      </td>
                      <td className="p-3">
                        <span className="text-sm text-muted-foreground">{ticket.company}</span>
                      </td>
                      <td className="p-3">
                        <span className="text-sm">{ticket.agent}</span>
                      </td>
                      <td className="p-3">
                        <StatusBadge status={ticket.status as any} />
                      </td>
                      <td className="p-3">
                        <span className={`text-sm ${ticket.priority === 'High' ? 'text-chart-5 font-medium' : 'text-muted-foreground'}`}>
                          {ticket.priority}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="text-sm text-muted-foreground">{ticket.created}</span>
                      </td>
                      <td className="p-3">
                        <Button variant="ghost" size="sm" data-testid={`button-view-${ticket.id}`}>
                          View
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">
              Showing 8 of 1,328 tickets
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled data-testid="button-previous">
                Previous
              </Button>
              <Button variant="outline" size="sm" data-testid="button-next">
                Next
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
