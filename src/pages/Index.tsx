import { useState } from "react";
import { LoginForm } from "@/components/LoginForm";
import { WelcomeScreen } from "@/components/WelcomeScreen";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = (email: string) => {
    setUserEmail(email);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserEmail("");
  };

  if (isLoggedIn) {
    return <WelcomeScreen userEmail={userEmail} onLogout={handleLogout} />;
  }

  return <LoginForm onLogin={handleLogin} />;
};

export default Index;
