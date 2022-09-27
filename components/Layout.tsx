import Head from "next/head"

//* Define Props
type Props = {
    title: string,
    description: string
};

/**
 * ! Define the Layout component
 */

const Layout: React.FC<Props> = (props) => {
  
  //* View Builder
  return (
    <Head>
        <title>{props.title}</title>
        <meta name={props.description} content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

//* Export component
export default Layout