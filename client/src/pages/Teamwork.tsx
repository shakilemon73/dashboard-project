import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MessageSquare, Send, Users, Activity, CheckCircle2 } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const discussions = [
  {
    id: 1,
    ticketId: "#TK-1234",
    subject: "Complex API Integration Issue",
    participants: [
      { name: "Sarah W.", initials: "SW", role: "Backend Dev", isOnline: true },
      { name: "John D.", initials: "JD", role: "Senior Dev", isOnline: true },
      { name: "Mike J.", initials: "MJ", role: "DevOps", isOnline: false },
    ],
    lastMessage: "I think we should escalate this to the backend team...",
    messageCount: 12,
    status: "in-progress",
    activeParticipants: 2,
  },
  {
    id: 2,
    ticketId: "#TK-1232",
    subject: "Payment Gateway Configuration",
    participants: [
      { name: "Jane S.", initials: "JS", role: "Support Lead", isOnline: true },
      { name: "Robert B.", initials: "RB", role: "Finance", isOnline: true },
    ],
    lastMessage: "The issue is with the webhook configuration",
    messageCount: 8,
    status: "assigned",
    activeParticipants: 2,
  },
  {
    id: 3,
    ticketId: "#TK-1229",
    subject: "Database Performance Optimization",
    participants: [
      { name: "Sarah W.", initials: "SW", role: "Backend Dev", isOnline: true },
      { name: "David W.", initials: "DW", role: "DBA", isOnline: false },
      { name: "Emily D.", initials: "ED", role: "Support", isOnline: true },
    ],
    lastMessage: "Added indexes, performance improved by 40%",
    messageCount: 15,
    status: "completed",
    activeParticipants: 1,
  },
];

const messages = [
  { sender: "Sarah W.", initials: "SW", role: "Backend Dev", message: "This ticket requires expertise from multiple teams. Can someone from the backend team help?", time: "2 hours ago", isTyping: false },
  { sender: "John D.", initials: "JD", role: "Senior Dev", message: "I'll take a look. This seems related to the authentication service changes we made last week.", time: "1 hour 45 min ago", isTyping: false },
  { sender: "Mike J.", initials: "MJ", role: "DevOps", message: "I reviewed the logs. The issue is with the token refresh mechanism. We need to update the client library.", time: "1 hour 30 min ago", isTyping: false },
  { sender: "Sarah W.", initials: "SW", role: "Backend Dev", message: "Good catch! Should we create a separate ticket for the client library update?", time: "1 hour ago", isTyping: false },
  { sender: "John D.", initials: "JD", role: "Senior Dev", message: "Yes, I'll create it and link it to this ticket. In the meantime, we can provide a workaround.", time: "45 min ago", isTyping: false },
];

