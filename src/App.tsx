import { Counter } from "./components/Counter";
import { EmptyTasks } from "./components/EmptyTasks";
import { FormTask } from "./components/FormTask";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

import { useState } from "react";
import styles from "./App.module.css";

export function App() {
	const [tasks, setTasks] = useState([""]);
	const [newTask, setNewTask] = useState("");
	const [countTasks, setCountTasks] = useState(0);
	const [countCompletedTasks, setCountCompletedTasks] = useState(0);
	const [taskEmpty, setTaskEmpty] = useState(true);

	const isTaskEmpty = countTasks === 0;

	function handleCreateNewTask() {
		// @ts-ignore
		event.preventDefault();

		setTasks((task) => [...task, newTask]);
		setCountTasks(tasks.length);
		setNewTask("");
	}

	function handleNewTaskChange() {
		// @ts-ignore
		event.target.setCustomValidity("");

		// @ts-ignore
		setNewTask(event?.target.value);
	}

	function deleteTask(taskToDelete: string) {
		const tasksWithoutDeletedOne = tasks.filter((newList) => {
			return newList !== taskToDelete;
		});
		setTasks(tasksWithoutDeletedOne);
		setCountTasks(tasksWithoutDeletedOne.length - 1);

		countCompletedTasks > 0
			? setCountCompletedTasks(countCompletedTasks - 1)
			: setCountCompletedTasks(0);
	}

	function completedTask() {
		setCountCompletedTasks(countCompletedTasks + 1);
	}

	function unCompletedTask() {
		setCountCompletedTasks(countCompletedTasks - 1);
	}

	function emptyTasks() {
		isTaskEmpty ? setTaskEmpty(true) : setTaskEmpty(false);
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

				<Counter
					allTask={countTasks}
					completedTasks={countCompletedTasks}
					onEmptyTasks={emptyTasks}
				/>

				{countTasks === 0 ? <EmptyTasks /> : ""}

				{tasks.map((content) => {
					if (content === "") return;
					return (
						<Task
							key={content}
							content={content}
							onDeleteTask={deleteTask}
							onCompletedTask={completedTask}
							onUncompletedTasks={unCompletedTask}
						/>
					);
				})}
			</div>
		</div>
	);
}
