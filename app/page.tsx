"use client";

import { useEffect } from "react";
import TopologicalBackground from "@/app/TopologicalBackground";

export default function Home() {
  useEffect(() => {
    // Initialize any necessary effects here if needed
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center w-full bg-[#111111] text-white">
      <TopologicalBackground />
      <h1 className="text-8xl font-bold absolute">ALRT</h1>
    </main>
  );
}