export default function Teamwork() {
  return (
    <div className="flex-1 overflow-hidden flex flex-col" role="main" aria-label="Team collaboration page">
      {/* Header Section - Clear Purpose */}
      <header className="p-4 sm:p-6 border-b space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <h1 
              className="text-2xl sm:text-3xl font-semibold tracking-tight" 
              data-testid="text-page-title"
              id="teamwork-title"
            >
              Team Collaboration
            </h1>
            <p className="text-sm text-muted-foreground max-w-2xl">
              Collaborate with your team on complex tickets and share expertise
            </p>
          </div>
        </div>

        {/* Stats Overview - Collaboration Cues */}
        <section 
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          aria-label="Team collaboration statistics"
          role="region"
        >
          <Card className="transition-all duration-200 hover-elevate">
            <CardContent className="p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">Active Discussions</p>
                  <p className="text-2xl font-bold tabular-nums" data-testid="text-active-discussions">
                    3
                  </p>
                </div>
                <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="h-5 w-5 text-primary" aria-hidden="true" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-200 hover-elevate">
            <CardContent className="p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">Team Members Online</p>
                  <p className="text-2xl font-bold tabular-nums text-chart-2" data-testid="text-members-online">
                    5
                  </p>
                </div>
                <div className="h-10 w-10 rounded-md bg-chart-2/10 flex items-center justify-center shrink-0">
                  <Activity className="h-5 w-5 text-chart-2" aria-hidden="true" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-200 hover-elevate">
            <CardContent className="p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">Resolved Today</p>
                  <p className="text-2xl font-bold tabular-nums text-chart-4" data-testid="text-resolved-today">
                    12
                  </p>
                </div>
                <div className="h-10 w-10 rounded-md bg-chart-4/10 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="h-5 w-5 text-chart-4" aria-hidden="true" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </header>

      <div className="flex-1 overflow-hidden flex flex-col md:flex-row">
        {/* Discussions Sidebar - Personality */}
        <aside 
          className="w-full md:w-96 border-r flex flex-col"
          role="navigation"
          aria-label="Discussion list"
        >
          <div className="p-4 border-b space-y-3">
            <h2 className="text-lg font-semibold">Team Discussions</h2>
            <Input 
              placeholder="Search discussions..." 
              className="min-h-11 transition-all duration-200 focus:ring-2"
              data-testid="input-search"
              aria-label="Search team discussions"
            />
          </div>

          <div 
            className="flex-1 overflow-auto"
            role="list"
            aria-label="List of discussions"
          >
            {discussions.map((discussion) => (
              <button
                key={discussion.id}
                className="w-full p-4 border-b hover-elevate active-elevate-2 transition-all duration-200 text-left"
                data-testid={`discussion-${discussion.id}`}
                aria-label={`Discussion ${discussion.ticketId}: ${discussion.subject}`}
                role="listitem"
              >
                <div className="flex items-start justify-between mb-2 gap-2">
                  <span className="font-mono text-xs font-medium text-primary">
                    {discussion.ticketId}
                  </span>
                  <StatusBadge status={discussion.status as any} />
                </div>
                <h4 className="font-medium text-sm mb-2">{discussion.subject}</h4>
                <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                  {discussion.lastMessage}
                </p>
                
                {/* Collaboration Cues - Who's Working */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex -space-x-2">
                    {discussion.participants.map((participant, idx) => (
                      <div key={idx} className="relative" title={`${participant.name} - ${participant.role}`}>
                        <Avatar className="h-7 w-7 border-2 border-background transition-transform duration-200 hover:scale-110">
                          <AvatarFallback className="text-xs">
                            {participant.initials}
                          </AvatarFallback>
                        </Avatar>
                        {participant.isOnline && (
                          <div 
                            className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-chart-2 border-2 border-background"
                            aria-label="Online"
                          />
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MessageSquare className="h-3 w-3" aria-hidden="true" />
                      <span>{discussion.messageCount}</span>
                    </div>
                    {discussion.activeParticipants > 0 && (
                      <Badge variant="outline" className="text-xs">
                        <Activity className="h-2 w-2 mr-1" aria-hidden="true" />
                        {discussion.activeParticipants} active
                      </Badge>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </aside>

        {/* Main Discussion Area - Inclusive Design */}
        <div className="flex-1 flex flex-col">
          <div className="p-4 border-b space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-wrap">
              <span className="font-mono text-sm font-medium text-primary">#TK-1234</span>
              <h2 className="text-xl font-semibold">Complex API Integration Issue</h2>
              <StatusBadge status="in-progress" />
            </div>
            
            {/* Participants with Roles - Inclusive */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-sm text-muted-foreground">Team:</span>
              <div className="flex flex-wrap gap-2">
                {["Sarah W.", "John D.", "Mike J."].map((participant, idx) => {
                  const roles = ["Backend Dev", "Senior Dev", "DevOps"];
                  const isOnline = idx < 2;
                  return (
                    <div 
                      key={idx} 
                      className="flex items-center gap-2 p-2 rounded-md bg-muted/50 transition-all duration-200 hover-elevate"
                    >
                      <div className="relative">
                        <Avatar className="h-6 w-6 border-2 border-background">
                          <AvatarFallback className="text-xs">
                            {participant.split(" ").map((n) => n[0]).join("")}
                          </AvatarFallback>
                        </Avatar>
                        {isOnline && (
                          <div 
                            className="absolute -bottom-0.5 -right-0.5 h-2 w-2 rounded-full bg-chart-2 border border-background"
                            aria-label="Online"
                          />
                        )}
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-medium">{participant}</span>
                        <span className="text-xs text-muted-foreground">{roles[idx]}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Messages - Clear Communication */}
          <div 
            className="flex-1 overflow-auto p-4 space-y-4"
            role="feed"
            aria-label="Discussion messages"
          >
            {messages.map((message, index) => (
              <div key={index} className="flex gap-3">
                <Avatar className="h-9 w-9 shrink-0">
                  <AvatarFallback className="text-xs">{message.initials}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex items-baseline gap-2 mb-1 flex-wrap">
                    <span className="font-medium text-sm">{message.sender}</span>
                    <Badge variant="outline" className="text-xs">
                      {message.role}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{message.time}</span>
                  </div>
                  <div className="p-3 rounded-md bg-muted/50 border transition-all duration-200 hover-elevate">
                    <p className="text-sm leading-relaxed">{message.message}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator - Real-time Collaboration Cue */}
            <div className="flex gap-3">
              <Avatar className="h-9 w-9 shrink-0">
                <AvatarFallback className="text-xs">JD</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-medium text-sm">John D.</span>
                  <Badge variant="outline" className="text-xs">Senior Dev</Badge>
                  <span className="text-xs text-muted-foreground">typing...</span>
                </div>
                <div className="p-3 rounded-md bg-primary/5 border border-primary/20">
                  <div className="flex gap-1">
                    <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="h-2 w-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Message Input - Direct Manipulation */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                placeholder="Type your message... Use @mention to notify team members"
                className="min-h-11 transition-all duration-200 focus:ring-2"
                data-testid="input-message"
                aria-label="Type message to team"
              />
              <Button 
                className="min-h-11 min-w-11 transition-all duration-200"
                size="icon"
                data-testid="button-send"
                aria-label="Send message"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2">
              Tip: Use @name to mention specific team members
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
