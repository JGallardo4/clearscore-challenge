'use client';

import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import React, { FunctionComponent } from 'react'

type Props = {
  addIdea: Function
}

export const NewIdea: FunctionComponent<Props> = ({ addIdea }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
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
      {!isOpen ?
        <button onClick={() => { setIsOpen(true) }}>New idea</button> : <>
          <button onClick={() => { setIsOpen(false) }}>Cancel</button>

          <Formik
            initialValues={{ title: 'New title', description: "New description" }}
            validationSchema={ideaSchema}
            onSubmit={(values) => {
              addIdea({ ...values })
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <h1>Title</h1>
                <Field type='text' name='title' />
                {touched.title && errors.title && <div>{errors.title}</div>}

                <h1>Description</h1>
                <Field type='text' name='description' />
                {touched.description && errors.description && <div>{errors.description}</div>}

                <button type='submit'>Save</button>
              </Form>
            )}
          </Formik></>}
    </>
  );
}
