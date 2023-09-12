'use client';

import IdeasList from '@/components/ideas-list';
import IdeasContextProvider from '@/contexts/IdeasContext';
import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <h1>Ideas</h1>
      <section>
        <Suspense fallback={<p>Loading ideas...</p>}>
          <IdeasContextProvider>
            <IdeasList />
          </IdeasContextProvider>
        </Suspense>
      </section>
    </main>
  );
}
