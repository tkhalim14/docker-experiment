import logo from './logo.svg';
import './App.css';

import { useState, useEffect } from 'react';

const App = () => {

  const [text,setText] = useState('');

  useEffect(() => {
    fetchfromApi("http://localhost:5000");
    
    let interval = setInterval(async () => {
      await fetchfromApi("http://localhost:5000/count");
    }, 1000);
    
    return () => {
      clearInterval(interval);
    };
  },[]);
  
  const fetchfromApi = async (url) => {
    await fetch(url)
    .then((res)=>{
      if (res.status !== 200) {
        throw new Error(`Failed to fetch data. Status: ${res.status}`);
      }
      return res.json();
    })
    .then(data => {
      setText(data);
      // console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br/>
          Server load count : {text['message']}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
