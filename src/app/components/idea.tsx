'use client';

import { useState } from 'react';
import styles from '@/styles/idea.module.sass';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export default function Idea(idea: IIdea) {
  const [isEditTitle, setIsEditTitle] = useState<boolean>(false);
  const [isEditDescription, setIsEditDescription] = useState<boolean>(false);
  const MAX_CHARACTERS_DESCRIPTION = 140;

  const titleSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
  });

  const descriptionSchema = Yup.object().shape({
    description: Yup.string()
      .min(2, 'Too Short!')
      .max(MAX_CHARACTERS_DESCRIPTION, `Please enter a maximum of ${MAX_CHARACTERS_DESCRIPTION} characters`)
      .required('Required'),
  });

  return (
    <article className={styles.idea}>
      <h1>Title</h1>
      {!isEditTitle ? (
        <>
          <p>{idea.title}</p>
          <button onClick={() => setIsEditTitle(!isEditTitle)}>Edit</button>
        </>
      ) : (
        <Formik
          initialValues={{ title: idea.title }}
          validationSchema={titleSchema}
          onSubmit={(values) => {
            idea.title = values.title;
            setIsEditTitle(!isEditTitle);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field type='text' name='title' />{' '}
              {touched.title && errors.title && <div>{errors.title}</div>}
              <button type='submit'>Save</button>
              <button type='reset' onClick={() => setIsEditTitle(!isEditTitle)}>
                Cancel
              </button>
            </Form>
          )}
        </Formik>
      )}

      <h1>Description</h1>
      {!isEditDescription ? (
        <>
          <p>{idea.description}</p>
          <button onClick={() => setIsEditDescription(!isEditDescription)}>
            Edit
          </button>
        </>
      ) : (
        <Formik
          initialValues={{ description: idea.description }}
          validationSchema={descriptionSchema}
          onSubmit={(values) => {
            idea.description = values.description;
            setIsEditDescription(!isEditDescription);
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field type='text' name='description' />
              {touched.description && errors.description && (
                <div>{errors.description}</div>
              )}
              <button type='submit'>Save</button>
              <button
                type='submit'
                onClick={() => setIsEditDescription(!isEditDescription)}
              >
                Cancel
              </button>
            </Form>
          )}
        </Formik>
      )}

      <p>{idea.lastUpdated.toString()}</p>
    </article>
  );
}
