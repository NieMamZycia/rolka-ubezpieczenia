"use client";

import { useTina } from "tinacms/dist/react";
import { client } from "@/tina/__generated__/client";
import dynamic from "next/dynamic";

const TinaAdmin = dynamic(
  () => import("tinacms").then((mod) => mod.TinaAdmin),
  { ssr: false }
);

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-white">
      <TinaAdmin />
    </div>
  );
}
