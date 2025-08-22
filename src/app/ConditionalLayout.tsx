"use client";

import Footer from "@/components/layout/foooter";
import Header from "@/components/layout/header";
import SplashScreen from "@/components/SplashScreen";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const isLogin = pathName === "/login";
  const isAskAI = pathName === "/ask-ai";

  const isHeader = isLogin || isAskAI;

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  if (isHeader) {
    return <main>{children}</main>;
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
