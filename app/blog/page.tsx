import React from "react";
import { BlockRenderer } from "@/components/Hero/BlockRenderer";
import { logs } from "@/data/data";
import LogCard from "@/components/Cards/LogCard";

const post = logs[0];

export default function page() {
  return (
    <main
      className={`min-h-screen ${
        post.theme === "primary" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <BlockRenderer blocks={post.blocks} />
      <LogCard card={post} />
    </main>
  );
}
