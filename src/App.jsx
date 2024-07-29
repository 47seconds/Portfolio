import React from "react";
import {Navbar, Home, About, Skills, Projects, Contact} from './pages';
import CursorTrail from './components/cursorTrail';

function App() {
  return (
    <div className="flex-1 flex-col flex-grow overflow-auto min-h-screen w-screen">
      <CursorTrail/>
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
