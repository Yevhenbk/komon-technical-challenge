import styles from '../styles/Home.module.css'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'

/**
 * ! Define the Footer component
 */

const Footer: React.FC = () => {

  //* View Builder
  return (
    <footer className={styles.footer}>
        <a
            href="https://github.com/Yevhenbk/kommon-technical-challenge"
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className={styles.logo}>
            <AiFillGithub fontSize={21} />
            </span>
        </a>
        <a
            href="https://www.linkedin.com/in/yevhen-balahutrak-58b687214/"
            target="_blank"
            rel="noopener noreferrer"
        >
            <span className={styles.logo}>
            <AiFillLinkedin fontSize={21} />
            </span>
        </a>
    </footer>
  )
}

//* Export component
export default Footer