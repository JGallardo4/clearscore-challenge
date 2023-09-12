import { useFormik } from 'formik';
import styles from '@/styles/idea.module.sass';
import { useState } from 'react';
import { useIdeasContext } from '@/contexts/IdeasContext';

type IdeaFormProps = {
  isNewIdea: boolean;
  ideaId: number;
};

export default function IdeaForm({ isNewIdea, ideaId }: IdeaFormProps) {
  const MAX_CHARACTERS_DESCRIPTION = 140;
  const [isOpen, setIsOpen] = useState(false);
  const { ideas, setIdeas } = useIdeasContext();

  let initialValues: { title: string; description: string } = {
    title: 'New title',
    description: 'New description',
  };

  const idea = ideas.find((i) => i.id === ideaId);
  if (!isNewIdea && idea !== undefined) {
    initialValues = { title: idea.title, description: idea.description };
  }

  const formik = useFormik({
    initialValues: { ...initialValues },

    onSubmit: (values) => {
      if (isNewIdea) {
        setIdeas([
          ...ideas,
          {
            id: ideas.length,
            title: values.title,
            description: values.description,
            lastUpdated: new Date(),
          },
        ]);
      } else {
        let newIdeas = ideas.map((idea) => {
          if (idea.id === ideaId)
            return {
              ...idea,
              title: values.title,
              description: values.description,
              lastUpdated: new Date(),
            };
        }) as IIdea[];
        setIdeas(newIdeas);
      }
    },
  });

  return !isOpen ? (
    <button
      onClick={() => {
        setIsOpen(true);
      }}
    >
      +
    </button>
  ) : (
    <>
      <button
        onClick={() => {
          setIsOpen(false);
        }}
      >
        Cancel
      </button>
      <form onSubmit={formik.handleSubmit}>
        <label className={styles.label} htmlFor='title'>
          Title
        </label>
        <input
          id='title'
          name='title'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.title}
        />

        <label className={styles.label} htmlFor='description'>
          Description
        </label>
        <input
          id='description'
          name='description'
          type='text'
          onChange={formik.handleChange}
          value={formik.values.description}
        />
        <button type='submit'>Save</button>
      </form>
    </>
  );
}
