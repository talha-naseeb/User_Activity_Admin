import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Mail, MessageSquare, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Scheduled Meetings",
    value: "12",
    description: "This week",
    icon: Calendar,
    color: "text-primary",
  },
  {
    title: "Slack Messages",
    value: "48",
    description: "Unread messages",
    icon: MessageSquare,
    color: "text-accent",
  },
  {
    title: "Email Replies",
    value: "23",
    description: "Pending responses",
    icon: Mail,
    color: "text-destructive",
  },
  {
    title: "Active Users",
    value: "156",
    description: "+12% from last week",
    icon: TrendingUp,
    color: "text-primary",
  },
];

const Overview = () => {
  return (
    <div className="p-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Welcome Back!</h1>
        <p className="text-muted-foreground text-lg">Here's what's happening with your workspace</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <Card key={stat.title} className="shadow-card hover:shadow-soft transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions across your workspace</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex items-start gap-4 p-3 rounded-lg hover:bg-secondary transition-colors">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                  <div className="flex-1">
                    <p className="text-sm font-medium">User action {i}</p>
                    <p className="text-xs text-muted-foreground">{i} minutes ago</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Frequently used features</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <button className="w-full p-4 text-left rounded-lg bg-gradient-primary text-white hover:opacity-90 transition-opacity">
                <p className="font-medium">Schedule New Meeting</p>
                <p className="text-sm opacity-90">Add to Google Calendar</p>
              </button>
              <button className="w-full p-4 text-left rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <p className="font-medium">Send Slack Message</p>
                <p className="text-sm text-muted-foreground">Quick message to team</p>
              </button>
              <button className="w-full p-4 text-left rounded-lg bg-secondary hover:bg-secondary/80 transition-colors">
                <p className="font-medium">Reply to Email</p>
                <p className="text-sm text-muted-foreground">Respond to pending emails</p>
              </button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Overview;
