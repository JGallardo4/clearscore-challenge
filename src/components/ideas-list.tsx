'use client';

import { useEffect, useState } from 'react';
import { useIdeasContext } from 'src/contexts/IdeasContext';
import Idea from './idea';
import IdeaForm from './idea-form';

function NewIdea() {
  return <IdeaForm isNewIdea={true} ideaId={5} />;
}

export default function IdeasList() {
  const { ideas, setIdeas } = useIdeasContext();
  const [sortType, setSortType] = useState('title');

  useEffect(() => {
    let sortedIdeas: IIdea[] = [];

    switch (sortType) {
      case 'title':
        sortedIdeas = [...ideas].sort((a, b) => {
          return a.title.toLowerCase().localeCompare(b.title.toLowerCase());
        });
        break;
      case 'lastUpdatedAscending':
        sortedIdeas = ideas.sort((a, b) => {
          return a.lastUpdated.getTime() - b.lastUpdated.getTime();
        });
        break;
      case 'lastUpdatedDescending':
        sortedIdeas = ideas.sort((b, a) => {
          return a.lastUpdated.getTime() - b.lastUpdated.getTime();
        });
        break;
    }
    setIdeas(sortedIdeas);
  }, [sortType]);

  return (
    <>
      <NewIdea />

      <div>
        <p>Sort by:</p>
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value='title'>Alphabetically by title</option>
          <option value='lastUpdatedAscending'>Last Updated Ascending</option>
          <option value='lastUpdatedDescending'>Last Updated Descending</option>
        </select>
      </div>

      {ideas ? (
        ideas.map((idea: IIdea) => <Idea ideaId={idea.id} />)
      ) : (
        <p>No items found</p>
      )}
    </>
  );
}
