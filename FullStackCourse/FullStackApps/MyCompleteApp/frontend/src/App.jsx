import React from 'react'
import { useState,useId } from 'react'
import axios from 'axios'
import { useEffect } from 'react';
import { use } from 'react';
function App() {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    axios.get("/api/jokes").then((response) => (response.data)).then((data) => {
      const jokeList = data.map((joke) => joke.joke);
      setJokes(jokeList);
    }).catch((error) => console.error("Error fetching jokes:", error));
  },[])
  return (
    <div>
      <h1>Jokes</h1>
      {jokes.map((joke,index) => <p key={index}>{joke}</p>)}
    </div>
  )
}

export default App
