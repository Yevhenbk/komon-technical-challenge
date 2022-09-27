import type { NextPage } from 'next'
import { BsArrowLeft } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
import { AiOutlineMinus } from 'react-icons/ai'
import Footer from '../components/Footer'
import Layout from '../components/Layout'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

/**
 * ! Define the Home page
 */

const Home: NextPage = () => {

  //* View builder
  return (
    <div className={styles.container}>
      <Layout title='Home | Technical chellenge Kommon' description='description' />
      <main className={styles.main}>
        <h1 className={styles.title}>
          Frontend <span>Technical Challenge</span>
        </h1>
        <p className={styles.description}>
          Created by Yevhen Balahutrak © 2022
        </p>
        <div className={styles.grid}>
          <Link href="/calculator">
            <div className={styles.card}>
              <div className={styles.right}>
                <h2><BsArrowLeft className={styles.icon} /> Calculator</h2>
                <p>A calculator that allows user to perform certain actions</p>
              </div>
            </div>
          </Link>
          <Link href="/quotes">
            <div className={styles.card}>
              <div className={styles.center}>
                <h2><AiOutlineMinus className={styles.icon} /> ZenQuotes <AiOutlineMinus className={styles.icon} /></h2>
                <p>Retreived ZenQuotes API displaying the quotes on screen</p>
              </div>
            </div>
          </Link>
          <Link href="/metaconnect">
          <div className={styles.card}>
            <div className={styles.left}>
              <h2>Metamask <BsArrowRight className={styles.icon} /></h2>
              <p>Perform a connection to your Metamask wallet and see some data</p>
            </div>
          </div>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

//* Export component
export default Home
