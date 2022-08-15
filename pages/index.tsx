import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState, ReactElement } from 'react'
import styles from '../styles/Home.module.css'
import Canvas from './Canvas'
import Character from './Character'
import { GameContext, initialState } from './Context'

const Home: NextPage = () => {

  const [enemies, setEnemies] = useState<ReactElement[]>([])

  return (
    <div className={styles.container}>
      <Head>
        <title>Smash Tactic</title>
      </Head>

      <main className={styles.main}>
      <GameContext.Provider value={{...initialState, enemies, setEnemies}}>
      <Canvas >
        <Character position={[0, 0, 1]} />
      </Canvas>
      </GameContext.Provider>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
