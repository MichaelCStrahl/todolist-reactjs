import ClipBoard from "../assets/clipboard.png";
import styles from "./EmptyTasks.module.css";

export function EmptyTasks() {
	return (
		<div className={styles.emptyTasksContent}>
			<img src={ClipBoard} alt="" />
			<p>
				<strong>Você ainda não tem tarefas cadastradas</strong>
			</p>
			<p>Crie tarefas e organize seus itens a fazer</p>
		</div>
	);
}
