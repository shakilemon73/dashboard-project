import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, Edit, Trash2, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const locations = [
  { id: 1, name: "New York Office", address: "123 Broadway, New York, NY 10001", agents: 15, tickets: 234, timezone: "EST" },
  { id: 2, name: "San Francisco Office", address: "456 Market St, San Francisco, CA 94102", agents: 12, tickets: 189, timezone: "PST" },
  { id: 3, name: "London Office", address: "789 Oxford St, London, UK W1C 1AX", agents: 10, tickets: 156, timezone: "GMT" },
  { id: 4, name: "Tokyo Office", address: "321 Shibuya, Tokyo, Japan 150-0002", agents: 8, tickets: 98, timezone: "JST" },
  { id: 5, name: "Remote Workers", address: "Various locations", agents: 5, tickets: 45, timezone: "Various" },
];

export default function Locations() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="p-8 space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-semibold" data-testid="text-page-title">Locations</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Manage multiple office or service locations with associated agents and tickets
            </p>
          </div>
          <Button data-testid="button-add-location">
            <Plus className="h-4 w-4 mr-2" />
            Add Location
          </Button>
        </div>

        <div className="grid gap-4">
          {locations.map((location) => (
            <Card key={location.id} className="p-6 hover-elevate" data-testid={`card-location-${location.id}`}>
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-1">{location.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{location.address}</p>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-2xl font-bold">{location.agents}</p>
                        <p className="text-xs text-muted-foreground">Agents</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold">{location.tickets}</p>
                        <p className="text-xs text-muted-foreground">Tickets</p>
                      </div>
                      <Badge variant="outline">{location.timezone}</Badge>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" data-testid={`button-edit-${location.id}`}>
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" data-testid={`button-delete-${location.id}`}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
