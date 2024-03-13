import styles from "./Counter.module.css";

interface Counter {
	allTask: number;
	completedTasks: number;
	onEmptyTasks: () => void;
}

export function Counter({ allTask, completedTasks, onEmptyTasks }: Counter) {
	() => {
		onEmptyTasks();
	};

	return (
		<div className={styles.counter}>
			<div className={styles.allTaskContent}>
				Tarefas criadas
				<span className={styles.counterAllTasks}>{allTask}</span>
			</div>
			<div className={styles.concludedTaskContent}>
				Concluídas
				<span className={styles.counterAllTasks}>
					{completedTasks} de {allTask}
				</span>
			</div>
		</div>
	);
}
