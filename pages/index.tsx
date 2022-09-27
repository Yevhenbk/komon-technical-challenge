import type { NextPage } from 'next'
import { BsArrowLeft } from 'react-icons/bs'
import { BsArrowRight } from 'react-icons/bs'
import { AiOutlineMinus } from 'react-icons/ai'
import Image from 'next/image'
import Layout from '../components/Layout'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
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
                <p>A calculator that allows the user to add, substract, multiply and divide</p>
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

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <div className={styles.left}>
              <div className={styles.space}><h2>Metamask <BsArrowRight className={styles.icon} /></h2></div>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </div>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
