import React, { useEffect } from 'react';

function Home() {
  useEffect(() => {
    const fetchJoke = async () => {
      try {
        const response = fetch(`https://official-joke-api.appspot.com/jokes/programming/random`);

        console.log(response);
      } catch (e) {
        console.log(e);
      }
    };
  }, []);

  return <div className='Home'></div>;
}

export default Home;
