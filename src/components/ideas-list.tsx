"use client";

import { Idea } from "src/components/idea";
import { IdeasContext } from "src/contexts/context";
import { useContext } from "react";
import { NewIdea } from "./new-idea";

export default function IdeasList() {
  const ideasContext = useContext(IdeasContext);
  if (!ideasContext) {
    throw new Error("IdeasContext should be used within IdeasContextProvider");
  }

  function addIdea(idea: IIdea) {
    ideasContext.setIdeas([
      ...ideasContext.ideas,
      { ...idea, lastUpdated: new Date() },
    ]);
  }

  function removeIdea(ideaId: number) {
    ideasContext.setIdeas(
      ideasContext.ideas.filter((idea: IIdea) => idea.id != ideaId),
    );
  }

  return (
    <>
      <NewIdea addIdea={addIdea} />
      ideas ?
      {ideasContext?.ideas.map((idea: IIdea, i: number) => (
        <Idea idea={idea} removeIdea={removeIdea} key={i} />
      ))}
      :<p>No items found</p>
    </>
  );
}
