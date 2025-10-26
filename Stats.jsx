import React, { useEffect, useState } from "react";

function Stats() {
  const [completed, setCompleted] = useState(0);
  const [pending, setPending] = useState(0);

  useEffect(() => {
    const assignments = JSON.parse(localStorage.getItem("assignments")) || [];
    const done = assignments.filter((a) => a.done).length;
    setCompleted(done);
    setPending(assignments.length - done);
  }, [localStorage.getItem("assignments")]);

  return (
    <div className="stats">
      <h3>Quick Stats</h3>
      <p>✅ Completed: {completed}</p>
      <p>📚 Pending: {pending}</p>
    </div>
  );
}

export default Stats;
