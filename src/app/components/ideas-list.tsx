'use client';

import { useState } from 'react';
import Idea from './idea';

export default function IdeasList() {
  const [ideas, setIdeas] = useState<IIdea[]>([
    {
      id: 1,
      title: 'Idea 1',
      description: 'Description',
      lastUpdated: new Date(),
    },
    {
      id: 2,
      title: 'Idea 2',
      description: 'Description',
      lastUpdated: new Date(),
    },
    {
      id: 3,
      title: 'Idea 3',
      description: 'Description',
      lastUpdated: new Date(),
    },
    {
      id: 4,
      title: 'Idea 4',
      description: 'Description',
      lastUpdated: new Date(),
    },
    {
      id: 5,
      title: 'Idea 5',
      description: 'Description',
      lastUpdated: new Date(),
    },
  ]);

  return !ideas ? (
    <p>No items found</p>
  ) : (
    <>
      {ideas.map((idea, i) => (
        <Idea {...idea} />
      ))}
    </>
  );
}
