import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2, Eye, EyeOff, Copy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const passwords = [
  { id: 1, title: "Production Database", username: "db_admin", category: "Database", url: "prod.db.company.com", lastUpdated: "2024-09-15" },
  { id: 2, title: "AWS Root Account", username: "root@company.com", category: "Cloud", url: "aws.amazon.com", lastUpdated: "2024-08-20" },
  { id: 3, title: "Email Server Admin", username: "admin", category: "Email", url: "mail.company.com", lastUpdated: "2024-09-01" },
  { id: 4, title: "Backup Storage", username: "backup_user", category: "Storage", url: "backup.company.com", lastUpdated: "2024-07-10" },
];

export default function PasswordBank() {
  const [showPasswords, setShowPasswords] = useState<Record<number, boolean>>({});

  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold" data-testid="text-page-title">Password Bank</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Securely store and manage shared credentials for support teams
            </p>
          </div>
          <Button data-testid="button-add-password">
            <Plus className="h-4 w-4 mr-2" />
            Add Credential
          </Button>
        </div>

        <Card className="p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search credentials..."
              className="pl-9"
              data-testid="input-search"
            />
          </div>

          <div className="space-y-3">
            {passwords.map((password) => (
              <Card key={password.id} className="p-4 hover-elevate" data-testid={`card-password-${password.id}`}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{password.title}</h3>
                      <Badge variant="outline">{password.category}</Badge>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground w-20">URL:</span>
                        <span>{password.url}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground w-20">Username:</span>
                        <span>{password.username}</span>
                        <Button variant="ghost" size="icon" className="h-6 w-6" data-testid={`button-copy-username-${password.id}`}>
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground w-20">Password:</span>
                        <span className="font-mono">
                          {showPasswords[password.id] ? "P@ssw0rd123!" : "••••••••••"}
                        </span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6"
                          onClick={() =>
                            setShowPasswords((prev) => ({
                              ...prev,
                              [password.id]: !prev[password.id],
                            }))
                          }
                          data-testid={`button-toggle-password-${password.id}`}
                        >
                          {showPasswords[password.id] ? (
                            <EyeOff className="h-3 w-3" />
                          ) : (
                            <Eye className="h-3 w-3" />
                          )}
                        </Button>
                        <Button variant="ghost" size="icon" className="h-6 w-6" data-testid={`button-copy-password-${password.id}`}>
                          <Copy className="h-3 w-3" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-muted-foreground w-20">Updated:</span>
                        <span className="text-xs">{password.lastUpdated}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" data-testid={`button-edit-${password.id}`}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" data-testid={`button-delete-${password.id}`}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
