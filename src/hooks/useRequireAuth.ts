import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext";

export function useRequireAuth(requiredRole?: "PCD" | "empresa") {
  const { user, isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        router.push("/login");
        return;
      }

      if (requiredRole && user?.tipo !== requiredRole) {
        router.push("/");
        return;
      }
    }
  }, [isAuthenticated, loading, user, requiredRole, router]);

  return { user, isAuthenticated, loading };
} 