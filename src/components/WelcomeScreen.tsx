import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, LogOut, Settings, Bell } from "lucide-react";

interface WelcomeScreenProps {
  userEmail: string;
  onLogout: () => void;
}

export function WelcomeScreen({ userEmail, onLogout }: WelcomeScreenProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-accent/5">
      <header className="bg-white/80 backdrop-blur-sm border-b border-border/50 px-4 py-4">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="font-semibold text-lg">Welcome!</h1>
              <p className="text-sm text-muted-foreground truncate max-w-[200px]">
                {userEmail}
              </p>
            </div>
          </div>
          <Button variant="ghost" size="icon" onClick={onLogout}>
            <LogOut className="w-5 h-5" />
          </Button>
        </div>
      </header>

      <main className="px-4 py-8 max-w-md mx-auto space-y-6">
        <Card className="shadow-lg border-0">
          <CardHeader>
            <CardTitle className="text-xl">Dashboard</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Bell className="w-6 h-6" />
                <span className="text-xs">Notifications</span>
              </Button>
              <Button variant="outline" className="h-20 flex-col space-y-2">
                <Settings className="w-6 h-6" />
                <span className="text-xs">Settings</span>
              </Button>
            </div>
            
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-4 text-center">
              <h3 className="font-semibold mb-2">You're all set!</h3>
              <p className="text-sm text-muted-foreground">
                This is your mobile app dashboard. Start building amazing features!
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-lg border-0">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-3">
              <Button variant="secondary" className="w-full justify-start">
                View Profile
              </Button>
              <Button variant="secondary" className="w-full justify-start">
                Account Settings
              </Button>
              <Button variant="secondary" className="w-full justify-start">
                Help & Support
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}