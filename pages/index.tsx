import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>学校に行きたくない</title>
        <meta property="og:url" content=" gakkouikitakunai.yappi.jp" />
        <meta property="og:type" content=" website" />
        <meta property="og:title" content="学校に行きたくない" />
        <meta property="og:description" content="学校に行きたくない" />
        <meta property="og:site_name" content="学校に行きたくない" />
        <meta property="og:image" content="/thumbnail.png" />
      </Head>
      <h1 className={styles.container__text}>{'学校に行きたくない'}</h1>
    </div>
  )
}

export default Home
