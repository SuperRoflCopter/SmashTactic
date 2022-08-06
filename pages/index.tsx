import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
import styles from '../styles/Home.module.css'
import Scene from './Scene'
import Character from './Character'
import Enemy from './Enemy'

const Home: NextPage = () => {

  // useEffect({

  // }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Smash Tactic</title>
      </Head>

      <main className={styles.main}>
      <Scene >
        <Character position={[0, 0, 0]} />
        <Enemy position={[1.2, 3, 0]} />
        <Enemy position={[2, 3, 0]} />
      </Scene>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
