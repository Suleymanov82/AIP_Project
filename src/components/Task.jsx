import { useState } from "react";

export default function Task({ task, removeTask, toggleDone, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const saveEdit = () => {
    if (newText.trim() === "") return;
    editTask(task.id, newText.trim());
    setIsEditing(false);
  };

  return (
    <div className="task" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <input 
        type="checkbox" 
        checked={task.done} 
        onChange={() => toggleDone(task.id)} 
      />
      
      {isEditing ? (
        <input 
          type="text" 
          value={newText} 
          onChange={(e) => setNewText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && saveEdit()}
        />
      ) : (
        <span style={{ textDecoration: task.done ? "line-through" : "none", flexGrow: 1 }}>
          {task.text}
        </span>
      )}

      {isEditing ? (
        <button onClick={saveEdit}>Сохранить</button>
      ) : (
        <button onClick={() => setIsEditing(true)}>Редактировать</button>
      )}

      <button onClick={() => removeTask(task.id)}>Удалить</button>
    </div>
  );
}