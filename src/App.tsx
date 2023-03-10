import { Header } from "./components/Header"
import { FormTask } from "./components/FormTask"
import { Counter } from "./components/Counter"

import styles from './App.module.css'

export function App() {
  return (
    <div>
      <Header />
      <div className={ styles.wrapper }>
        <FormTask />
        
        <Counter allTaks={0} completedTasks={0} />
      </div>
    </div>
  )
}