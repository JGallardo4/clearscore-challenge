"use client";

import IdeasList from "src/components/ideas-list";
import { Suspense, useState } from "react";
import { IdeasContext } from "../contexts/context";

export default function Home() {
  return (
    <main>
      <h1>Ideas</h1>
      <section>
        <Suspense fallback={<p>Loading ideas...</p>}>
            <IdeasList />
        </Suspense>
      </section>
    </main>
  );
}
