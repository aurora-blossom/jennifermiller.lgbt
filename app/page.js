export default function Home() {
  return (
    <div className='app'>
      <header>
        <h1 className='title'>jennifer miller</h1>
      </header>
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
        <button className='button is-primary inline'>Projects</button>
        <button className='button is-primary inline'>Contact Me</button>
      </div>
    </div>
  );
}
