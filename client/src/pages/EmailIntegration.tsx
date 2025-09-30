import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Mail, CheckCircle, Plus, Settings } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const connectedAccounts = [
  { id: 1, email: "support@company.com", provider: "Gmail", status: "active", ticketsCreated: 234 },
  { id: 2, email: "help@company.com", provider: "Outlook", status: "active", ticketsCreated: 156 },
  { id: 3, email: "info@company.com", provider: "Custom IMAP", status: "inactive", ticketsCreated: 0 },
];

export default function EmailIntegration() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold" data-testid="text-page-title">Email Integration</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Convert support emails into trackable tickets for better management and resolution
            </p>
          </div>
          <Button data-testid="button-add-account">
            <Plus className="h-4 w-4 mr-2" />
            Connect Email Account
          </Button>
        </div>

        <div className="grid gap-4">
          {connectedAccounts.map((account) => (
            <Card key={account.id} data-testid={`card-account-${account.id}`}>
              <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{account.email}</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">{account.provider}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={account.status === "active" ? "default" : "secondary"}>
                    {account.status === "active" ? (
                      <>
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Active
                      </>
                    ) : (
                      "Inactive"
                    )}
                  </Badge>
                  <Button variant="ghost" size="icon" data-testid={`button-settings-${account.id}`}>
                    <Settings className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Tickets Created</p>
                    <p className="text-2xl font-bold">{account.ticketsCreated}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" data-testid={`button-test-${account.id}`}>
                      Test Connection
                    </Button>
                    {account.status === "inactive" ? (
                      <Button size="sm" data-testid={`button-activate-${account.id}`}>Activate</Button>
                    ) : (
                      <Button variant="outline" size="sm" data-testid={`button-pause-${account.id}`}>Pause</Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="p-6">
          <h3 className="text-lg font-semibold mb-4">Email to Ticket Configuration</h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Default Priority</Label>
                <Select defaultValue="normal">
                  <SelectTrigger data-testid="select-default-priority">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="normal">Normal</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Default Category</Label>
                <Select defaultValue="general">
                  <SelectTrigger data-testid="select-default-category">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Support</SelectItem>
                    <SelectItem value="technical">Technical</SelectItem>
                    <SelectItem value="billing">Billing</SelectItem>
                    <SelectItem value="account">Account</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject-prefix">Subject Prefix for Tickets</Label>
              <Input
                id="subject-prefix"
                placeholder="e.g., [TICKET]"
                defaultValue="[TICKET]"
                data-testid="input-subject-prefix"
              />
              <p className="text-xs text-muted-foreground">
                This prefix will be added to ticket subjects when replying via email
              </p>
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Button variant="outline" data-testid="button-reset">Reset to Defaults</Button>
              <Button data-testid="button-save-settings">Save Settings</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
