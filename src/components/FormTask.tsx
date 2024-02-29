import styles from './FormTask.module.css'
import { PlusCircle } from 'phosphor-react'

export function FormTask({ submitNewTask, newTaskChange, value }) {
  function handleNewTaskInvalid() {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  const isNewTaksEmpty = value.length === 0

  return (
    <form
      onSubmit={submitNewTask}
      className={styles.formTaks}
    >
      <input
        value={value}
        onChange={newTaskChange}
        type="text"
        name='task'
        placeholder='Adicione uma nova tarefa'
        onInvalid={handleNewTaskInvalid}
        required
      />
      <button
        className={styles.submit}
        type="submit"
        disabled={isNewTaksEmpty}>
          <span className={styles.textButton}>
            Criar
          </span>
          <PlusCircle size={16} />
      </button>
    </form>
  )
}