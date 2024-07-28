import React from "react";
import {Navbar, Home, About, Skills, Projects, Experience, Contact} from './pages';

function App() {
  return (
    <div className="flex-1 flex-col flex-grow overflow-auto min-h-screen w-screen">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
      <Projects/>
      <Experience/>
      <Contact/>
    </div>
  )
}

export default App
