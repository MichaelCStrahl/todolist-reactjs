import { Header } from "./components/Header"
import { FormTask } from "./components/FormTask"
import { Counter } from "./components/Counter"
import { Taks } from "./components/Task"

import styles from './App.module.css'
import { useState } from "react"

export function App() {

  const [tasks, setTasks] = useState(['primeira task'])
  const [newTask, setNewTask] = useState('')

  function handleCreateNewTask() {
    event.preventDefault()

    setTasks([...tasks, newTask])
    setNewTask('')
  }

  function handleNewCommentChange() {
    event.target.setCustomValidity('')
    
    setNewTask(event?.target.value)
  }

  function deleteTask(taskToDelete) {
    const tasksWithoutDeletedOne = tasks.filter(newList => {
      return newList !== taskToDelete
    })
    setTasks(tasksWithoutDeletedOne)
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <FormTask
          submitNewTask={handleCreateNewTask}
          newTaskChange={handleNewCommentChange}
          value={newTask}
        />
        
        <Counter allTaks={0} completedTasks={0} />

        {
          tasks.map(content => {
            return (
              <Taks
                key={content}
                content={content}
                onDeleteTask={deleteTask}
              />
            )
          })
        }
      </div>
    </div>
  )
}