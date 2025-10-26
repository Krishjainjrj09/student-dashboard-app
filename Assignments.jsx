import React, { useState, useEffect } from "react";

function Assignments() {
  const [assignments, setAssignments] = useState(
    JSON.parse(localStorage.getItem("assignments")) || []
  );
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    localStorage.setItem("assignments", JSON.stringify(assignments));
  }, [assignments]);

  const addAssignment = (e) => {
    e.preventDefault();
    if (!title || !subject || !dueDate) return;
    const newAssignment = {
      id: Date.now(),
      title,
      subject,
      dueDate,
      done: false,
    };
    setAssignments([...assignments, newAssignment]);
    setTitle("");
    setSubject("");
    setDueDate("");
  };

  const toggleDone = (id) => {
    setAssignments(
      assignments.map((a) =>
        a.id === id ? { ...a, done: !a.done } : a
      )
    );
  };

  const deleteAssignment = (id) => {
    setAssignments(assignments.filter((a) => a.id !== id));
  };

  return (
    <div className="assignments">
      <h3>Assignments</h3>
      <form onSubmit={addAssignment}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {assignments.map((a) => (
          <li key={a.id} className={a.done ? "done" : ""}>
            <strong>{a.title}</strong> ({a.subject}) - Due: {a.dueDate}
            <div>
              <button onClick={() => toggleDone(a.id)}>
                {a.done ? "Undo" : "Done"}
              </button>
              <button onClick={() => deleteAssignment(a.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignments;
