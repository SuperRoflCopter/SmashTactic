import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useRef, useState, ReactElement, useReducer } from 'react'
import styles from '../styles/Home.module.css'
import Canvas from './Canvas'
import Character from './Character'
import { GameContext, GameProvider, initialState } from './Context'
import { Action, gameReducer } from './Context/reducer'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smash Tactic</title>
      </Head>

      <main className={styles.main}>
        <GameProvider>
          <Canvas >
            <Character position={[0, 0, 1]} />
          </Canvas>
        </GameProvider>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}

export default Home
