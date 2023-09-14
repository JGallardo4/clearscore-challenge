'use client';

import styles from '@/styles/idea.module.sass';
import { useIdeasContext } from '@/contexts/IdeasContext';
import IdeaForm from './idea-form';

type IdeaProps = { ideaId: number };
export default function Idea({ ideaId }: IdeaProps) {
  const { ideas, setIdeas } = useIdeasContext();
  const idea = ideas.find((i) => i.id === ideaId);

  if (idea === undefined) {
    throw new Error(`Idea ID: ${ideaId} does not exist:\n${ideas}`);
  }

  function removeIdea(ideaId: number) {
    setIdeas(ideas.filter((idea: IIdea) => idea.id != ideaId));
  }

  return (
    <>
      <IdeaForm isNewIdea={false} ideaId={idea.id} />

      <article className={styles.idea}>
        <button
          className={styles.deleteButton}
          onClick={() => removeIdea(idea.id)}
        >
          Delete
        </button>

        {/* Title */}
        <div className={styles.labelContainer}>
          <p className={styles.title}>{idea.title}</p>
        </div>

        {/* Description */}
        <div className={styles.labelContainer}>
          <p className={styles.description}>{idea.description}</p>
        </div>

        {/* Last Updated */}
        <p className={styles.lastUpdated}>
          {idea.lastUpdated.toLocaleString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
          })}
        </p>
      </article>
    </>
  );
}
