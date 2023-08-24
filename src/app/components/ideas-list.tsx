'use client';

import Idea from './idea';
import * as Yup from 'yup';
import NewIdea from './new-idea';

export default function IdeasList() {
  const ideas = [
    {
      id: 1,
      title: "My first idea",
      description: "This is the first idea",
      lastUpdated: new Date()
    }];

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
      <NewIdea />
      {ideas.map((idea, i) => (
        <Idea key={i} {...idea} />
      ))}
    </>
  );
}
