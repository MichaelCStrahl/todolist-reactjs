import { PlusCircle } from "phosphor-react";
import type React from "react";
import type { FormEventHandler } from "react";
import styles from "./FormTask.module.css";

interface FormTaskProps {
	submitNewTask: () => void;
	newTaskChange: () => void;
	value: string;
}

export function FormTask({
	submitNewTask,
	newTaskChange,
	value,
}: FormTaskProps) {
	function handleNewTaskInvalid() {
		// @ts-ignore
		event.target.setCustomValidity("Esse campo é obrigatório!");
	}

	const isNewTaskEmpty = value.length === 0;

	return (
		<form onSubmit={submitNewTask} className={styles.formTask}>
			<input
				value={value}
				onChange={newTaskChange}
				type="text"
				name="task"
				placeholder="Adicione uma nova tarefa"
				onInvalid={handleNewTaskInvalid}
				required
			/>
			<button className={styles.submit} type="submit" disabled={isNewTaskEmpty}>
				<span className={styles.textButton}>Criar</span>
				<PlusCircle size={16} />
			</button>
		</form>
	);
}
