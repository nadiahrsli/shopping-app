import { useState } from "react";
import Header from "./components/Header";
import Items from "./components/Items";
import AddItem from "./components/AddItem";

function App() {
  const [showAddItem, setShowAddItem] = useState(false);
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Bread",
      number: 2,
      reminder: true,
    },

    {
      id: 2,
      text: "Banana",
      number: 1,
      reminder: true,
    },

    {
      id: 3,
      text: "Yogurt",
      number: 4,
      reminder: false,
    },
  ]);

  // Add Task
  const addItem = (item) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newItem = { id, ...item };
    setItems([...items, newItem]);
  };

  // Delete Task
  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = (id) => {
    setItems(
      items.map((item) =>
        // ... item - spread across prop&value in task and set reminder if true = false, false = true
        item.id === id ? { ...item, reminder: !item.reminder } : item
      )
    );
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddItem(!showAddItem)}
        showAdd={showAddItem}
      />
      {showAddItem && <AddItem onAdd={addItem} />}
      {items.length > 0 ? (
        <Items items={items} onDelete={deleteItem} onToggle={toggleReminder} />
      ) : (
        "No Items to Show"
      )}
    </div>
  );
}

export default App;
