import * as React from "react"
import { NextPage } from "next"
import Layout from "../components/Layout/Layout"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import styles from "../styles/Calculator.module.scss"

/**
 * ! Define the Calculator page
 */

const Calculator: NextPage = () => {

  //* Define states  
  const [ inputOne, setInputOne ] = React.useState<string>('')  
  const [ inputTwo, setInputTwo ] = React.useState<string>('')
  const [ operation, setOperation] = React.useState<string>('+')
  const [ answer, setAnswer ] = React.useState<number | undefined>(0)

  //* Methods
  function setValues(inputOne: string, inputTwo: string, operation: string) {
    let valueOne = parseInt(inputOne)
    let valueTwo = parseInt(inputTwo)
    let answer

    if (operation === '+') {
        answer = valueOne + valueTwo
    } else if (operation === '-') {
        answer = valueOne - valueTwo
    } else if (operation === '/') {
        answer = valueOne / valueTwo
    } else if (operation === '*') {
        answer = valueOne * valueTwo
    }
    
    return setAnswer(answer)
  }


  //* View Builder
  return (
    <div>
        <Layout title='Calculator | Technical chellenge Kommon' description='description' />
        <main className={styles.main}>
            <Header span="Calculator" description="Submit the values with chosen operation in order to generate the output" />
            <div className={styles.row}>
                <form className={styles.form}>
                    <input
                        type="number"
                        onChange={(e) => setInputOne(e.target.value)}
                        name="inputOne"
                        placeholder="Number1 &crarr;"
                        className={styles.input}
                    />
                    <select defaultValue={"+"} name="selectedOperation"
                    onChange={(e) => setOperation(e.target.value)} className={styles.select}>
                        <option value="+" >+</option>
                        <option value="-">-</option>
                        <option value="/">/</option>
                        <option value="*">*</option>
                    </select>
                    <input
                        type="number"
                        onChange={(e) => setInputTwo(e.target.value)}
                        name="inputTwo"
                        placeholder="Number2 &crarr;"
                        className={styles.input}
                    />
                </form>
                <input type="button" value='Submit' className={styles.button} onClick={() => setValues(inputOne, inputTwo, operation) }/>
                <div className={styles.output}>
                    <p>Output:</p>
                    <p>{answer}</p>
                </div>
            </div>
        </main>
        <Footer />
    </div>
  )
}

//* Export component
export default Calculator