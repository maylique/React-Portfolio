import Cards from "../cards/Cards";
import './section1.css'

const Section1 = () => {
    return ( 
        <>
        <section>
        <h1>Hi, I am John Smith.</h1>
        <h2>A Front End Developer</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias id sequi maiores vitae ab obcaecati, officia possimus dolores ullam fugiat.</p>
        <button>resume</button>
        <h2>PROJECTS</h2>
        <div className="s1">
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
        </div>
      </section>
        </>
     );
}
 
export default Section1;