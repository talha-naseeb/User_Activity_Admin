import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail, MessageSquare, Activity } from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: Calendar,
      title: "Calendar Integration",
      description: "Schedule Google Calendar meetings seamlessly",
    },
    {
      icon: MessageSquare,
      title: "Slack Messaging",
      description: "Send messages directly to your Slack workspace",
    },
    {
      icon: Mail,
      title: "Email Management",
      description: "Reply to users and manage emails efficiently",
    },
    {
      icon: Activity,
      title: "Activity Tracking",
      description: "Monitor user interactions in real-time",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <div className="container mx-auto px-4 pt-20 pb-32 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 text-white animate-fade-in-up">
            All-in-One
            <br />
            <span className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-lg inline-block mt-2">
              Workspace Hub
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Manage your calendar, emails, and team communications in one beautiful platform
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Link to="/login">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 text-lg px-8">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/register">
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 backdrop-blur-sm text-white border-white/20 hover:bg-white/20 text-lg px-8"
              >
                Sign Up Free
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/15 transition-all hover:scale-105 shadow-card animate-fade-in-up"
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
