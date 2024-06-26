// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'

function App() {
  let randomNumber = Math.floor(Math.random() * 400 + 1)

  const getPokemon = async() => {
    // make API call using axios
    const response = await axios.get((`https://pokeapi.co/api/v2/pokemon/${randomNumber}`));
    const pokemon = response.data

    // create a new img element
    let img = document.createElement('img');
    // grab sprite img and assign it to img variable
    img.src = response.data.sprites.front_default;

    // append new image to div element
    let div = document.getElementById('holder')
    div.appendChild(img)

    // reassign random number to generate different pokemon when button is clicked
    randomNumber = Math.floor(Math.random() * 400 + 1)
  }



  return (
    <>
      <header>
        <h1>Pokemon</h1>
        </header>
        <div id='holder'></div>
          <button id='button' onClick={getPokemon}>Generate pokemon</button>
        

    </>
  )
}

export default App
