import { Link, useLocation } from "wouter";
import {
  BarChart3,
  Inbox,
  UserCheck,
  Tags,
  Clock,
  CheckCircle,
  Zap,
  MessageSquare,
  Users,
  GitMerge,
  Mail,
  Bell,
  Shield,
  FileText,
  Building,
  UserCog,
  UsersRound,
  Ticket,
  Package,
  BookUser,
  Settings,
  UserCircle,
  Activity,
  Key,
  MapPin,
  Building2,
  ChevronRight,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const menuItems = [
  {
    title: "Overview",
    items: [
      { title: "Dashboard", url: "/", icon: BarChart3, description: "Analytics and metrics overview" },
    ],
  },
  {
    title: "Tickets",
    items: [
      { title: "Inbox", url: "/inbox", icon: Inbox, description: "View and manage incoming tickets", badge: "3" },
      { title: "All Tickets", url: "/tickets", icon: Ticket, description: "Complete ticket list" },
      { title: "Assignment", url: "/assignment", icon: UserCheck, description: "Assign tickets to agents" },
      { title: "Topics", url: "/topics", icon: Tags, description: "Categorize by topics" },
      { title: "Statuses", url: "/statuses", icon: CheckCircle, description: "Manage ticket statuses" },
    ],
  },
  {
    title: "Automation",
    items: [
      { title: "SLA Management", url: "/sla", icon: Clock, description: "Service level agreements" },
      { title: "Automation Rules", url: "/automation", icon: Zap, description: "Automate workflows" },
      { title: "Saved Answers", url: "/saved-answers", icon: MessageSquare, description: "Quick response templates" },
    ],
  },
  {
    title: "Collaboration",
    items: [
      { title: "Teamwork", url: "/teamwork", icon: Users, description: "Team collaboration tools" },
      { title: "Joint Editing", url: "/joint-editing", icon: GitMerge, description: "Collaborative editing" },
    ],
  },
  {
    title: "Integration",
    items: [
      { title: "Email Integration", url: "/email-integration", icon: Mail, description: "Connect email accounts" },
      { title: "Notifications", url: "/notifications", icon: Bell, description: "Manage notification settings" },
    ],
  },
  {
    title: "Management",
    items: [
      { title: "MSPs", url: "/msps", icon: Building, description: "Managed service providers" },
      { title: "Companies", url: "/companies", icon: Building2, description: "Company directory" },
      { title: "Agents", url: "/agents", icon: UserCog, description: "Support agent management" },
      { title: "Users", url: "/users", icon: UsersRound, description: "User account management" },
      { title: "Contacts", url: "/contacts", icon: BookUser, description: "Contact information" },
      { title: "Assets", url: "/assets", icon: Package, description: "Asset tracking" },
      { title: "Locations", url: "/locations", icon: MapPin, description: "Location management" },
    ],
  },
  {
    title: "System",
    items: [
      { title: "Authorization", url: "/authorization", icon: Shield, description: "Role-based access control" },
      { title: "Reports", url: "/reports", icon: FileText, description: "Analytics and reports" },
      { title: "Job Monitoring", url: "/job-monitoring", icon: Activity, description: "Background task monitoring" },
      { title: "Password Bank", url: "/password-bank", icon: Key, description: "Secure credential storage" },
      { title: "Account", url: "/account", icon: UserCircle, description: "Personal account settings" },
      { title: "Settings", url: "/settings", icon: Settings, description: "System configuration" },
    ],
  },
];

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Link href="/">
          <div 
            className="flex items-center gap-2 hover-elevate active-elevate-2 rounded-md p-2 -m-2 cursor-pointer transition-all duration-200" 
            role="banner" 
            aria-label="HelpDesk Application - Go to Dashboard"
            data-testid="link-logo"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary transition-all duration-200 shadow-sm">
              <Ticket className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
            </div>
            <span className="text-lg font-semibold tracking-tight">HelpDesk</span>
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <nav aria-label="Main navigation">
          {menuItems.map((group) => (
            <SidebarGroup key={group.title}>
              <SidebarGroupLabel 
                className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-2"
                role="heading"
                aria-level={2}
              >
                {group.title}
              </SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {group.items.map((item) => {
                    const isActive = location === item.url;
                    return (
                      <SidebarMenuItem key={item.title}>
                        <SidebarMenuButton
                          asChild
                          isActive={isActive}
                          data-testid={`link-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                          className="min-h-11 transition-all duration-200 cursor-pointer group relative"
                          title={item.description}
                        >
                          <Link 
                            href={item.url}
                            aria-label={`${item.title}: ${item.description}`}
                            aria-current={isActive ? "page" : undefined}
                          >
                            <item.icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" aria-hidden="true" />
                            <span className="flex-1">{item.title}</span>
                            {item.badge && (
                              <Badge 
                                variant="default" 
                                className="ml-auto h-5 min-w-5 px-1.5 text-xs font-medium"
                                data-testid={`badge-${item.title.toLowerCase().replace(/\s+/g, "-")}-count`}
                                aria-label={`${item.badge} unread items`}
                              >
                                {item.badge}
                              </Badge>
                            )}
                            {isActive && (
                              <ChevronRight 
                                className="h-4 w-4 text-primary ml-auto opacity-70" 
                                aria-hidden="true" 
                              />
                            )}
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </nav>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <button 
          className="flex items-center gap-3 rounded-md border p-3 hover-elevate active-elevate-2 w-full text-left transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          aria-label="User account menu for Admin User - Click to view profile options"
          data-testid="button-user-account"
          role="menuitem"
        >
          <Avatar className="h-9 w-9 transition-transform duration-200 ring-2 ring-transparent hover:ring-primary/20">
            <AvatarImage src="" alt="Admin User avatar" />
            <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
              AD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium leading-tight">Admin User</p>
            <p className="text-xs text-muted-foreground truncate leading-tight mt-0.5">admin@helpdesk.com</p>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground opacity-50" aria-hidden="true" />
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
