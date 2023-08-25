'use client';

import { Idea } from '@/components/idea';
import * as Yup from 'yup';
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

  const MAX_CHARACTERS_DESCRIPTION = 140;
  const ideaSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    description: Yup.string()
      .min(2, 'Too Short!')
      .max(
        MAX_CHARACTERS_DESCRIPTION,
        `Please enter a maximum of ${MAX_CHARACTERS_DESCRIPTION} characters`
      )
      .required('Required'),
    lastUpdated: Yup.date(),
  });

  return !ideas ? (
    <p>No items found</p>
  ) : (
    <>
      <NewIdea addIdea={addIdea} />
      {ideas.map((idea, i) => (
        <Idea idea={idea} removeIdea={removeIdea} key={i} />
      ))}
    </>
  );
}
