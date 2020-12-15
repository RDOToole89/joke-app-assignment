import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import './Home.css';

const Title = styled.h1`
  border-radius: 10px;
  padding: 0.6em;
  text-align: center;
  background: #8ca8d8;
  color: white;
  font-size: 1.5em;
  text-align: center;
  margin-bottom: 3em;
  max-width: 20em;
`;

const TextBaloon = styled.div`
  & {
    -webkit-filter: drop-shadow(-1px -1px 2px rgba(0, 0, 0, 0.1))
      drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.15));
    filter: drop-shadow(-1px -1px 2px rgba(0, 0, 0, 0.1))
      drop-shadow(1px 2px 2px rgba(0, 0, 0, 0.15));
    margin: 1rem;
    margin-bottom: 5rem;
    padding: 1.5rem 2rem;
    position: relative;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
    background: #8ca8d8;
    color: white;
  }
  &:before {
    border: 12.5px solid transparent;
    border-top: 12.5px solid #8ca8d8;
    border-bottom: 0;
    height: 0;
    width: 0;
    border-top-width: 25px;
    content: '';
    display: block;
    position: absolute;
    left: 3rem;
    bottom: -25px;
    -webkit-transform-origin: center;
    transform-origin: center;
    -webkit-transform: rotate(90deg) skew(-25deg) translateY(16.6666666667px);
    transform: rotate(90deg) skew(-25deg) translateY(16.6666666667px);
  }
`;

const Cite = styled.div`
  & {
    position: absolute;
    bottom: -2rem;
    left: 4.5rem;
    font-size: 1rem;
    font-style: normal;
    font-weight: 300;
    letter-spacing: 0.5px;
    color: black;
  }
`;

const Btn = styled.button`
  font-family: 'Source Sans Pro', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: white;
  padding: 0.5em 1em;
  border-radius: 10px;
  position: absolute;
  background: #8ca8d8;
  bottom: -5.5rem;
  left: 6rem;
  border: none;
`;

function Home() {
  const [joke, setJoke] = useState('');
  const [punch, setPunch] = useState(false);
  const [reset, setReset] = useState(false);

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
  }, [reset]);

  const resetJoke = () => {
    setPunch(!punch);
    setReset(!reset);
    setJoke((joke[0].setup = ''));
  };

  return (
    <div className='Home'>
      <div>
        <Title>Hilarious Programmer Jokes!</Title>

        <TextBaloon>
          <p>{(joke && joke[0].setup) || '...'}</p>
          <Cite>Nerd 🤓</Cite>
          {!punch && <Btn onClick={() => setPunch(!punch)}>Punchline</Btn>}
        </TextBaloon>

        {punch && (
          <TextBaloon>
            <p>{joke && joke[0].punchline}</p>
            <Cite>Hilarious Cool Guy 😎</Cite>
            <Btn onClick={resetJoke}>Reset</Btn>
          </TextBaloon>
        )}
      </div>
    </div>
  );
}

export default Home;
