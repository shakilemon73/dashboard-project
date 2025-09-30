import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge";
import { Search, Filter, SortDesc } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const tickets = [
  { id: "#TK-1234", subject: "Unable to login to account", customer: "John Doe", status: "new", priority: "high", time: "2 min ago", unread: true },
  { id: "#TK-1233", subject: "Feature request: Dark mode", customer: "Jane Smith", status: "in-progress", priority: "normal", time: "15 min ago", unread: false },
  { id: "#TK-1232", subject: "Payment processing error", customer: "Mike Johnson", status: "waiting", priority: "high", time: "1 hour ago", unread: true },
  { id: "#TK-1231", subject: "How to export data?", customer: "Sarah Williams", status: "assigned", priority: "low", time: "2 hours ago", unread: false },
  { id: "#TK-1230", subject: "API integration help needed", customer: "Robert Brown", status: "in-progress", priority: "normal", time: "3 hours ago", unread: false },
];

export default function Inbox() {
  const [selectedTicket, setSelectedTicket] = useState(tickets[0]);

  return (
    <div className="flex-1 overflow-hidden flex">
      <div className="w-96 border-r flex flex-col">
        <div className="p-4 border-b space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search tickets..."
              className="pl-9"
              data-testid="input-search-tickets"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1" data-testid="button-filter">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm" className="flex-1" data-testid="button-sort">
              <SortDesc className="h-4 w-4 mr-2" />
              Sort
            </Button>
          </div>
        </div>

        <div className="flex-1 overflow-auto">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className={`p-4 border-b cursor-pointer hover-elevate ${
                selectedTicket.id === ticket.id ? "bg-accent" : ""
              }`}
              onClick={() => setSelectedTicket(ticket)}
              data-testid={`ticket-item-${ticket.id}`}
            >
              <div className="flex items-start gap-3">
                {ticket.unread && <div className="h-2 w-2 rounded-full bg-primary mt-2" />}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-xs font-medium text-primary">
                      {ticket.id}
                    </span>
                    <span className="text-xs text-muted-foreground">{ticket.time}</span>
                  </div>
                  <h4 className="font-medium text-sm truncate">{ticket.subject}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{ticket.customer}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <StatusBadge status={ticket.status as any} />
                    <span className={`text-xs ${ticket.priority === 'high' ? 'text-chart-5' : 'text-muted-foreground'}`}>
                      {ticket.priority}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-xl font-semibold">{selectedTicket.subject}</h2>
                <StatusBadge status={selectedTicket.status as any} />
              </div>
              <p className="text-sm text-muted-foreground">
                {selectedTicket.id} • Created by {selectedTicket.customer}
              </p>
            </div>
            <div className="flex gap-2">
              <Select defaultValue={selectedTicket.status}>
                <SelectTrigger className="w-40" data-testid="select-status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="assigned">Assigned</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="waiting">Waiting</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="john">
                <SelectTrigger className="w-40" data-testid="select-assign">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="john">John Doe</SelectItem>
                  <SelectItem value="jane">Jane Smith</SelectItem>
                  <SelectItem value="mike">Mike Johnson</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4 space-y-4">
          {[
            { sender: "John Doe", role: "Customer", message: "I'm having trouble logging into my account. It says my password is incorrect but I'm sure it's right.", time: "2 hours ago" },
            { sender: "Agent Sarah", role: "Support Agent", message: "Hi John, I understand the frustration. Let me help you with that. Have you tried resetting your password using the 'Forgot Password' link?", time: "1 hour 45 min ago" },
            { sender: "John Doe", role: "Customer", message: "Yes, but I'm not receiving the reset email.", time: "1 hour 30 min ago" },
          ].map((message, index) => (
            <div key={index} className="flex gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">
                  {message.sender.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-medium text-sm">{message.sender}</span>
                  <span className="text-xs text-muted-foreground">{message.role}</span>
                  <span className="text-xs text-muted-foreground">• {message.time}</span>
                </div>
                <Card className="p-3">
                  <p className="text-sm">{message.message}</p>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <Textarea
            placeholder="Type your reply..."
            className="mb-3 min-h-24"
            data-testid="textarea-reply"
          />
          <div className="flex justify-between">
            <div className="flex gap-2">
              <Button variant="outline" size="sm" data-testid="button-attach">Attach Files</Button>
              <Button variant="outline" size="sm" data-testid="button-canned">Canned Response</Button>
            </div>
            <Button data-testid="button-send-reply">Send Reply</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
