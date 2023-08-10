import IdeasList from '@/components/ideas-list';
import { Suspense } from 'react';

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
