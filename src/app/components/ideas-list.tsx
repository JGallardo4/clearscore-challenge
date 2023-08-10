import db from '@/data/ideas.json';

export default async function IdeasList() {
  return (
    <section>
      <header>
        <h2>Ideas</h2>
      </header>
      <main>
        {!db ? (
          <p>No items found</p>
        ) : (
          db.ideas.map((idea, i) => (
            <article key={i}>
              <h1>{idea.title}</h1>
              <p>{idea.description}</p>
              <p>
                Created: <time dateTime={idea.created}>{idea.created}</time>
              </p>
            </article>
          ))
        )}
      </main>
    </section>
  );
}
