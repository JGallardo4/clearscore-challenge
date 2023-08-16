'use client';

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

export default function NewIdea() {
  const [newIdea, setNewIdea] = useState<IIdea>({
    id: 1,
    title: 'Idea 1',
    description: 'Description',
    lastUpdated: new Date(),
  });

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

  return (
    <>
      <button onClick={() => {}}>New idea</button>

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
            <button type='reset'>Cancel</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
