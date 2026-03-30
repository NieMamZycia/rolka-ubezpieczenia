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
    isLocalClient: false,
  });

  return (
    <TinaProvider cms={cms}>
      <div className="min-h-screen bg-white">
        <TinaAdmin />
      </div>
    </TinaProvider>
  );
}
