import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Edit } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";

const roles = [
  { 
    id: 1, 
    name: "Administrator", 
    users: 2, 
    permissions: {
      tickets: { view: true, create: true, edit: true, delete: true },
      users: { view: true, create: true, edit: true, delete: true },
      settings: { view: true, create: true, edit: true, delete: true },
      reports: { view: true, create: true, edit: true, delete: true },
    }
  },
  { 
    id: 2, 
    name: "Team Lead", 
    users: 3, 
    permissions: {
      tickets: { view: true, create: true, edit: true, delete: false },
      users: { view: true, create: false, edit: true, delete: false },
      settings: { view: true, create: false, edit: false, delete: false },
      reports: { view: true, create: true, edit: true, delete: false },
    }
  },
  { 
    id: 3, 
    name: "Senior Agent", 
    users: 8, 
    permissions: {
      tickets: { view: true, create: true, edit: true, delete: false },
      users: { view: true, create: false, edit: false, delete: false },
      settings: { view: false, create: false, edit: false, delete: false },
      reports: { view: true, create: false, edit: false, delete: false },
    }
  },
  { 
    id: 4, 
    name: "Agent", 
    users: 15, 
    permissions: {
      tickets: { view: true, create: true, edit: true, delete: false },
      users: { view: false, create: false, edit: false, delete: false },
      settings: { view: false, create: false, edit: false, delete: false },
      reports: { view: true, create: false, edit: false, delete: false },
    }
  },
];

const permissionCategories = ["tickets", "users", "settings", "reports"];
const permissionActions = ["view", "create", "edit", "delete"];

export default function Authorization() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold" data-testid="text-page-title">Authorization Management</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Give account managers specific access and action permissions based on their roles and responsibilities
            </p>
          </div>
          <Button data-testid="button-create-role">
            <Plus className="h-4 w-4 mr-2" />
            Create Role
          </Button>
        </div>

        <div className="grid gap-6">
          {roles.map((role) => (
            <Card key={role.id} className="p-6" data-testid={`card-role-${role.id}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <h3 className="text-xl font-semibold">{role.name}</h3>
                  <Badge variant="secondary">{role.users} users</Badge>
                </div>
                <Button variant="ghost" size="icon" data-testid={`button-edit-${role.id}`}>
                  <Edit className="h-4 w-4" />
                </Button>
              </div>

              <div className="border rounded-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-muted/50">
                    <tr>
                      <th className="text-left text-sm font-medium p-3">Module</th>
                      {permissionActions.map((action) => (
                        <th key={action} className="text-center text-sm font-medium p-3 capitalize">
                          {action}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {permissionCategories.map((category) => (
                      <tr key={category} className="border-t">
                        <td className="p-3 font-medium capitalize">{category}</td>
                        {permissionActions.map((action) => (
                          <td key={action} className="p-3 text-center">
                            <div className="flex justify-center">
                              <Switch
                                checked={role.permissions[category as keyof typeof role.permissions][action as keyof typeof role.permissions.tickets]}
                                data-testid={`switch-${role.id}-${category}-${action}`}
                              />
                            </div>
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
