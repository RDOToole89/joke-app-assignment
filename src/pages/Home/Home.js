import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Home() {
  const [joke, setJoke] = useState('');

  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    color: palevioletred;
  `;

  const TextBaloon = styled.p`
    & {
      position: relative;
      max-width: 30em;

      background-color: #fff;
      padding: 1.125em 1.5em;
      font-size: 1.25em;
      border-radius: 1rem;
      box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3), 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.2);
    }
    &:before {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      bottom: 100%;
      left: 1.5em; // offset should move with padding of parent
      border: 0.75rem solid transparent;
      border-top: none;

      // looks
      border-bottom-color: #fff;
      filter: drop-shadow(0 -0.0625rem 0.0625rem rgba(0, 0, 0, 0.1));
    }
  `;

  console.log('JOKE IS', joke);

  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch(
          `https://official-joke-api.appspot.com/jokes/programming/random`
        );

        if (!response.ok) {
          throw new Error(`Bad request`);
        }

        const joke = await response.json();

        if (joke) {
          setJoke(joke);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchJoke();
  }, []);

  return (
    <div className='Home'>
      <Title>Hilarious Programmer Jokes!</Title>
      <TextBaloon>Hello World!</TextBaloon>
    </div>
  );
}

export default Home;
