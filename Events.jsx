import React from "react";

function Events() {
  const events = [
    { name: "Tech Fest 2025", date: "2025-11-10" },
    { name: "Cultural Day", date: "2025-12-02" },
    { name: "Sports Meet", date: "2026-01-15" },
  ];

  return (
    <div className="events">
      <h3>Upcoming Events</h3>
      <ul>
        {events.map((e, index) => (
          <li key={index}>
            <strong>{e.name}</strong> — {e.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Events;
