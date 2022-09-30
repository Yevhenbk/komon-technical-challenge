import * as React from 'react'
import { InferGetStaticPropsType, NextPage } from "next"
import { AiOutlineMinus } from 'react-icons/ai'
import Layout from '../components/Layout/Layout'
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import styles from "../styles/Quotes.module.scss"

/**
 * ! Define the Quotes page
 */

//* Define Interface
interface Quote {
  q: string;
  a: string;
}

//* Define Props
type Props = {
  data: Quote | Quote[];
}

//* Fetch data
export const getStaticProps = async () => {

    const res = await fetch(`https://zenquotes.io/api/quotes`)
    const quotes = await res.json()
    // console.log(quotes)

    return {
      props: { data: quotes }
    }
}

const Quotes: NextPage<Props> = ({data}: InferGetStaticPropsType<typeof getStaticProps>) => {
  
  //* View builder  
  return (
    <div className={styles.container}>
      <Layout title='Quotes | Technical chellenge Komon' description='description' />
        <main className={styles.main}>
           <Header span="ZenQuotes" description="Generating an array of 50 random quotes on each request" /> 
           <div className={styles.wrapper}>
            {data.map((quote: any, id: number) => (
            <div className={styles.card} key={id}>
              <p>{quote.q}</p>
              <div className={styles.centered} ><AiOutlineMinus className={styles.icon} /><h2> {quote.a}</h2></div>
            </div>
           ))}
           </div>
        </main>
        <Footer />
    </div>
  )
}

//* Export component
export default Quotes