import { About } from './components/About'
import { Contact } from './components/Contact'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Projects } from './components/Projects'
import { Technologies } from './components/Technologies'
import { Welcome } from './components/Welcome'
import { Navbar } from './components/Welcome/NavigationBar'

const App = (): JSX.Element => {
  return (
    <div className="bg-white">
      <Navbar />
      <div className="min-w-[283px] px-6 xs:px-12 md:px-20 lg:px-28 xl:px-44 2xl:px-72">
        <Welcome />
      </div>
      <About />
      <div className="min-w-[300px] px-6 xs:px-12 md:px-20 lg:px-28 xl:px-44 2xl:px-80">
        <Technologies />
      </div>
      <Projects />
      <div className="min-w-[300px] px-6 xs:px-12 md:px-20 lg:px-28 xl:px-44 2xl:px-80">
        <Experience />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
