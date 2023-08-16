'use client';

import { useState } from 'react';
import Idea from './idea';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export default function IdeasList() {
  const [isShowNewIdeaForm, setIsShowNewIdeaForm] = useState(false)
  const [newIdea, setNewIdea] = useState<IIdea>({
    id: 1,
    title: 'Idea 1',
    description: 'Description',
    lastUpdated: new Date(),
  })

  const MAX_CHARACTERS_DESCRIPTION = 140;
  const ideaSchema = Yup.object().shape({
    title: Yup.string()
      .min(2, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    description: Yup.string()
      .min(2, 'Too Short!')
      .max(MAX_CHARACTERS_DESCRIPTION, `Please enter a maximum of ${MAX_CHARACTERS_DESCRIPTION} characters`)
      .required('Required'),
    lastUpdated: Yup.date()
  });

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
      {isShowNewIdeaForm ?
        <button onClick={() => { }}>New idea</button> :
        <Formik
          initialValues={{ title: newIdea.title }}
          validationSchema={ideaSchema}
          onSubmit={(values) => {
            // Update store
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <Field type='text' name='title' />{' '}
              {touched.title && errors.title && <div>{errors.title}</div>}
              <button type='submit'>Save</button>
              <button type='reset'>
                Cancel
              </button>
            </Form>
          )}
        </Formik>
      }

      {ideas.map((idea, i) => (
        <Idea key={i} {...idea} />
      ))}
    </>
  );
}
