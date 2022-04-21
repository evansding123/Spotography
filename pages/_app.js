import React from 'react';
import '../styles/index.scss'
import Head from "next/head";


function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400&display=swap" rel="stylesheet"/>
      </Head>
      <Component {...pageProps} />
    </>
  )
}


export default MyApp
