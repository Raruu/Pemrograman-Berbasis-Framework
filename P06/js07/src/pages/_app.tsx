import AppShell from "@/components/layout/AppShell";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

const publicRoutes = ["/auth/login", "/auth/register"];

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const routerRef = useRef(router);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const isPublicRoute = publicRoutes.includes(router.pathname);

    if (!isLoggedIn && !isPublicRoute) {
      routerRef.current.push("/auth/login");
    }
  }, [router.pathname]);

  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
}
