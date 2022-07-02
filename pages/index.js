import Head from 'next/head'
import Image from 'next/image'
import { Footer } from '../components/Footer/Footer'
import { HomeMain } from '../components/Home/HomeMain'
import { Navbar } from '../components/Navabar/Navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Navbar> </Navbar>
        <HomeMain> </HomeMain>
        <Footer></Footer>
        
      </main>

     
    </div>
  )
}



