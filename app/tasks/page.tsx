
import { TaskList } from "../../components/TaskList";
import { tasks } from "../../lib/data";

export default function TasksPage() {
  return <TaskList initialTasks={tasks} />;
}
