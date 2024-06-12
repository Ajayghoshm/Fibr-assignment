import { useRouter } from "next/navigation";
import { useAuth } from "./AuthContext";
import { useEffect } from "react";

export const ProtectedRoute = (WrappedComponent) => {
    return (props) => {
      const { user } = useAuth();
      const router = useRouter();
  
      useEffect(() => {
        if (!user) {
          router.push('/login');
        }
      }, [user, router]);
  
      if (!user) {
        // Display a message or loading indicator while redirecting
        return <div>Redirecting to login page...</div>;
      }
  
      return <WrappedComponent {...props} />;
    };
  };