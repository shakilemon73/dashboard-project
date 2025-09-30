import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Users, Clock, CheckCircle } from "lucide-react";
import { StatusBadge } from "@/components/StatusBadge";

const activeEdits = [
  {
    id: 1,
    ticketId: "#TK-1234",
    subject: "API Integration Documentation Update",
    editors: [
      { name: "Sarah W.", avatar: "SW", color: "bg-blue-500", status: "typing" },
      { name: "John D.", avatar: "JD", color: "bg-green-500", status: "viewing" },
    ],
    lastEdit: "2 min ago",
    changes: 12,
  },
  {
    id: 2,
    ticketId: "#TK-1232",
    subject: "Customer Communication Draft",
    editors: [
      { name: "Jane S.", avatar: "JS", color: "bg-purple-500", status: "editing" },
    ],
    lastEdit: "5 min ago",
    changes: 3,
  },
  {
    id: 3,
    ticketId: "#TK-1229",
    subject: "Technical Solution Documentation",
    editors: [
      { name: "Mike J.", avatar: "MJ", color: "bg-orange-500", status: "typing" },
      { name: "Emily D.", avatar: "ED", color: "bg-pink-500", status: "viewing" },
      { name: "David W.", avatar: "DW", color: "bg-cyan-500", status: "editing" },
    ],
    lastEdit: "1 min ago",
    changes: 8,
  },
];

const recentActivity = [
  { user: "Sarah W.", action: "Updated section 'API Authentication'", ticket: "#TK-1234", time: "2 min ago" },
  { user: "John D.", action: "Added code example", ticket: "#TK-1234", time: "5 min ago" },
  { user: "Mike J.", action: "Created new section 'Troubleshooting'", ticket: "#TK-1229", time: "8 min ago" },
  { user: "Jane S.", action: "Fixed formatting in response draft", ticket: "#TK-1232", time: "10 min ago" },
  { user: "Emily D.", action: "Added technical details", ticket: "#TK-1229", time: "15 min ago" },
];

export default function JointEditing() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-semibold" data-testid="text-page-title">Joint Editing</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Collaborate on tickets with other teams and keep track of progress in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                <Users className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold">3</p>
                <p className="text-xs text-muted-foreground">Active Sessions</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-chart-4/10">
                <Clock className="h-5 w-5 text-chart-4" />
              </div>
              <div>
                <p className="text-2xl font-bold">23</p>
                <p className="text-xs text-muted-foreground">Recent Changes</p>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-chart-2/10">
                <CheckCircle className="h-5 w-5 text-chart-2" />
              </div>
              <div>
                <p className="text-2xl font-bold">7</p>
                <p className="text-xs text-muted-foreground">Collaborators Online</p>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Active Collaborative Sessions</h2>
          <div className="grid gap-4">
            {activeEdits.map((edit) => (
              <Card key={edit.id} className="p-4 hover-elevate" data-testid={`card-session-${edit.id}`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-sm font-medium text-primary">
                        {edit.ticketId}
                      </span>
                      <Badge variant="secondary">{edit.changes} changes</Badge>
                    </div>
                    <h3 className="font-semibold text-lg">{edit.subject}</h3>
                  </div>
                  <Button size="sm" data-testid={`button-join-${edit.id}`}>Join Session</Button>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      {edit.editors.map((editor, idx) => (
                        <div key={idx} className="relative">
                          <Avatar className="h-8 w-8 border-2 border-background">
                            <AvatarFallback className="text-xs">{editor.avatar}</AvatarFallback>
                          </Avatar>
                          <div
                            className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-background ${
                              editor.status === "typing" ? "bg-green-500" :
                              editor.status === "editing" ? "bg-blue-500" : "bg-gray-400"
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">{edit.editors[0].name}</span>
                      {edit.editors.length > 1 && (
                        <span className="text-muted-foreground">
                          {" "}and {edit.editors.length - 1} other{edit.editors.length > 2 ? "s" : ""}
                        </span>
                      )}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">Last edit {edit.lastEdit}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">{activity.user}</span>
                    <span className="text-sm">{activity.action}</span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="font-mono text-xs text-primary">{activity.ticket}</span>
                    <span className="text-xs text-muted-foreground">• {activity.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
