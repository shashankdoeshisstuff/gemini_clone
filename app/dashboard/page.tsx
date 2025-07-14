"use client"

import { redirect } from "next/navigation";
import { useAuthStore } from "@/lib/stores/authStore";
import DashboardLayout from "./DashboardLayout";

export default function DashboardPage() {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  
  if (!isAuthenticated) {
    redirect("/login");
  }

  return <DashboardLayout />;
}