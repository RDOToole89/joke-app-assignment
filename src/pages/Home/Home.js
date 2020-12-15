import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = await fetch(
          `https://official-joke-api.appspot.com/jokes/programming/random`
        );
        const joke = await response.json();
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
