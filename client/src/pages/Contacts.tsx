import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2, Mail, Phone } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const contacts = [
  { id: 1, name: "Alice Cooper", role: "IT Manager", company: "Acme Corp", email: "alice.c@acme.com", phone: "+1 234 567 8901" },
  { id: 2, name: "Bob Martinez", role: "CTO", company: "Tech Innovations", email: "bob.m@techinno.com", phone: "+1 234 567 8902" },
  { id: 3, name: "Carol White", role: "System Admin", company: "Digital Solutions", email: "carol.w@digital.com", phone: "+1 234 567 8903" },
  { id: 4, name: "Daniel Lee", role: "Operations Lead", company: "Enterprise Systems", email: "daniel.l@enterprise.com", phone: "+1 234 567 8904" },
  { id: 5, name: "Eva Green", role: "Product Manager", company: "StartupHub", email: "eva.g@startuphub.com", phone: "+1 234 567 8905" },
];

export default function Contacts() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold" data-testid="text-page-title">Contacts</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage contact directory with search, filtering, and organization capabilities
            </p>
          </div>
          <Button data-testid="button-add-contact">
            <Plus className="h-4 w-4 mr-2" />
            Add Contact
          </Button>
        </div>

        <Card className="p-4">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search contacts..."
              className="pl-9"
              data-testid="input-search"
            />
          </div>

          <div className="grid gap-4">
            {contacts.map((contact) => (
              <Card key={contact.id} className="p-4 hover-elevate" data-testid={`card-contact-${contact.id}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback>
                        {contact.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">{contact.name}</h3>
                      <p className="text-sm text-muted-foreground mb-2">
                        {contact.role} at {contact.company}
                      </p>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-sm">
                          <Mail className="h-4 w-4 text-muted-foreground" />
                          <span>{contact.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span>{contact.phone}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" data-testid={`button-email-${contact.id}`}>
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" data-testid={`button-edit-${contact.id}`}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" data-testid={`button-delete-${contact.id}`}>
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
