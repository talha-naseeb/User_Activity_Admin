import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Hash } from "lucide-react";

const SlackPage = () => {
  const [channel, setChannel] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSend = () => {
    toast({
      title: "Message Sent",
      description: `Your message has been sent to #${channel}`,
    });
    setChannel("");
    setMessage("");
  };

  const recentMessages = [
    { channel: "general", user: "John Doe", message: "Great work everyone!", time: "5 min ago" },
    { channel: "dev-team", user: "Jane Smith", message: "Deployment successful", time: "15 min ago" },
    { channel: "marketing", user: "Mike Johnson", message: "New campaign is live", time: "1 hour ago" },
  ];

  return (
    <div className="p-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Slack Messages</h1>
        <p className="text-muted-foreground text-lg">Send and manage Slack communications</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Send Message</CardTitle>
            <CardDescription>Post a message to a Slack channel</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="channel">Channel</Label>
              <div className="relative">
                <Hash className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="channel"
                  placeholder="general"
                  value={channel}
                  onChange={(e) => setChannel(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
              />
            </div>
            <Button
              onClick={handleSend}
              className="w-full bg-gradient-primary hover:opacity-90"
            >
              <Send className="mr-2 h-4 w-4" />
              Send to Slack
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Recent Messages</CardTitle>
            <CardDescription>Latest Slack activity</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentMessages.map((msg, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">#{msg.channel}</span>
                    <span className="text-xs text-muted-foreground">{msg.time}</span>
                  </div>
                  <p className="text-sm mb-1">{msg.message}</p>
                  <p className="text-xs text-muted-foreground">— {msg.user}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SlackPage;
