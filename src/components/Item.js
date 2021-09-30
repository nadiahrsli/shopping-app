import { FaTimes } from "react-icons/fa";

const Item = ({ item, onDelete, onToggle }) => {
  return (
    <div
      className={`item ${item.reminder ? "reminder" : ""}`}
      onDoubleClick={() => onToggle(item.id)}
    >
      <h3>
        {item.text}{" "}
        <FaTimes
          style={{ color: "black", cursor: "pointer" }}
          onClick={() => onDelete(item.id)}
        />
      </h3>
      <p>Amount: {item.number}</p>
    </div>
  );
};

export default Item;
