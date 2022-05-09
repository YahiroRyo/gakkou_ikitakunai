import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const randomIntFromInterval = (min: number, max: number): number => { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

const Home: NextPage = () => {
  const titleColor = {
    color: `rgb(${randomIntFromInterval(0, 255)}, ${randomIntFromInterval(0, 255)}, ${randomIntFromInterval(0, 255)})`
  };
  
  return (
    <div className={styles.container}>
      <Head>
        <title>学校に行きたくない</title>
        <meta property="og:url" content="gakkouikitakunai.yappi.jp" />
        <meta property="og:type" content=" website" />
        <meta property="og:title" content="学校に行きたくない" />
        <meta property="og:description" content="学校に行きたくない" />
        <meta property="og:site_name" content="学校に行きたくない" />
        <meta property="ranklet:image" content="/thumbnail.png" />
        <meta property="og:image" content="https://gakkouikitakunai.yappi.jp/thumbnail.png" />
        <meta name="twitter:site" content="@yappi_sec" />
        <meta name="twitter:player" content="@yappi_sec" />
        <meta name="twitter:card" content="photo" />
      </Head>
      <h1 className={styles.container__text} style={titleColor}>{'学校に行きたくない'}</h1>
    </div>
  )
}

export default Home
