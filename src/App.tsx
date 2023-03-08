import { Header } from "./components/Header"
import { FormTask } from "./components/FormTask"

import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
        <FormTask />
      </div>
    </div>
  )
}