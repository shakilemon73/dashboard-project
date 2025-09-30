import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Search, Edit, Trash2, Mail, Phone, Building2, User } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";

const contacts = [
  { id: 1, name: "Alice Cooper", role: "IT Manager", company: "Acme Corp", email: "alice.c@acme.com", phone: "+1 234 567 8901" },
  { id: 2, name: "Bob Martinez", role: "CTO", company: "Tech Innovations", email: "bob.m@techinno.com", phone: "+1 234 567 8902" },
  { id: 3, name: "Carol White", role: "System Admin", company: "Digital Solutions", email: "carol.w@digital.com", phone: "+1 234 567 8903" },
  { id: 4, name: "Daniel Lee", role: "Operations Lead", company: "Enterprise Systems", email: "daniel.l@enterprise.com", phone: "+1 234 567 8904" },
  { id: 5, name: "Eva Green", role: "Product Manager", company: "StartupHub", email: "eva.g@startuphub.com", phone: "+1 234 567 8905" },
];

export default function Contacts() {
  const [searchQuery, setSearchQuery] = useState("");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedContact, setSelectedContact] = useState<typeof contacts[0] | null>(null);

  const handleDeleteClick = (contact: typeof contacts[0]) => {
    setSelectedContact(contact);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    console.log("Deleting contact:", selectedContact?.name);
    setDeleteDialogOpen(false);
    setSelectedContact(null);
  };

  return (
    <div className="flex-1 overflow-auto" role="main" aria-label="Contacts management page">
      <div className="p-4 sm:p-6 md:p-8 space-y-6 sm:space-y-8">
        {/* Header Section - Visual Hierarchy with Clear Labels */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-2">
            <h1 
              className="text-2xl sm:text-3xl font-semibold tracking-tight" 
              data-testid="text-page-title"
              id="page-title"
            >
              Contacts Management
            </h1>
            <p 
              className="text-sm text-muted-foreground max-w-2xl"
              id="page-description"
            >
              Manage contact directory with search, filtering, and organization capabilities
            </p>
          </div>
          <Button 
            className="min-h-11 transition-all duration-200 shrink-0"
            data-testid="button-add-contact"
            aria-label="Add new contact"
          >
            <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
            Add Contact
          </Button>
        </header>

        <Separator className="my-6" />

        {/* Main Content Section */}
        <div className="p-4 sm:p-6 space-y-6">
          {/* Search Section - Touch-friendly with Clear Labels */}
          <div className="space-y-2">
            <Label htmlFor="contact-search" className="text-sm font-medium">
              Search Contacts
            </Label>
            <div className="relative" role="search">
              <Search 
                className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" 
                aria-hidden="true"
              />
              <Input
                id="contact-search"
                placeholder="Search by name, email, company, or role..."
                className="pl-10 min-h-11 transition-all duration-200 focus:ring-2"
                data-testid="input-search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search contacts by name, email, company, or role"
                aria-describedby="search-hint"
              />
            </div>
            <p id="search-hint" className="text-xs text-muted-foreground sr-only">
              Type to filter contacts by name, email address, company name, or job role
            </p>
          </div>

          {/* Contacts List - Semantic structure with proper ARIA */}
          <div 
            className="grid gap-4" 
            role="list" 
            aria-label="List of contacts"
            aria-describedby="page-description"
          >
            {contacts.map((contact) => (
              <Card 
                key={contact.id} 
                className="p-4 sm:p-6 hover-elevate transition-all duration-200 focus-within:ring-2 focus-within:ring-primary" 
                data-testid={`card-contact-${contact.id}`}
                role="listitem"
                aria-label={`Contact: ${contact.name}, ${contact.role} at ${contact.company}`}
                tabIndex={0}
              >
                <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                  {/* Avatar - Recognition over Recall */}
                  <div className="flex-shrink-0">
                    <Avatar className="h-14 w-14 sm:h-16 sm:w-16 transition-transform duration-200 hover:scale-105">
                      <AvatarFallback className="text-lg font-medium">
                        {contact.name.split(" ").map((n) => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>

                  {/* Contact Info - Clear Visual Hierarchy */}
                  <div className="flex-1 min-w-0 space-y-3">
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-wrap">
                        <h2 
                          className="font-semibold text-lg truncate" 
                          data-testid={`text-name-${contact.id}`}
                        >
                          {contact.name}
                        </h2>
                        <Badge 
                          variant="secondary" 
                          className="text-xs self-start transition-all duration-200"
                          aria-label={`Role: ${contact.role}`}
                        >
                          <User className="h-3 w-3 mr-1" aria-hidden="true" />
                          {contact.role}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Building2 className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
                        <span 
                          className="truncate" 
                          data-testid={`text-company-${contact.id}`}
                        >
                          {contact.company}
                        </span>
                      </div>
                    </div>

                    {/* Contact Details - Information Chunking */}
                    <div 
                      className="grid gap-2 sm:grid-cols-2"
                      role="group"
                      aria-label="Contact information"
                    >
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                        <a 
                          href={`mailto:${contact.email}`}
                          className="truncate hover:underline hover:text-primary transition-colors duration-200"
                          data-testid={`link-email-${contact.id}`}
                          aria-label={`Email ${contact.name} at ${contact.email}`}
                        >
                          {contact.email}
                        </a>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
                        <a 
                          href={`tel:${contact.phone}`}
                          className="truncate hover:underline hover:text-primary transition-colors duration-200"
                          data-testid={`link-phone-${contact.id}`}
                          aria-label={`Call ${contact.name} at ${contact.phone}`}
                        >
                          {contact.phone}
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons - Touch-friendly with Clear Affordances */}
                  <div 
                    className="flex gap-2 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l lg:pl-6" 
                    role="group" 
                    aria-label="Contact actions"
                  >
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="min-h-11 transition-all duration-200"
                      data-testid={`button-email-${contact.id}`}
                      aria-label={`Send email to ${contact.name}`}
                      onClick={() => window.location.href = `mailto:${contact.email}`}
                    >
                      <Mail className="h-4 w-4 sm:mr-2" aria-hidden="true" />
                      <span className="hidden sm:inline">Email</span>
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="min-h-11 min-w-11 transition-all duration-200"
                      data-testid={`button-edit-${contact.id}`}
                      aria-label={`Edit ${contact.name}`}
                    >
                      <Edit className="h-4 w-4" aria-hidden="true" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="min-h-11 min-w-11 transition-all duration-200 hover:text-destructive"
                      data-testid={`button-delete-${contact.id}`}
                      aria-label={`Delete ${contact.name}`}
                      onClick={() => handleDeleteClick(contact)}
                    >
                      <Trash2 className="h-4 w-4" aria-hidden="true" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Empty State - Clear Feedback and Emotional Design */}
          {contacts.length === 0 && (
            <div className="text-center py-12 space-y-3" role="status">
              <User className="h-12 w-12 mx-auto text-muted-foreground opacity-50" aria-hidden="true" />
              <p className="text-lg font-medium text-muted-foreground">No contacts found</p>
              <p className="text-sm text-muted-foreground">Try adjusting your search or add a new contact to get started</p>
            </div>
          )}
        </div>
      </div>

      {/* Delete Confirmation Dialog - Forgiveness Principle */}
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Contact</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete {selectedContact?.name}? This action cannot be undone and will permanently remove this contact from your directory.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="flex-col sm:flex-row gap-2">
            <AlertDialogCancel 
              className="min-h-11 transition-all duration-200"
              aria-label="Cancel deletion"
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              className="min-h-11 transition-all duration-200 bg-destructive text-destructive-foreground hover:bg-destructive/90"
              onClick={handleDeleteConfirm}
              aria-label={`Confirm deletion of ${selectedContact?.name}`}
            >
              Delete Contact
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
