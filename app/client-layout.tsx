// app/client-layout.tsx
"use client";

import { useEffect, useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setShowSplash(false), 1200); // 1.2s splash
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {showSplash && <LoadingScreen />}
      {children}
    </>
  );
}
