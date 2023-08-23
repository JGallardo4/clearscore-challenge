'use client';

import { useState } from 'react';
import styles from '@/styles/idea.module.sass';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { FaEdit } from "react-icons/fa";

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
      <h1 className={styles.label}>Title</h1>
      {!isEditTitle ? (
        <div className={styles.labelContainer}>
          <p className={styles.title}>{idea.title}</p>
          <button className={styles.editButton} onClick={() => setIsEditTitle(!isEditTitle)}>
            <FaEdit />
          </button>
        </div>
      ) : (
        <Formik
          initialValues={{ title: idea.title }}
          validationSchema={titleSchema}
          onSubmit={(values) => {
            idea.title = values.title;
            idea.lastUpdated = new Date();
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

      <h1 className={styles.label}>Description</h1>
      {!isEditDescription ? (
        <div className={styles.labelContainer}>
          <p className={styles.description}>{idea.description}</p>
          <button className={styles.editButton} onClick={() => setIsEditDescription(!isEditDescription)}>
            <FaEdit />
          </button>
        </div>
      ) : (
        <Formik
          initialValues={{ description: idea.description }}
          validationSchema={descriptionSchema}
          onSubmit={(values) => {
            idea.description = values.description;
            idea.lastUpdated = new Date();
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

      <p>{idea.lastUpdated.toLocaleString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "numeric" })}</p>
    </article>
  );
}
