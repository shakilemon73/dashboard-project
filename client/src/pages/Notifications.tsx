import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Bell } from "lucide-react";

const notificationSettings = [
  {
    category: "Ticket Updates",
    settings: [
      { id: "new-ticket", label: "New ticket assigned to me", email: true, push: true },
      { id: "status-change", label: "Ticket status changed", email: true, push: false },
      { id: "customer-reply", label: "Customer replied to ticket", email: true, push: true },
      { id: "mention", label: "Someone mentioned me in comments", email: true, push: true },
    ],
  },
  {
    category: "SLA Alerts",
    settings: [
      { id: "sla-warning", label: "SLA deadline approaching (30 min)", email: true, push: true },
      { id: "sla-breach", label: "SLA deadline breached", email: true, push: true },
    ],
  },
  {
    category: "Team Collaboration",
    settings: [
      { id: "team-discussion", label: "New message in team discussion", email: false, push: true },
      { id: "doc-edit", label: "Document edited by team member", email: false, push: false },
    ],
  },
  {
    category: "System Notifications",
    settings: [
      { id: "automation-run", label: "Automation rule executed", email: false, push: false },
      { id: "report-ready", label: "Scheduled report ready", email: true, push: false },
    ],
  },
];

export default function Notifications() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-semibold" data-testid="text-page-title">Email Notifications</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Automatically notify customers and account managers of any changes in their tickets
          </p>
        </div>

        <div className="grid gap-6">
          {notificationSettings.map((category, categoryIdx) => (
            <Card key={categoryIdx} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                  <Bell className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.settings.map((setting) => (
                  <div
                    key={setting.id}
                    className="flex items-center justify-between p-4 rounded-md border"
                    data-testid={`setting-${setting.id}`}
                  >
                    <Label htmlFor={setting.id} className="text-sm font-normal cursor-pointer">
                      {setting.label}
                    </Label>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-2">
                        <Label htmlFor={`${setting.id}-email`} className="text-xs text-muted-foreground">
                          Email
                        </Label>
                        <Switch
                          id={`${setting.id}-email`}
                          checked={setting.email}
                          data-testid={`switch-email-${setting.id}`}
                        />
                      </div>
                      <div className="flex items-center gap-2">
                        <Label htmlFor={`${setting.id}-push`} className="text-xs text-muted-foreground">
                          Push
                        </Label>
                        <Switch
                          id={`${setting.id}-push`}
                          checked={setting.push}
                          data-testid={`switch-push-${setting.id}`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="flex justify-end gap-2">
          <Button variant="outline" data-testid="button-reset">Reset to Defaults</Button>
          <Button data-testid="button-save">Save Preferences</Button>
        </div>
      </div>
    </div>
  );
}
