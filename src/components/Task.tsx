import { Check, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.css";

interface Task {
	content: string;
	onDeleteTask: (taskToDelete: string) => void;
	onCompletedTask: () => void;
	onUncompletedTasks: () => void;
}

export function Task({
	content,
	onDeleteTask,
	onCompletedTask,
	onUncompletedTasks,
}: Task) {
	const [checkTask, setCheckTask] = useState(false);

	const isChecked = checkTask
		? styles.btnCheckElement
		: styles.btnUncheckElement;
	const isCheckedText = checkTask ? styles.taskTextChecked : "";
	const isCheckedButtonIcon = checkTask ? <Check /> : null;

	function handleDeleteTask() {
		onDeleteTask(content);
	}

	function handleChangeCheckTask() {
		setCheckTask(!checkTask);

		checkTask ? onUncompletedTasks() : onCompletedTask();
	}

	return (
		<div className={styles.mainTask}>
			<div
				onClick={handleChangeCheckTask}
				onKeyUp={handleChangeCheckTask}
				className={styles.contentTask}
			>
				{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
				<button
					aria-checked={checkTask}
					onClick={handleChangeCheckTask}
					className={isChecked}
				>
					{isCheckedButtonIcon}
				</button>

				<span className={isCheckedText}>{content}</span>
			</div>

			{/* biome-ignore lint/a11y/useButtonType: <explanation> */}
			<button onClick={handleDeleteTask} className={styles.btnDelete}>
				<Trash />
			</button>
		</div>
	);
}
