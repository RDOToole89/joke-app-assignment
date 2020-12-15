import React, { useEffect, useState } from 'react';

function Home() {
  const [joke, setJoke] = useState('');

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
      <h1>Joke App!</h1>
    </div>
  );
}

export default Home;
