import type { AppProps } from "next/app";
// import Navbar from "@/components/layouts/navbar";
import { SessionProvider } from "next-auth/react";
import AppShell from "@/components/layout/AppShell";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={pageProps.session}>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </SessionProvider>
  );
}
