import React from 'react'
import styles from './Header.module.scss'

//* Define Props
type Props = {
    title?: string,
    span?: string,
    description?: string
};

/**
 * ! Define the Layout component
 */


const Header: React.FC<Props> = (props) => {
  
  //* View Builder  
  return (
    <div>
        <h1 className={styles.title}>
            {props.title} <span>{props.span}</span>
        </h1>
        <p className={styles.description}>
            {props.description}
        </p>
    </div>
  )
}

//* Export component
export default Header