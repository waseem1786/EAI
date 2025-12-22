"use client";
import { motion } from "framer-motion";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";
import { TaskWithProgress } from "./TaskCard";

function TaskItem({ task, index, onPlay }: { task: TaskWithProgress; index: number; onPlay: (taskId: string) => void }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{ ...provided.draggableProps.style, cursor: "pointer" }}
          onClick={() => onPlay(task.id)}
        >
          <motion.div
            className="taskCard"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <p className="taskTitle">{task.title}</p>
            <div className="taskMeta">Day {task.day} · {task.estimatedMinutes} min</div>
          </motion.div>
        </div>
      )}
    </Draggable>
  );
}

export function KanbanBoard({ tasks, onDragEnd, onPlay }: { tasks: TaskWithProgress[]; onDragEnd: (result: DropResult) => void; onPlay: (taskId: string) => void }) {
  const columns = {
    todo: tasks.filter(t => t.status === "todo"),
    doing: tasks.filter(t => t.status === "doing"),
    done: tasks.filter(t => t.status === "done"),
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
        {Object.entries(columns).map(([key, tasks]) => (
          <Droppable droppableId={key} key={key}>
            {(provided) => (
              <motion.div ref={provided.innerRef} {...provided.droppableProps} className="kanbanColumn" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 * Object.keys(columns).indexOf(key) }} style={{ background: "rgba(255,255,255,0.03)", padding: 12, borderRadius: 8 }}>
                <div className="h2">{key.charAt(0).toUpperCase() + key.slice(1)}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 12 }}>
                  {tasks.map((task, index) => (
                    <TaskItem key={task.id} task={task} index={index} onPlay={onPlay} />
                  ))}
                  {provided.placeholder}
                </div>
              </motion.div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
  );
}
