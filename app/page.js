export default function Home() {
  return (
    <div className='container'>
      <h1>
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
        <a href='/projects' className='button is-primary inline'>
            Projects
        </a>
        <a href='mailto:contact@jennifermiller.lgbt' className='button is-primary inline'>
            Contact Me
        </a>
      </div>
    </div>
  );
}
