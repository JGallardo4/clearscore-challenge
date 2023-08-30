'use client';

import { Idea } from '@/components/idea';
import { NewIdea } from './new-idea';
import { useState } from 'react';

export default function IdeasList() {
  const [ideas, setIdeas] = useState<IIdea[]>([
    {
      id: 1,
      title: "My first idea",
      description: "This is the first idea",
      lastUpdated: new Date()
    }]);

  function addIdea(idea: IIdea) {
    setIdeas([...ideas, { ...idea, lastUpdated: new Date() }])
  }

  function removeIdea(ideaId: number) {
    setIdeas(ideas.filter((idea) => idea.id != ideaId))
  }

  return (
    <>
      <NewIdea addIdea={addIdea} />

      ideas ?
      {ideas.map((idea, i) => (
        <Idea idea={idea} removeIdea={removeIdea} key={i} />
      ))}
      :
      <p>No items found</p>
    </>
  );
}
