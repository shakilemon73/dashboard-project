import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Search, Edit, Trash2, MapPin, Users, Ticket, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";

const locations = [
  { id: 1, name: "New York Office", address: "123 Broadway, New York, NY 10001", agents: 15, tickets: 234, timezone: "EST" },
  { id: 2, name: "San Francisco Office", address: "456 Market St, San Francisco, CA 94102", agents: 12, tickets: 189, timezone: "PST" },
  { id: 3, name: "London Office", address: "789 Oxford St, London, UK W1C 1AX", agents: 10, tickets: 156, timezone: "GMT" },
  { id: 4, name: "Tokyo Office", address: "321 Shibuya, Tokyo, Japan 150-0002", agents: 8, tickets: 98, timezone: "JST" },
  { id: 5, name: "Remote Workers", address: "Various locations", agents: 5, tickets: 45, timezone: "Various" },
];

export default function Locations() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="flex-1 overflow-auto" role="main" aria-label="Locations management page">
      <div className="p-6 md:p-8 space-y-8">
        {/* Header Section - Minimal and Clear */}
        <header className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="space-y-2">
            <h1 
              className="text-3xl font-bold tracking-tight" 
              data-testid="text-page-title"
              id="page-title"
            >
              Locations
            </h1>
            <p 
              className="text-base text-muted-foreground max-w-2xl"
              id="page-description"
            >
              Manage multiple office or service locations with associated agents and tickets
            </p>
          </div>
          <Button 
            data-testid="button-add-location"
            className="min-h-11 shrink-0 transition-all duration-200"
            aria-label="Add new location"
          >
            <Plus className="h-4 w-4 mr-2" aria-hidden="true" />
            Add Location
          </Button>
        </header>

        {/* Search Section - Simple Form */}
        <Card className="p-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="location-search" className="text-sm font-medium">
                Search Locations
              </Label>
              <div className="relative">
                <Search 
                  className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" 
                  aria-hidden="true"
                />
                <Input
                  id="location-search"
                  placeholder="Search by location name, address, or timezone..."
                  className="pl-10 min-h-11 transition-all duration-200 focus:ring-2"
                  data-testid="input-search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  aria-label="Search locations by name, address, or timezone"
                  aria-describedby="search-hint"
                />
              </div>
              <p id="search-hint" className="text-xs text-muted-foreground sr-only">
                Type to filter locations by name, physical address, or timezone
              </p>
            </div>
          </div>
        </Card>

        {/* Locations List - Clean Card Layout */}
        <div 
          className="grid gap-4" 
          role="list" 
          aria-label="List of locations"
          aria-describedby="page-description"
        >
          {locations.map((location) => (
            <Card 
              key={location.id} 
              className="p-6 hover-elevate transition-all duration-200 focus-within:ring-2 focus-within:ring-primary" 
              data-testid={`card-location-${location.id}`}
              role="listitem"
              aria-label={`Location: ${location.name}`}
              tabIndex={0}
            >
              <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
                {/* Location Icon - Recognition over Recall */}
                <div className="flex-shrink-0">
                  <Avatar className="h-14 w-14 sm:h-16 sm:w-16 transition-transform duration-200 hover:scale-105">
                    <AvatarFallback className="bg-primary/10 text-primary">
                      <MapPin className="h-7 w-7" aria-hidden="true" />
                    </AvatarFallback>
                  </Avatar>
                </div>

                {/* Location Info - Clear Hierarchy */}
                <div className="flex-1 min-w-0 space-y-3">
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 flex-wrap">
                      <h2 
                        className="text-lg font-semibold truncate" 
                        data-testid={`text-name-${location.id}`}
                      >
                        {location.name}
                      </h2>
                      <Badge 
                        variant="outline" 
                        className="text-xs self-start transition-all duration-200"
                        aria-label={`Timezone: ${location.timezone}`}
                      >
                        <Clock className="h-3 w-3 mr-1" aria-hidden="true" />
                        {location.timezone}
                      </Badge>
                    </div>
                    
                    <p 
                      className="text-sm text-muted-foreground"
                      data-testid={`text-address-${location.id}`}
                    >
                      {location.address}
                    </p>
                  </div>
                </div>

                {/* Metrics - Simple and Understandable */}
                <div 
                  className="grid grid-cols-2 gap-6 py-4 lg:py-0" 
                  role="group" 
                  aria-label="Location metrics"
                >
                  <div className="text-center space-y-1 transition-transform duration-200 hover:scale-105">
                    <div className="flex items-center justify-center gap-1">
                      <Users className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    </div>
                    <p 
                      className="text-2xl font-bold" 
                      data-testid={`text-agents-${location.id}`}
                      aria-label={`${location.agents} agents`}
                    >
                      {location.agents}
                    </p>
                    <p className="text-xs text-muted-foreground font-medium">Agents</p>
                  </div>
                  <div className="text-center space-y-1 transition-transform duration-200 hover:scale-105">
                    <div className="flex items-center justify-center gap-1">
                      <Ticket className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                    </div>
                    <p 
                      className="text-2xl font-bold" 
                      data-testid={`text-tickets-${location.id}`}
                      aria-label={`${location.tickets} tickets`}
                    >
                      {location.tickets}
                    </p>
                    <p className="text-xs text-muted-foreground font-medium">Tickets</p>
                  </div>
                </div>

                {/* Action Buttons - Touch-friendly */}
                <div 
                  className="flex gap-2 pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l lg:pl-6" 
                  role="group" 
                  aria-label="Location actions"
                >
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="min-h-11 min-w-11 transition-all duration-200"
                    data-testid={`button-edit-${location.id}`}
                    aria-label={`Edit ${location.name}`}
                  >
                    <Edit className="h-4 w-4" aria-hidden="true" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="min-h-11 min-w-11 transition-all duration-200 hover:text-destructive"
                    data-testid={`button-delete-${location.id}`}
                    aria-label={`Delete ${location.name}`}
                  >
                    <Trash2 className="h-4 w-4" aria-hidden="true" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Empty State - Clear Feedback */}
        {locations.length === 0 && (
          <div className="text-center py-12 space-y-3" role="status">
            <MapPin className="h-12 w-12 mx-auto text-muted-foreground opacity-50" aria-hidden="true" />
            <p className="text-lg font-medium text-muted-foreground">No locations found</p>
            <p className="text-sm text-muted-foreground">Try adjusting your search or add a new location to get started</p>
          </div>
        )}
      </div>
    </div>
  );
}
