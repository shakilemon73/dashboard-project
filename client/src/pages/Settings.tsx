import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Settings as SettingsIcon, Globe, Clock, Mail } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Settings() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div>
          <h1 className="text-3xl font-semibold" data-testid="text-page-title">App Settings</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Global system configuration including branding, business hours, and integrations
          </p>
        </div>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                <SettingsIcon className="h-5 w-5 text-primary" />
              </div>
              <CardTitle>General Settings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="company-name">Company Name</Label>
              <Input
                id="company-name"
                defaultValue="HelpDesk Inc."
                data-testid="input-company-name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="support-email">Support Email</Label>
              <Input
                id="support-email"
                type="email"
                defaultValue="support@helpdesk.com"
                data-testid="input-support-email"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Language</Label>
                <Select defaultValue="en">
                  <SelectTrigger data-testid="select-language">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                    <SelectItem value="fr">French</SelectItem>
                    <SelectItem value="de">German</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Timezone</Label>
                <Select defaultValue="pst">
                  <SelectTrigger data-testid="select-timezone">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pst">Pacific (PST)</SelectItem>
                    <SelectItem value="est">Eastern (EST)</SelectItem>
                    <SelectItem value="gmt">GMT</SelectItem>
                    <SelectItem value="jst">Japan (JST)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-chart-2/10">
                <Clock className="h-5 w-5 text-chart-2" />
              </div>
              <CardTitle>Business Hours</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Start Time</Label>
                <Input type="time" defaultValue="09:00" data-testid="input-start-time" />
              </div>
              <div className="space-y-2">
                <Label>End Time</Label>
                <Input type="time" defaultValue="17:00" data-testid="input-end-time" />
              </div>
            </div>

            <div className="space-y-2">
              <Label>Working Days</Label>
              <div className="flex gap-2">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                  <Button
                    key={day}
                    variant={day === "Sat" || day === "Sun" ? "outline" : "default"}
                    size="sm"
                    className="flex-1"
                    data-testid={`button-day-${day.toLowerCase()}`}
                  >
                    {day}
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-chart-4/10">
                <Mail className="h-5 w-5 text-chart-4" />
              </div>
              <CardTitle>Email Settings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-md border">
              <div>
                <p className="font-medium text-sm">Email Notifications</p>
                <p className="text-xs text-muted-foreground">
                  Send email notifications for ticket updates
                </p>
              </div>
              <Switch defaultChecked data-testid="switch-email-notifications" />
            </div>

            <div className="flex items-center justify-between p-3 rounded-md border">
              <div>
                <p className="font-medium text-sm">Customer Auto-Reply</p>
                <p className="text-xs text-muted-foreground">
                  Send automatic acknowledgment to customers
                </p>
              </div>
              <Switch defaultChecked data-testid="switch-auto-reply" />
            </div>

            <div className="flex items-center justify-between p-3 rounded-md border">
              <div>
                <p className="font-medium text-sm">Agent Mentions</p>
                <p className="text-xs text-muted-foreground">
                  Notify agents when mentioned in tickets
                </p>
              </div>
              <Switch defaultChecked data-testid="switch-agent-mentions" />
            </div>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-2">
          <Button variant="outline" data-testid="button-reset">Reset to Defaults</Button>
          <Button data-testid="button-save-settings">Save All Settings</Button>
        </div>
      </div>
    </div>
  );
}
