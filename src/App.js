import "./App.css";
import { useState } from "react";
import Title from "./components/Title";
import React from "react";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
  // test
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvent] = useState(true);
  const [events, setEvents] = useState([]);

  const subtitle = "All the latest events in Mairoland";

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  };

  return (
    <div className="App">
      <Title title="Events in your area" subtitle={subtitle} />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvent(false)}>Hide Events</button>
        </div>
      )}

      {!showEvents && (
        <div>
          <button onClick={() => setShowEvent(true)}>Show Events</button>
        </div>
      )}

      {showEvents && (
        <EventList eventsList={events} handleClick={handleClick} />
      )}

      <div>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
          Add New Events
        </button>
      </div>

      {showModal && (
        <Modal isSalesModal={true}>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
    </div>
  );
}

export default App;
