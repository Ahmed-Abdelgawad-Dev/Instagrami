import React, { useState, useEffect } from 'react';
import Post from './Post';
import './App.css';

export const apiURL = 'http://localhost:8000/'
export default function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(apiURL + 'posts')
    .then((response) => {
      const json = response.json()
      console.log(json)
      if(response.ok) {
        return json
      }
      throw response
    })
    .then(data => {setPosts(data)})
    .catch(error => {
      console.log(error);
    })
  }, [])
  return (
    <div className="App">
      <div className='app-posts'>
        {
          // eslint-disable-next-line array-callback-return
          posts.map((post, idx) => (
            <Post key={idx} post={post} />
          ))
        }
      </div>
    </div>
  );
}

