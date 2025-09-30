import { useState } from 'react'
import './App.css'

function Profile() {
  return (
    <img
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
    />
  );
}

function App() {
  return (
    <div>
      <Profile />
      <h1>Katherine Johnson</h1>
      <p>Creola Katherine Johnson (née Coleman; August 26, 1918 – February 24, 2020) 
        was an American human computer whose calculations of orbital mechanics as a NASA employee
         were critical to the success of the first and subsequent U.S. crewed spaceflights.
         During her 33-year career at NASA and its predecessor, the National Advisory Committee for Aeronautics, 
         she earned a reputation for mastering complex manual calculations and helped pioneer the use of computers to 
         perform tasks previously requiring humans. The space agency noted her "historical role as one of the first African-American women to work as a NASA scientist".</p>
    </div>
  )
}

export default App
