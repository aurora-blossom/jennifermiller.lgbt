import TitleBar from './titlebar.js'

export default function Home() {
  return (
    <div className='app'>
      <TitleBar/>
      <h1 className='hi'>
        Hi!
      </h1>
      <div className='bio'>
        My name is Jennifer Miller (you probably saw that at the top). 
        I'm a recent software development graduate, and I'm looking for 
        entry level development positions online or anywhere in Michigan, 
        USA or surrounding states. I decided to create this website as a way
        to simultaneously practice and showcase my skills. Feel free to look
        around at my projects or contact me with any inquiries!
      </div>
      <div className='buttons'>
        <a href='./projects'>
          <button className='button is-primary inline'>
            Projects
          </button>
        </a>
        <a href='./contact'>
          <button className='button is-primary inline'>
            Contact Me
          </button>
        </a>
      </div>
    </div>
  );
}
