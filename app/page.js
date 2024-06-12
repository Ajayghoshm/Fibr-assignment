'use client'
import { AuthProvider } from "@/components/AuthContext";
import Dashboard from "./dashboard/page";

export default function Home() {

  return (
    <AuthProvider>
      <div>
        <Dashboard />
        <footer>
          Developed by Ajayghosh M
        </footer>
      </div>
    </AuthProvider>
  );
}
