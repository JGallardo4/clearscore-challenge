'use client';

import { useState } from 'react';

export default function Idea(idea: IIdea) {
  const [isEditTitle, setIsEditTitle] = useState<boolean>(false);
  const [isEditDescription, setIsEditDescription] = useState<boolean>(false);

  return (
    <>
      {isEditTitle ? (
        <h1>{idea.title}</h1>
      ) : (
        <form>
          <label htmlFor='title'>Title:</label>
          <br />
          <input type='text' id='title' name='title' />
          <br />
        </form>
      )}

      {isEditDescription ? (
        <p>{idea.description}</p>
      ) : (
        <form>
          <label htmlFor='description'>Description:</label>
          <br />
          <input type='text' id='description' name='description' />
          <br />
        </form>
      )}

      <p>{idea.lastUpdated.toString()}</p>
    </>
  );
}
