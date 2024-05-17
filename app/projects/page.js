import styles from './styles.module.css'

export default function Page() {
  return (
    <div className='container'>
      <h1 className='project-heading'>
        this website
      </h1>
      <img
        className={styles.screenshot}
        src='/website_screenshot.png'
        alt='a screenshot of this website'
      />
    </div>       
  );
}