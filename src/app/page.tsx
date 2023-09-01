"use client";

import IdeasList from "src/components/ideas-list";
import { Suspense, useState } from "react";
import { IdeasContext } from "../contexts/context";

export default function Home() {
  const [ideas, setIdeas] = useState<IIdea[]>([
    {
      id: 1,
      title: "My first idea",
      description: "This is the first idea",
      lastUpdated: new Date(),
    },
  ]);

  return (
    <main>
      <h1>Ideas</h1>
      <section>
        <Suspense fallback={<p>Loading ideas...</p>}>
          <IdeasContext.Provider value={{ ideas, setIdeas }}>
            <IdeasList />
          </IdeasContext.Provider>
        </Suspense>
      </section>
    </main>
  );
}
