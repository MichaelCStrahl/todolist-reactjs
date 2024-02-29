import styles from './Counter.module.css'

interface Counter {
  allTaks: number
  completedTasks: number
}

export function Counter({ allTaks, completedTasks, onEmptyTasks }: Counter) {

  () => {
    onEmptyTasks()
  }

  return (
    <div className={ styles.counter }>
      <div className={ styles.allTaskContent }>
        Tarefas criadas
        <span className={ styles.counterAllTasks }>{ allTaks }</span>
      </div>
      <div className={ styles.concluedTaskContent }>
        Concluídas
        <span className={ styles.counterAllTasks }>{ completedTasks } de { allTaks }</span>
      </div>
    </div>
  )
}