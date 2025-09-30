import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, CheckCircle, Edit3, Eye, Type, Activity } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const activeEdits = [
  {
    id: 1,
    ticketId: "#TK-1234",
    subject: "API Integration Documentation Update",
    editors: [
      { name: "Sarah W.", avatar: "SW", color: "bg-blue-500", status: "typing", action: "Editing section 2" },
      { name: "John D.", avatar: "JD", color: "bg-green-500", status: "viewing", action: "Reading changes" },
    ],
    lastEdit: "2 min ago",
    changes: 12,
    section: "Authentication Flow",
  },
  {
    id: 2,
    ticketId: "#TK-1232",
    subject: "Customer Communication Draft",
    editors: [
      { name: "Jane S.", avatar: "JS", color: "bg-purple-500", status: "editing", action: "Updating response" },
    ],
    lastEdit: "5 min ago",
    changes: 3,
    section: "Introduction",
  },
  {
    id: 3,
    ticketId: "#TK-1229",
    subject: "Technical Solution Documentation",
    editors: [
      { name: "Mike J.", avatar: "MJ", color: "bg-orange-500", status: "typing", action: "Adding code samples" },
      { name: "Emily D.", avatar: "ED", color: "bg-pink-500", status: "viewing", action: "Reviewing content" },
      { name: "David W.", avatar: "DW", color: "bg-cyan-500", status: "editing", action: "Formatting document" },
    ],
    lastEdit: "1 min ago",
    changes: 8,
    section: "Implementation Guide",
  },
];

const recentActivity = [
  { user: "Sarah W.", action: "Updated section 'API Authentication'", ticket: "#TK-1234", time: "2 min ago", type: "edit" },
  { user: "John D.", action: "Added code example", ticket: "#TK-1234", time: "5 min ago", type: "add" },
  { user: "Mike J.", action: "Created new section 'Troubleshooting'", ticket: "#TK-1229", time: "8 min ago", type: "create" },
  { user: "Jane S.", action: "Fixed formatting in response draft", ticket: "#TK-1232", time: "10 min ago", type: "edit" },
  { user: "Emily D.", action: "Added technical details", ticket: "#TK-1229", time: "15 min ago", type: "add" },
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "typing": return "bg-chart-2";
    case "editing": return "bg-chart-4";
    case "viewing": return "bg-muted-foreground";
    default: return "bg-muted-foreground";
  }
};

const getStatusIcon = (status: string) => {
  switch (status) {
    case "typing": return Type;
    case "editing": return Edit3;
    case "viewing": return Eye;
    default: return Eye;
  }
};

