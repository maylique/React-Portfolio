import './App.css'
import Cards from './assets/components/cards/Cards'
import Footer from './assets/components/footer/Footer'
import Header from './assets/components/header/Header'
import Section1 from './assets/components/section1/Section1'
import Skills from './assets/components/skills/skills'

function App() {

  return (
    <>
    <Header />
    <main>
      <Section1 />
      <Skills />
    </main>
    <Footer />
    </>
  )
}

export default App
