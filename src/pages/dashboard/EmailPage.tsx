import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const EmailPage = () => {
  const [recipient, setRecipient] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const { toast } = useToast();

  const handleSend = () => {
    toast({
      title: "Email Sent",
      description: `Your reply has been sent to ${recipient}`,
    });
    setRecipient("");
    setSubject("");
    setBody("");
  };

  const pendingEmails = [
    {
      from: "client@example.com",
      subject: "Project Update Request",
      preview: "Could you provide an update on the project status?",
      time: "2 hours ago",
      priority: "high",
    },
    {
      from: "team@company.com",
      subject: "Meeting Notes",
      preview: "Please review the attached meeting notes",
      time: "5 hours ago",
      priority: "medium",
    },
    {
      from: "vendor@supplier.com",
      subject: "Invoice #12345",
      preview: "Please find attached invoice for your review",
      time: "1 day ago",
      priority: "low",
    },
  ];

  return (
    <div className="p-8 animate-fade-in">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Email Replies</h1>
        <p className="text-muted-foreground text-lg">Manage and respond to emails</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Compose Reply</CardTitle>
            <CardDescription>Send an email response</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="recipient">To</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="recipient"
                  type="email"
                  placeholder="recipient@example.com"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input
                id="subject"
                placeholder="Email subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="body">Message</Label>
              <Textarea
                id="body"
                placeholder="Type your reply..."
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={8}
              />
            </div>
            <Button
              onClick={handleSend}
              className="w-full bg-gradient-primary hover:opacity-90"
            >
              <Send className="mr-2 h-4 w-4" />
              Send Email
            </Button>
          </CardContent>
        </Card>

        <Card className="shadow-card">
          <CardHeader>
            <CardTitle>Pending Emails</CardTitle>
            <CardDescription>Emails awaiting your response</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {pendingEmails.map((email, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors cursor-pointer"
                  onClick={() => {
                    setRecipient(email.from);
                    setSubject(`Re: ${email.subject}`);
                  }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-medium text-sm">{email.from}</p>
                        <Badge
                          variant={
                            email.priority === "high"
                              ? "destructive"
                              : email.priority === "medium"
                              ? "default"
                              : "secondary"
                          }
                          className="text-xs"
                        >
                          {email.priority}
                        </Badge>
                      </div>
                      <p className="text-sm font-medium">{email.subject}</p>
                    </div>
                    <span className="text-xs text-muted-foreground">{email.time}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{email.preview}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default EmailPage;
