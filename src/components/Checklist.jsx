import { useState } from "react";
import Task from "./Task";

export default function Checklist() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Добавление новой задачи
  const addTask = () => {
    if (input.trim() === "") return;
    setTasks([
      ...tasks,
      { id: Date.now(), text: input.trim(), done: false }
    ]);
    setInput("");
  };

  // Удаление задачи
  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Отметка выполненной задачи
  const toggleDone = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, done: !task.done } : task));
  };

  // Редактирование задачи
  const editTask = (id, newText) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, text: newText } : task));
  };

  return (
    <div className="section">
      <h2>Проект: Чеклист</h2>

      <div className="task">
        <input 
          type="text" 
          placeholder="Введите новую задачу"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={addTask}>Добавить</button>
      </div>

      {tasks.length === 0 && <p>Список задач пуст.</p>}

      {tasks.map(task => (
        <Task 
          key={task.id} 
          task={task} 
          removeTask={removeTask} 
          toggleDone={toggleDone} 
          editTask={editTask}
        />
      ))}
    </div>
  );
}