import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { TopBar } from "@/components/TopBar";
import { ThemeProvider } from "@/components/ThemeProvider";
import NotFound from "@/pages/not-found";
import Dashboard from "@/pages/Dashboard";
import Inbox from "@/pages/Inbox";
import Tickets from "@/pages/Tickets";
import Assignment from "@/pages/Assignment";
import Topics from "@/pages/Topics";
import Statuses from "@/pages/Statuses";
import SLA from "@/pages/SLA";
import Automation from "@/pages/Automation";
import SavedAnswers from "@/pages/SavedAnswers";
import Teamwork from "@/pages/Teamwork";
import JointEditing from "@/pages/JointEditing";
import EmailIntegration from "@/pages/EmailIntegration";
import Notifications from "@/pages/Notifications";
import MSPs from "@/pages/MSPs";
import Companies from "@/pages/Companies";
import Agents from "@/pages/Agents";
import Users from "@/pages/Users";
import Contacts from "@/pages/Contacts";
import Assets from "@/pages/Assets";
import Locations from "@/pages/Locations";
import Authorization from "@/pages/Authorization";
import Reports from "@/pages/Reports";
import JobMonitoring from "@/pages/JobMonitoring";
import PasswordBank from "@/pages/PasswordBank";
import Account from "@/pages/Account";
import Settings from "@/pages/Settings";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Dashboard} />
      <Route path="/inbox" component={Inbox} />
      <Route path="/tickets" component={Tickets} />
      <Route path="/assignment" component={Assignment} />
      <Route path="/topics" component={Topics} />
      <Route path="/statuses" component={Statuses} />
      <Route path="/sla" component={SLA} />
      <Route path="/automation" component={Automation} />
      <Route path="/saved-answers" component={SavedAnswers} />
      <Route path="/teamwork" component={Teamwork} />
      <Route path="/joint-editing" component={JointEditing} />
      <Route path="/email-integration" component={EmailIntegration} />
      <Route path="/notifications" component={Notifications} />
      <Route path="/msps" component={MSPs} />
      <Route path="/companies" component={Companies} />
      <Route path="/agents" component={Agents} />
      <Route path="/users" component={Users} />
      <Route path="/contacts" component={Contacts} />
      <Route path="/assets" component={Assets} />
      <Route path="/locations" component={Locations} />
      <Route path="/authorization" component={Authorization} />
      <Route path="/reports" component={Reports} />
      <Route path="/job-monitoring" component={JobMonitoring} />
      <Route path="/password-bank" component={PasswordBank} />
      <Route path="/account" component={Account} />
      <Route path="/settings" component={Settings} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const style = {
    "--sidebar-width": "16rem",
    "--sidebar-width-icon": "3rem",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <SidebarProvider style={style as React.CSSProperties}>
            <div className="flex h-screen w-full">
              <AppSidebar />
              <div className="flex flex-col flex-1 overflow-hidden">
                <TopBar />
                <Router />
              </div>
            </div>
          </SidebarProvider>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
