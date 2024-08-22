import React from 'react'
import NavBar from './Components/Navbar/NavBar'
import LandingPage from './Components/LandingPage/LandingPage'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Projects from './Components/Projects/Projects'
import Contact from './Components/Contact/Contact'
import SayHi from './Components/SayHi/SayHi'
import Footer from './Components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <main>
        <LandingPage />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <SayHi />
        <Footer />
      </main>
    </div>
  );
}

export default Home