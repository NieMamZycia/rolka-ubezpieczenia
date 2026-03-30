"use client";

import { TinaCMS, TinaProvider } from "tinacms";
import dynamic from "next/dynamic";

const TinaAdmin = dynamic(
  () => import("tinacms").then((mod) => mod.TinaAdmin),
  { ssr: false }
);

export default function AdminPage() {
  const cms = new TinaCMS({
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID!,
    branch: process.env.NEXT_PUBLIC_TINA_BRANCH || "main",
    token: process.env.NEXT_PUBLIC_TINA_TOKEN!,
    isLocalClient: false,
    authProvider: {
      onLogin: async () => {
        console.log("TinaCMS: Login successful");
        return true;
      },
      onLogout: async () => {
        console.log("TinaCMS: Logout");
        window.location.href = '/';
      },
      authenticate: async () => {
        console.log("TinaCMS: Authenticating...");
        return true;
      },
    },
  });

  return (
    <TinaProvider cms={cms}>
      <div className="min-h-screen bg-white">
        <TinaAdmin />
      </div>
    </TinaProvider>
  );
}
