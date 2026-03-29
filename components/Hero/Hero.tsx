import React from "react";
import IssueSpan from "./issue-span";
import { Card } from "../ui/card";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative px-7 py-16 text-foreground">
      <IssueSpan />
      <Card className="relative w-full pt-0 border-border border-heavy shadow-hard">
        <img
          src="https://avatar.vercel.sh/shadcn1"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <div className="flex flex-col gap-6 p-4">
          <h1 className="font-serif text-7xl font-bold">
            The Death of the{" "}
            <span className="flex flex-col text-secondary">
              Algorithm{" "}
              <span className="h-2 bg-accent w-full -z-10 max-w-80"></span>
            </span>
          </h1>
          <p className="text-xl leading-8">
            A deep dive into why curation is the only currency that matters in
            an age of automated mediocrity. We explore the triggers of digital
            identity.
          </p>
        </div>
      </Card>
      <Card className="relative w-full pt-0 p-[32px] border-border border-heavy shadow-hard bg-accent">
        <div>
          <h2 className="text-2xl font-bold font-mono">MANIFESTO_NULL</h2>
          <div className="h-1 bg-foreground max-w-52"></div>
        </div>
        <p className="leading-[17.5px] font-mono">
          {`"We reject the rounded corner. We reject the subtle gradient. We demand visual friction as a catalyst for conscious thought."`}
        </p>
      </Card>
      <Card className="relative w-full pt-0 p-[32px] border-border border-heavy shadow-hard bg-muted">
        <h2 className="font-mono font-bold text-xs">FEATURED_ARTIFACT</h2>
        <img
          src="https://avatar.vercel.sh/shadcn1"
          alt="Event cover"
          className="relative z-20 aspect-video w-full object-cover brightness-60 grayscale dark:brightness-40"
        />
        <p className="font-mono text-sm font-bold">ARCHIVE_TYPE: 04-A</p>
      </Card>
    </section>
  );
}
