'use client';

import { Form, Field, ErrorMessage, Formik } from 'formik';
import styles from '@/styles/idea.module.sass';
import React, { FormEvent, useState } from 'react';
import { useIdeasContext } from '@/contexts/IdeasContext';

type IdeaFormProps = {
  isNewIdea: boolean;
  ideaId: number;
};

export default function IdeaForm({ isNewIdea, ideaId }: IdeaFormProps) {
  const MAX_CHARACTERS_DESCRIPTION = 140;
  const [descriptionLength, setDescriptionLength] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const { ideas, setIdeas } = useIdeasContext();

  type FormValues = { title: string; description: string };

  let initialValues: FormValues = {
    title: '',
    description: '',
  };

  const idea = ideas.find((i) => i.id === ideaId);
  if (!isNewIdea && idea !== undefined) {
    initialValues = { title: idea.title, description: idea.description };
  }

  const onSubmit = (values: FormValues) => {
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
        if (idea.id === ideaId) {
          return {
            ...idea,
            title: values.title,
            description: values.description,
            lastUpdated: new Date(),
          };
        } else {
          return idea;
        }
      }) as IIdea[];

      setIdeas(newIdeas);
    }
  };

  return !isOpen ? (
    <button
      onClick={() => {
        setIsOpen(true);
      }}
    >
      {isNewIdea ? '+' : 'Edit'}
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

      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = { title: '', description: '' };

          if (!values.title) {
            errors.title = 'Required';
          }

          if (values.description.length > MAX_CHARACTERS_DESCRIPTION) {
            errors.description = `Description text must be ${MAX_CHARACTERS_DESCRIPTION} or less characters.`;
          }

          return errors;
        }}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type='title' placeholder='New title' name='title' />
            <ErrorMessage name='title' component='div' />

            <Field
              type='description'
              placeholder='New description'
              name='description'
              onInput={(event: FormEvent<HTMLInputElement>) => {
                setDescriptionLength(event.currentTarget.value.length);
              }}
            />
            <p>{`Character count: ${descriptionLength}/${MAX_CHARACTERS_DESCRIPTION}`}</p>
            <ErrorMessage name='description' component='div' />

            <button type='submit' disabled={isSubmitting}>
              Save
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
