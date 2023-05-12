import { useContext, useEffect } from 'react'
import { ThemeContext } from './contexts/theme'
import Header from './components/Header/Header'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Contact from './components/Contact/Contact'

import './App.css'

const App = () => {
  const [{ themeName }] = useContext(ThemeContext)

  useEffect(() => {
    document.documentElement.className = themeName
  },[themeName])

  return (
    <div id='top' className='app'>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <div className='blank'/>
    </div>
  )
}

export default App
