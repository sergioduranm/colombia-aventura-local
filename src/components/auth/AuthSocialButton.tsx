
import { Button } from "@/components/ui/button";
import { Apple, Mail, LucideIcon } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

interface AuthSocialButtonProps {
  children: React.ReactNode;
  icon: "google" | "apple" | "email";
  variant?: "default" | "outline";
  onClick: () => void;
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
  children,
  icon,
  variant = "default",
  onClick,
}) => {
  const renderIcon = () => {
    switch (icon) {
      case "google":
        return <FcGoogle className="h-5 w-5" />;
      case "apple":
        return <Apple className="h-5 w-5" />;
      case "email":
        return <Mail className="h-5 w-5" />;
    }
  };

  return (
    <Button
      variant={variant}
      className="w-full justify-center text-sm h-11 font-medium"
      onClick={onClick}
    >
      <span className="mr-2">{renderIcon()}</span>
      {children}
    </Button>
  );
};

export default AuthSocialButton;