export default function JointEditing() {
  return (
    <div className="flex-1 overflow-auto" role="main" aria-label="Joint editing page">
      <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
        {/* Header Section - Clear Purpose */}
        <header className="space-y-2">
          <h1 
            className="text-2xl sm:text-3xl font-semibold tracking-tight" 
            data-testid="text-page-title"
            id="joint-editing-title"
          >
            Joint Editing
          </h1>
          <p className="text-sm text-muted-foreground max-w-2xl">
            Collaborate on tickets with other teams and keep track of progress in real-time
          </p>
        </header>

        <Separator className="my-6" />

        {/* Stats Overview - Real-time Feedback */}
        <section 
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          aria-label="Joint editing statistics"
          role="region"
        >
          <Card className="transition-all duration-200 hover-elevate">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">Active Sessions</p>
                  <p className="text-2xl sm:text-3xl font-bold tabular-nums" data-testid="text-active-sessions">
                    3
                  </p>
                </div>
                <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                  <Users className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-200 hover-elevate">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">Recent Changes</p>
                  <p className="text-2xl sm:text-3xl font-bold tabular-nums text-chart-4" data-testid="text-recent-changes">
                    23
                  </p>
                </div>
                <div className="h-12 w-12 rounded-md bg-chart-4/10 flex items-center justify-center shrink-0">
                  <Activity className="h-6 w-6 text-chart-4" aria-hidden="true" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="transition-all duration-200 hover-elevate">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-muted-foreground mb-1">Collaborators Online</p>
                  <p className="text-2xl sm:text-3xl font-bold tabular-nums text-chart-2" data-testid="text-collaborators-online">
                    7
                  </p>
                </div>
                <div className="h-12 w-12 rounded-md bg-chart-2/10 flex items-center justify-center shrink-0">
                  <CheckCircle className="h-6 w-6 text-chart-2" aria-hidden="true" />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Active Sessions - Real-time Feedback */}
        <section className="space-y-4">
          <h2 className="text-lg font-semibold">Active Collaborative Sessions</h2>
          
          <div 
            className="space-y-4"
            role="list"
            aria-label="List of active editing sessions"
          >
            {activeEdits.map((edit) => (
              <Card 
                key={edit.id} 
                className="transition-all duration-200 hover-elevate" 
                data-testid={`card-session-${edit.id}`}
                role="listitem"
              >
                <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0 pb-4">
                  <div className="flex-1 min-w-0 space-y-2">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="font-mono text-sm font-medium text-primary">
                        {edit.ticketId}
                      </span>
                      <Badge 
                        variant="secondary" 
                        className="transition-all duration-200"
                        aria-label={`${edit.changes} changes made`}
                      >
                        <Activity className="h-3 w-3 mr-1" aria-hidden="true" />
                        {edit.changes} changes
                      </Badge>
                      <Badge 
                        variant="outline" 
                        className="transition-all duration-200"
                        aria-label={`Currently editing: ${edit.section}`}
                      >
                        <Edit3 className="h-3 w-3 mr-1" aria-hidden="true" />
                        {edit.section}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg">{edit.subject}</h3>
                  </div>
                  <Button 
                    className="min-h-11 transition-all duration-200 shrink-0"
                    data-testid={`button-join-${edit.id}`}
                    aria-label={`Join editing session for ${edit.subject}`}
                  >
                    Join Session
                  </Button>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Editors with Real-time Status - Natural Mapping */}
                  <div className="space-y-3">
                    <p className="text-sm font-medium text-muted-foreground">Active Editors</p>
                    <div className="space-y-2">
                      {edit.editors.map((editor, idx) => {
                        const StatusIcon = getStatusIcon(editor.status);
                        return (
                          <div 
                            key={idx}
                            className="flex items-center gap-3 p-3 rounded-md bg-muted/50 border transition-all duration-200 hover-elevate"
                          >
                            <div className="relative">
                              <Avatar className="h-9 w-9 border-2 border-background">
                                <AvatarFallback className="text-xs">{editor.avatar}</AvatarFallback>
                              </Avatar>
                              <div
                                className={`absolute -bottom-1 -right-1 h-3.5 w-3.5 rounded-full border-2 border-background flex items-center justify-center ${getStatusColor(editor.status)}`}
                                aria-label={`Status: ${editor.status}`}
                              >
                                <StatusIcon className="h-2 w-2 text-white" aria-hidden="true" />
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 flex-wrap">
                                <span className="font-medium text-sm">{editor.name}</span>
                                <Badge 
                                  variant="outline" 
                                  className="text-xs capitalize transition-all duration-200"
                                >
                                  {editor.status}
                                </Badge>
                              </div>
                              <p className="text-xs text-muted-foreground mt-0.5">
                                {editor.action}
                              </p>
                            </div>
                            {editor.status === "typing" && (
                              <div className="flex gap-1">
                                <div className="h-1.5 w-1.5 rounded-full bg-chart-2 animate-bounce" style={{ animationDelay: '0ms' }} />
                                <div className="h-1.5 w-1.5 rounded-full bg-chart-2 animate-bounce" style={{ animationDelay: '150ms' }} />
                                <div className="h-1.5 w-1.5 rounded-full bg-chart-2 animate-bounce" style={{ animationDelay: '300ms' }} />
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Last Edit Time - Empathy */}
                  <div className="flex items-center gap-2 p-3 rounded-md bg-primary/5 border border-primary/20 text-sm">
                    <Clock className="h-4 w-4 text-primary shrink-0" aria-hidden="true" />
                    <span className="text-muted-foreground">
                      Last edit <span className="font-medium text-foreground">{edit.lastEdit}</span>
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Recent Activity - Empathetic Design */}
        <Card className="transition-all duration-200">
          <CardHeader>
            <h2 className="text-lg font-semibold">Recent Activity</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Track all changes made by your team in real-time
            </p>
          </CardHeader>
          <CardContent>
            <div 
              className="space-y-4"
              role="feed"
              aria-label="Recent editing activity feed"
            >
              {recentActivity.map((activity, index) => (
                <div 
                  key={index} 
                  className="flex gap-4 items-start p-3 rounded-md transition-all duration-200 hover-elevate"
                  role="article"
                  aria-label={`${activity.user} ${activity.action} on ${activity.ticket}, ${activity.time}`}
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/10 shrink-0 mt-1">
                    {activity.type === "edit" && <Edit3 className="h-4 w-4 text-primary" aria-hidden="true" />}
                    {activity.type === "add" && <Activity className="h-4 w-4 text-chart-2" aria-hidden="true" />}
                    {activity.type === "create" && <CheckCircle className="h-4 w-4 text-chart-4" aria-hidden="true" />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-medium text-sm">{activity.user}</span>
                      <span className="text-sm text-muted-foreground">{activity.action}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-1 flex-wrap">
                      <span className="font-mono text-xs text-primary">{activity.ticket}</span>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{activity.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Help Section - Empathy */}
        <Card className="border-primary/20 bg-primary/5 transition-all duration-200">
          <CardContent className="p-4 sm:p-6">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                <Users className="h-5 w-5 text-primary" aria-hidden="true" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-sm font-semibold">Collaboration Tips</h3>
                <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                  <li>See real-time cursor positions and edits from other team members</li>
                  <li>Changes are automatically saved and synced across all participants</li>
                  <li>Use comments to discuss specific sections without editing</li>
                  <li>View detailed edit history to understand what changed and when</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
