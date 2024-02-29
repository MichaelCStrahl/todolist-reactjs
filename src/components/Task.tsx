import styles from './Task.module.css'
import { Trash, Check } from 'phosphor-react'
import { useState } from 'react'

export function Taks({ content, onDeleteTask, onCompletedTaks, onUncompletedTasks }) {
  const [checkTask, setCheckTask] = useState(false)

  const isChecked = checkTask ? styles.btnCheckElement : styles.btnUncheckElement
  const isCheckedText = checkTask ? styles.taskTextChecked : ''
  const isCheckedButtonIcon = checkTask ? <Check /> : null

  function handleDeleteTask() {
    onDeleteTask(content)
  }

  function handleChangeCheckTask() {
    setCheckTask(!checkTask)

    checkTask ? onUncompletedTasks() : onCompletedTaks()
  }

  return (
    <div className={styles.mainTask}>

      <div      
        onClick={handleChangeCheckTask}
        className={styles.contentTask}
      >
        <button className={isChecked}>
          { isCheckedButtonIcon }
        </button>
        
        <span className={isCheckedText}>
          { content }
        </span>
      </div>

      <button onClick={handleDeleteTask} className={styles.btnDelete}>
        <Trash />
      </button>
    </div>
  )
}