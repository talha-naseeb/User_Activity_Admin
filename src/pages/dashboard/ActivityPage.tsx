import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Eye, MousePointer, LogIn, FileText, Calendar } from "lucide-react";

const ActivityPage = () => {
  const activities = [
    {
      user: "John Doe",
      action: "viewed",
      target: "Dashboard Overview",
      time: "2 minutes ago",
      icon: Eye,
      color: "text-primary",
    },
    {
      user: "Jane Smith",
      action: "clicked",
      target: "Schedule Meeting Button",
      time: "5 minutes ago",
      icon: MousePointer,
      color: "text-accent",
    },
    {
      user: "Mike Johnson",
      action: "logged in",
      target: "Platform",
      time: "10 minutes ago",
      icon: LogIn,
      color: "text-primary",
    },
    {
      user: "Sarah Williams",
      action: "viewed",
      target: "Email Replies Page",
      time: "15 minutes ago",
      icon: Eye,
      color: "text-primary",
    },
    {
      user: "Tom Brown",
      action: "created",
      target: "New Calendar Event",
      time: "20 minutes ago",
      icon: Calendar,
      color: "text-accent",
    },
    {
      user: "Emily Davis",
      action: "viewed",
      target: "User Activity Report",
      time: "25 minutes ago",
      icon: FileText,
      color: "text-primary",
    },
  ];

  const stats = {
    totalViews: 1234,
    activeUsers: 156,
    totalActions: 456,
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <div className="p-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">User Activity</h1>
        <p className="text-muted-foreground text-lg">Monitor real-time user interactions</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Views</CardTitle>
            <Eye className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalViews}</div>
            <p className="text-xs text-muted-foreground">+180 from last hour</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Users</CardTitle>
            <LogIn className="h-4 w-4 text-accent" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.activeUsers}</div>
            <p className="text-xs text-muted-foreground">Currently online</p>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Actions</CardTitle>
            <MousePointer className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalActions}</div>
            <p className="text-xs text-muted-foreground">In the last hour</p>
          </CardContent>
        </Card>
      </div>

      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Live Activity Feed</CardTitle>
          <CardDescription>Real-time user actions across the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-4 rounded-lg hover:bg-secondary transition-colors"
              >
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-gradient-primary text-white">
                    {getInitials(activity.user)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium">{activity.user}</p>
                    <Badge variant="secondary" className="text-xs">
                      {activity.action}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.target}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <activity.icon className={`h-4 w-4 ${activity.color}`} />
                  <span>{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActivityPage;
