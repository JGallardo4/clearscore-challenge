"use client";

import { Idea } from "src/components/idea";
import { useIdeasContext } from "src/contexts/context";
import { NewIdea } from "./new-idea";

export default function IdeasList() {
  const {ideas, setIdeas} = useIdeasContext();

  function addIdea(idea: IIdea) {
    setIdeas([
      ...ideas,
      { ...idea, lastUpdated: new Date() },
    ]);
  }

  function removeIdea(ideaId: number) {
    setIdeas(
      ideas.filter((idea: IIdea) => idea.id != ideaId),
    );
  }

  return (
    <>
      <NewIdea addIdea={addIdea} />
      ideas ?
      {ideas.map((idea: IIdea, i: number) => (
        <Idea idea={idea} removeIdea={removeIdea} key={i} />
      ))}
      :<p>No items found</p>
    </>
  );
}
