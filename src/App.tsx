import { Header } from "./components/Header"
import { FormTask } from "./components/FormTask"
import { Counter } from "./components/Counter"
import { Taks } from "./components/Task"
import { EmptyTasks } from "./components/EmptyTasks"

import styles from './App.module.css'
import { useState } from "react"

export function App() {

  const [tasks, setTasks] = useState([''])
  const [newTask, setNewTask] = useState('')
  const [countTasks, setCountTasks] = useState(0)
  const [countCompletedTasks, setCountCompletedTasks] = useState(0)
  const [taskEmpty, setTaskEmpty] = useState(true)

  const isTaskEmpty = countTasks === 0

  function handleCreateNewTask() {
    event.preventDefault()

    setTasks([...tasks, newTask])
    setCountTasks(tasks.length)
    setNewTask('')
  }

  function handleNewTaskChange() {
    event.target.setCustomValidity('')
    
    setNewTask(event?.target.value)
  }

  function deleteTask(taskToDelete) {
    const tasksWithoutDeletedOne = tasks.filter(newList => {
      return newList !== taskToDelete
    })
    setTasks(tasksWithoutDeletedOne)
    setCountTasks(tasksWithoutDeletedOne.length - 1)

    countCompletedTasks > 0 ? setCountCompletedTasks(countCompletedTasks - 1) : setCountCompletedTasks(0)
  }

  function completedTaks() {
    setCountCompletedTasks(countCompletedTasks + 1)
  }

  function unCompletedTaks() {
    setCountCompletedTasks(countCompletedTasks - 1)
  }

  function emptyTasks() {
    isTaskEmpty ? setTaskEmpty(true) : setTaskEmpty(false)
    console.log(taskEmpty);
    
  }

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <FormTask
          submitNewTask={handleCreateNewTask}
          newTaskChange={handleNewTaskChange}
          value={newTask}
        />
        
        <Counter allTaks={countTasks} completedTasks={countCompletedTasks} />

        { countTasks === 0 ? <EmptyTasks /> : '' }        

        {
          tasks.map(content => {
            if (content === '') return
            return (
              <Taks
                key={content}
                content={content}
                onDeleteTask={deleteTask}
                onCompletedTaks={completedTaks}
                onUncompletedTasks={unCompletedTaks}
              />
            )
          })
        }
      </div>
    </div>
  )
}