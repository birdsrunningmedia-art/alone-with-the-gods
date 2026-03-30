import React from "react";
import { BlockRenderer } from "@/components/BlockRenderer";
import { logs } from "@/data/data";

const post = logs[0];

export default function page() {
  return (
    <main
      className={`min-h-screen ${
        post.theme === "primary" ? " text-black" : "bg-white text-black"
      }`}
    >
      <BlockRenderer blocks={post.blocks} />
    </main>
  );
}
