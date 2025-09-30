import { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/StatusBadge";
import { Search, Filter, SortDesc, X, Send, Paperclip, FileText } from "lucide-react";
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
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [showMobileDetail, setShowMobileDetail] = useState(false);
  const [replyText, setReplyText] = useState("");
  const ticketListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }

      switch (e.key) {
        case "ArrowDown":
          e.preventDefault();
          if (selectedIndex < tickets.length - 1) {
            const newIndex = selectedIndex + 1;
            setSelectedIndex(newIndex);
            setSelectedTicket(tickets[newIndex]);
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (selectedIndex > 0) {
            const newIndex = selectedIndex - 1;
            setSelectedIndex(newIndex);
            setSelectedTicket(tickets[newIndex]);
          }
          break;
        case "Enter":
          e.preventDefault();
          setShowMobileDetail(true);
          break;
        case "Escape":
          e.preventDefault();
          setShowMobileDetail(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex]);

  const handleTicketSelect = (ticket: typeof tickets[0], index: number) => {
    setSelectedTicket(ticket);
    setSelectedIndex(index);
    setShowMobileDetail(true);
  };

  return (
    <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
      <div 
        className={`w-full md:w-96 border-r flex flex-col ${showMobileDetail ? 'hidden md:flex' : 'flex'}`}
        role="navigation"
        aria-label="Ticket list"
      >
        <div className="p-4 border-b space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
            <Input
              placeholder="Search tickets..."
              className="pl-9"
              data-testid="input-search-tickets"
              aria-label="Search tickets"
            />
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 min-h-11" 
              data-testid="button-filter"
              aria-label="Filter tickets"
            >
              <Filter className="h-4 w-4 mr-2" aria-hidden="true" />
              Filter
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 min-h-11" 
              data-testid="button-sort"
              aria-label="Sort tickets"
            >
              <SortDesc className="h-4 w-4 mr-2" aria-hidden="true" />
              Sort
            </Button>
          </div>
        </div>

        <div 
          className="flex-1 overflow-auto"
          ref={ticketListRef}
          role="list"
          aria-label="Support tickets"
        >
          {tickets.map((ticket, index) => (
            <div
              key={ticket.id}
              role="listitem"
              tabIndex={0}
              className={`
                p-4 border-b cursor-pointer transition-all duration-200
                hover-elevate active-elevate-2
                focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset
                ${selectedTicket.id === ticket.id ? "bg-accent" : ""}
              `}
              onClick={() => handleTicketSelect(ticket, index)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleTicketSelect(ticket, index);
                }
              }}
              data-testid={`ticket-item-${ticket.id}`}
              aria-label={`${ticket.subject} from ${ticket.customer}, ${ticket.unread ? 'unread, ' : ''}${ticket.priority} priority, ${ticket.status}`}
              aria-current={selectedTicket.id === ticket.id ? "true" : "false"}
            >
              <div className="flex items-start gap-3">
                {ticket.unread && (
                  <div 
                    className="h-2 w-2 rounded-full bg-primary mt-2 flex-shrink-0" 
                    aria-label="Unread"
                    role="status"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <span className="font-mono text-xs font-medium text-primary">
                      {ticket.id}
                    </span>
                    <span className="text-xs text-muted-foreground" aria-label={`Created ${ticket.time}`}>
                      {ticket.time}
                    </span>
                  </div>
                  <h4 className="font-medium text-sm truncate mb-1">{ticket.subject}</h4>
                  <p className="text-xs text-muted-foreground mb-2">{ticket.customer}</p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <StatusBadge status={ticket.status as any} />
                    <span 
                      className={`text-xs font-medium ${ticket.priority === 'high' ? 'text-chart-5' : 'text-muted-foreground'}`}
                      aria-label={`Priority: ${ticket.priority}`}
                    >
                      {ticket.priority}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div 
        className={`flex-1 flex flex-col ${!showMobileDetail ? 'hidden md:flex' : 'flex'}`}
        role="main"
        aria-label="Ticket details"
      >
        <div className="p-4 border-b">
          <div className="flex items-start justify-between gap-4 mb-4 flex-wrap">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setShowMobileDetail(false)}
                  aria-label="Back to ticket list"
                  data-testid="button-back"
                >
                  <X className="h-4 w-4" />
                </Button>
                <h2 className="text-xl font-semibold">{selectedTicket.subject}</h2>
                <StatusBadge status={selectedTicket.status as any} />
              </div>
              <p className="text-sm text-muted-foreground">
                {selectedTicket.id} • Created by {selectedTicket.customer}
              </p>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Select defaultValue={selectedTicket.status} key={selectedTicket.id}>
                <SelectTrigger 
                  className="w-40 min-h-11" 
                  data-testid="select-status"
                  aria-label="Update ticket status"
                >
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
                <SelectTrigger 
                  className="w-40 min-h-11" 
                  data-testid="select-assign"
                  aria-label="Assign to agent"
                >
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

        <div 
          className="flex-1 overflow-auto p-4 space-y-4"
          role="region"
          aria-label="Message thread"
        >
          {[
            { sender: "John Doe", role: "Customer", message: "I'm having trouble logging into my account. It says my password is incorrect but I'm sure it's right.", time: "2 hours ago" },
            { sender: "Agent Sarah", role: "Support Agent", message: "Hi John, I understand the frustration. Let me help you with that. Have you tried resetting your password using the 'Forgot Password' link?", time: "1 hour 45 min ago" },
            { sender: "John Doe", role: "Customer", message: "Yes, but I'm not receiving the reset email.", time: "1 hour 30 min ago" },
          ].map((message, index) => (
            <div 
              key={index} 
              className="flex gap-3 animate-in fade-in slide-in-from-bottom-2 duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
              role="article"
              aria-label={`Message from ${message.sender}`}
            >
              <Avatar className="h-8 w-8 flex-shrink-0">
                <AvatarFallback className="text-xs">
                  {message.sender.split(" ").map((n) => n[0]).join("")}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                  <span className="font-medium text-sm">{message.sender}</span>
                  <span className="text-xs text-muted-foreground">{message.role}</span>
                  <span className="text-xs text-muted-foreground">• {message.time}</span>
                </div>
                <Card className="p-3 hover-elevate transition-all duration-200">
                  <p className="text-sm leading-relaxed">{message.message}</p>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div 
          className="p-4 border-t bg-background"
          role="form"
          aria-label="Reply to ticket"
        >
          <Textarea
            placeholder="Type your reply..."
            className="mb-3 min-h-24 transition-all duration-200 focus:min-h-32"
            data-testid="textarea-reply"
            aria-label="Reply message"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
          <div className="flex justify-between items-center gap-2 flex-wrap">
            <div className="flex gap-2 flex-wrap">
              <Button 
                variant="outline" 
                size="sm" 
                className="min-h-11"
                data-testid="button-attach"
                aria-label="Attach files"
              >
                <Paperclip className="h-4 w-4 mr-2" aria-hidden="true" />
                Attach Files
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="min-h-11"
                data-testid="button-canned"
                aria-label="Insert canned response"
              >
                <FileText className="h-4 w-4 mr-2" aria-hidden="true" />
                Canned Response
              </Button>
            </div>
            <Button 
              data-testid="button-send-reply"
              className="min-h-11"
              disabled={!replyText.trim()}
              aria-label="Send reply"
            >
              <Send className="h-4 w-4 mr-2" aria-hidden="true" />
              Send Reply
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
