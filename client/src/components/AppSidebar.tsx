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

const menuItems = [
  {
    title: "Overview",
    items: [
      { title: "Dashboard", url: "/", icon: BarChart3 },
    ],
  },
  {
    title: "Tickets",
    items: [
      { title: "Inbox", url: "/inbox", icon: Inbox },
      { title: "All Tickets", url: "/tickets", icon: Ticket },
      { title: "Assignment", url: "/assignment", icon: UserCheck },
      { title: "Topics", url: "/topics", icon: Tags },
      { title: "Statuses", url: "/statuses", icon: CheckCircle },
    ],
  },
  {
    title: "Automation",
    items: [
      { title: "SLA Management", url: "/sla", icon: Clock },
      { title: "Automation Rules", url: "/automation", icon: Zap },
      { title: "Saved Answers", url: "/saved-answers", icon: MessageSquare },
    ],
  },
  {
    title: "Collaboration",
    items: [
      { title: "Teamwork", url: "/teamwork", icon: Users },
      { title: "Joint Editing", url: "/joint-editing", icon: GitMerge },
    ],
  },
  {
    title: "Integration",
    items: [
      { title: "Email Integration", url: "/email-integration", icon: Mail },
      { title: "Notifications", url: "/notifications", icon: Bell },
    ],
  },
  {
    title: "Management",
    items: [
      { title: "MSPs", url: "/msps", icon: Building },
      { title: "Companies", url: "/companies", icon: Building2 },
      { title: "Agents", url: "/agents", icon: UserCog },
      { title: "Users", url: "/users", icon: UsersRound },
      { title: "Contacts", url: "/contacts", icon: BookUser },
      { title: "Assets", url: "/assets", icon: Package },
      { title: "Locations", url: "/locations", icon: MapPin },
    ],
  },
  {
    title: "System",
    items: [
      { title: "Authorization", url: "/authorization", icon: Shield },
      { title: "Reports", url: "/reports", icon: FileText },
      { title: "Job Monitoring", url: "/job-monitoring", icon: Activity },
      { title: "Password Bank", url: "/password-bank", icon: Key },
      { title: "Account", url: "/account", icon: UserCircle },
      { title: "Settings", url: "/settings", icon: Settings },
    ],
  },
];

export function AppSidebar() {
  const [location] = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary">
            <Ticket className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold">HelpDesk</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {menuItems.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel>{group.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={location === item.url}
                      data-testid={`link-${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      <Link href={item.url}>
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="flex items-center gap-3 rounded-md border p-3 hover-elevate">
          <Avatar className="h-8 w-8">
            <AvatarImage src="" />
            <AvatarFallback className="bg-primary text-primary-foreground text-xs">
              AD
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground truncate">admin@helpdesk.com</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
