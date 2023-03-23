import styles from './Task.module.css'
import { Trash, Check } from 'phosphor-react'

export function Taks({ isChecked = true, content, onDeleteTask }) {

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  return (
    <div className={styles.mainTask}>

      <div className={styles.contentTask}>
        <button className={styles.btnCheckElement}>
          <Check />
        </button>
        
        <span>
          { content }
        </span>
      </div>

      <button onClick={handleDeleteTask} className={styles.btnDelete}>
        <Trash />
      </button>
    </div>
  )
}