import { useState } from "react";

const AddItem = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text) {
      alert("Please add an item");
      return;
    }

    onAdd({ text, number, reminder });

    setText("");
    setNumber("");
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Item</label>
        <input
          type="text"
          placeholder="Add Item"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>Amount</label>
        <input
          type="number"
          value={number}
          min="1"
          max="1000"
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Add to List Item</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input type="submit" value="Save" className="btn btn-block" />
    </form>
  );
};

export default AddItem;
