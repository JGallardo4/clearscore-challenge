'use client';

import { useIdeasContext } from 'src/contexts/IdeasContext';
import Idea from './idea';
import IdeaForm from './idea-form';

function NewIdea() {
  return (
    <IdeaForm
      isNewIdea={true}
      ideaId={5}
    />
  );
}

export default function IdeasList() {
  const { ideas } = useIdeasContext();

  return (
    <>
      <NewIdea />
      {ideas ? (
        ideas.map((idea: IIdea) => <Idea ideaId={idea.id} />)
      ) : (
        <p>No items found</p>
      )}
    </>
  );
}
