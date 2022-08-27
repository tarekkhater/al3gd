import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Body from '../Components/Home/Body'
export default function Index() {
  return (
    <div className={styles.container}>
      <Head>
        <title>GHASAN Web</title>
      </Head>
      <Body />
      
    </div>
  )
}
