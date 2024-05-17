import styles from './styles.module.css'

export default function Page() {
  return (
    <div className='container'>
      <h1 className={styles.projectsHeading}>
        projects
      </h1>
      <h2>
        this website
      </h2>
      <img
        className={styles.screenshot}
        src='/website_screenshot.png'
        alt='a screenshot of this website'
      />
      <div className={styles.projectDescription}>
        Woah, inception. I had the idea to build this site both because
        I wanted to learn web development, and I wanted a project that
        can be easily showcased to prospective employers. It's built with
        React.js and Next.js, with a bit of Bulma CSS. I enjoyed working
        on it. I would've honestly preferred to use Svelte, but React seems
        to be much more commonly used in the industry, so I chose to learn that.
        You can find the GitHub <a
          href='https://github.com/aurora-blossom/jennifermiller.lgbt'
          target='_blank'
          rel='noreferrer noopener'>
           here
        </a>.
      </div>
      <h2>
        patient information management system
      </h2>
      <img
        className={styles.screenshot}
        src='/patient_screenshot.png'
        alt='a screenshot the PIMS program'
      />
      <div className={styles.projectDescription}>
        This was my senior year capstone project, worked on with a group
        of 5, myself included. The concept and requirements were assigned
        to the group by the professor, much as they would be in a regular job.
        As the name implies, it's a system for managing and viewing patient information,
        intended for use in a hospital. It's obviously a long way from being usable for
        a real hospital, but the concept is there. We did the whole thing in Python, which
        was not a good decision in retrospect. I personally did the whole frontend, using
        Python's built-in TKinter. You can find the GitHub <a
          href='https://github.com/MPKellyy/Patient-Information-Management-System'
          target='_blank'
          rel='noreferrer noopener'>
            here
        </a>.
      </div>
      <div className={styles.projectDescription}>
        I also have a couple other projects in the works, but they're not in any state
        to be shown off yet. Be sure to check back later!
      </div>
    </div>
  );
}