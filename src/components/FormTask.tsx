import styles from './FormTask.module.css'
import { PlusCircle } from 'phosphor-react'

export function FormTask() {
  return (
    <form className={ styles.formTaks }>
      <input type="text" placeholder='Adicione uma nova tarefa'/>
      <button className={ styles.submit } type="submit"><span className={ styles.textButton }>Criar</span> <PlusCircle size={16} /> </button>
    </form>
  )
}