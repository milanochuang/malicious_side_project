// import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import "./styles.css";
import TypeWriterEffect from 'react-typewriter-effect';



export default function App() {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  //lets declare a new state variable we'll call index that 
  //we can update in handleClick and use to access months
  const [i, incrementIndex] = useState(0)
  const [headingText, setHeadingText] = useState(`${months[i]}`)

  function handleClickNext() {
    setHeadingText(`${months[i + 1]}`);
    incrementIndex(i + 1);
    console.log(`${months[i + 1]}`);
  }

  function handleClickPrevious() {
    setHeadingText(`${months[i - 1]}`);
    incrementIndex(i - 1);
  }

  return (
    <div className="App">
      <h1>
        The month for today is <TypeWriterEffect
                    textStyle={{ 
                    fontSize: '32px',
                    fontWeight: '800',
                    color: '#333333',
                    lineHeight: '1.9',
                    margin: '10px 0' ,
                    textAlign : 'center'
                }}
                    startDelay={500}
                    cursorColor="black"
                    text={headingText}
                    typeSpeed={100}
                />
      </h1>
      <h1>{headingText}</h1>
      <button onClick={handleClickPrevious}>Previous Month</button>
      <button onClick={handleClickNext}>Next Month</button>
    </div>
  );
}
