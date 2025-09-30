import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Send } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

const discussions = [
  {
    id: 1,
    ticketId: "#TK-1234",
    subject: "Complex API Integration Issue",
    participants: ["Sarah W.", "John D.", "Mike J."],
    lastMessage: "I think we should escalate this to the backend team...",
    messageCount: 12,
    status: "in-progress",
  },
  {
    id: 2,
    ticketId: "#TK-1232",
    subject: "Payment Gateway Configuration",
    participants: ["Jane S.", "Robert B."],
    lastMessage: "The issue is with the webhook configuration",
    messageCount: 8,
    status: "assigned",
  },
  {
    id: 3,
    ticketId: "#TK-1229",
    subject: "Database Performance Optimization",
    participants: ["Sarah W.", "David W.", "Emily D."],
    lastMessage: "Added indexes, performance improved by 40%",
    messageCount: 15,
    status: "completed",
  },
];

const messages = [
  { sender: "Sarah W.", message: "This ticket requires expertise from multiple teams. Can someone from the backend team help?", time: "2 hours ago", avatar: "SW" },
  { sender: "John D.", message: "I'll take a look. This seems related to the authentication service changes we made last week.", time: "1 hour 45 min ago", avatar: "JD" },
  { sender: "Mike J.", message: "I reviewed the logs. The issue is with the token refresh mechanism. We need to update the client library.", time: "1 hour 30 min ago", avatar: "MJ" },
  { sender: "Sarah W.", message: "Good catch! Should we create a separate ticket for the client library update?", time: "1 hour ago", avatar: "SW" },
  { sender: "John D.", message: "Yes, I'll create it and link it to this ticket. In the meantime, we can provide a workaround.", time: "45 min ago", avatar: "JD" },
];

export default function Teamwork() {
  return (
    <div className="flex-1 overflow-hidden flex">
      <div className="w-96 border-r flex flex-col">
        <div className="p-4 border-b">
          <h2 className="text-lg font-semibold mb-3">Team Discussions</h2>
          <Input placeholder="Search discussions..." data-testid="input-search" />
        </div>

        <div className="flex-1 overflow-auto">
          {discussions.map((discussion) => (
            <div
              key={discussion.id}
              className="p-4 border-b hover-elevate cursor-pointer"
              data-testid={`discussion-${discussion.id}`}
            >
              <div className="flex items-start justify-between mb-2">
                <span className="font-mono text-xs font-medium text-primary">
                  {discussion.ticketId}
                </span>
                <StatusBadge status={discussion.status as any} />
              </div>
              <h4 className="font-medium text-sm mb-2">{discussion.subject}</h4>
              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                {discussion.lastMessage}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex -space-x-2">
                  {discussion.participants.map((participant, idx) => (
                    <Avatar key={idx} className="h-6 w-6 border-2 border-background">
                      <AvatarFallback className="text-xs">
                        {participant.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <MessageSquare className="h-3 w-3" />
                  <span>{discussion.messageCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b">
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm font-medium text-primary">#TK-1234</span>
            <h2 className="text-xl font-semibold">Complex API Integration Issue</h2>
            <StatusBadge status="in-progress" />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-muted-foreground">Participants:</span>
            <div className="flex -space-x-2">
              {["Sarah W.", "John D.", "Mike J."].map((participant, idx) => (
                <Avatar key={idx} className="h-7 w-7 border-2 border-background">
                  <AvatarFallback className="text-xs">
                    {participant.split(" ").map((n) => n[0]).join("")}
                  </AvatarFallback>
                </Avatar>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto p-4 space-y-4">
          {messages.map((message, index) => (
            <div key={index} className="flex gap-3">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">{message.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-medium text-sm">{message.sender}</span>
                  <span className="text-xs text-muted-foreground">{message.time}</span>
                </div>
                <Card className="p-3">
                  <p className="text-sm">{message.message}</p>
                </Card>
              </div>
            </div>
          ))}
        </div>

        <div className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              placeholder="Type your message... Use @mention to notify team members"
              data-testid="input-message"
            />
            <Button data-testid="button-send">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
