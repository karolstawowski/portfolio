import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Projects } from './components/Projects'
import { Technologies } from './components/Technologies'
import { Welcome } from './components/Welcome'
import ReactGA from 'react-ga4'

const App = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center bg-background text-text-primary">
      <button
        onClick={() =>
          ReactGA.event({
            category: 'Kategoria',
            action: 'Klik',
            label: 'Oprawka',
            value: 1,
          })
        }
      >
        PRZYCISK
      </button>
      <Welcome />
      <About />
      <Technologies />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
