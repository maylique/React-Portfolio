import './App.css'
import Cards from './assets/components/cards/Cards'

function App() {

  return (
    <>
    <header>
      <h3>JS.</h3>
      <nav>
        <ul>
          <li>
            <a href="#">projects</a>
          </li>
          <li>
            <a href="#">skills</a>
          </li>
          <li>
            <a href="#">contact</a>
          </li>
          <li>
            <button>
              <img src="" alt="" />
            </button>
          </li>
        </ul>
      </nav>
    </header>
    <main>
      <h1>Hi, I am John Smith.</h1>
      <h2>A Front End Developer</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id sequi maiores vitae ab obcaecati, officia possimus dolores ullam fugiat.</p>
      <button>resume</button>
      <h2>PROJECTS</h2>
      <Cards 
      title = {'Project 1'}
      text = {'lalalalalalalala'}
      lang = {'Javascript CSS HTML'}
      />
      <Cards 
      title = {'Project 2'}
      text = {'lalalalalalalala'}
      lang = {'Javascript CSS HTML'}
      />
      <Cards 
      title = {'Project 3'}
      text = {'lalalalalalalala'}
      lang = {'Javascript CSS HTML'}
      />
    </main>
    </>
  )
}

export default App
