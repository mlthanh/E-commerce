import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Quicksand } from "next/font/google";
import { SessionProvider } from "next-auth/react";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-qs",
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <main className={`${quicksand.variable} font-quicksand`}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
}
