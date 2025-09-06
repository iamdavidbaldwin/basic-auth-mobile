import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, UserPlus } from "lucide-react";
import { Link } from "react-router-dom";
import type { User, Session } from "@supabase/supabase-js";

const Index = () => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);

  // Set up auth state listener
  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  if (user) {
    return <WelcomeScreen userEmail={user.email || ""} onLogout={handleLogout} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-primary/80 to-accent flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-2xl border-0">
        <CardHeader className="space-y-4 text-center pb-8">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto flex items-center justify-center">
            <UserPlus className="w-8 h-8 text-primary-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">Welcome</CardTitle>
          <CardDescription className="text-base">
            Get started by signing in or creating an account
          </CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <Link to="/auth">
            <Button
              variant="default"
              size="lg"
              className="w-full h-12 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
            >
              <LogIn className="w-4 h-4 mr-2" />
              Get Started
            </Button>
          </Link>
          
          <div className="text-center text-sm text-muted-foreground">
            Sign in to access your personalized dashboard
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;
