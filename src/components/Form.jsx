import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handlerSubmit = (event) => {
    event.preventDefault();

    //Check if have description
    if (!description) {
      return;
    }

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem); //Add new item to items array

    setDescription(""); //Clear input fileds
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={(e) => handlerSubmit(e)} id="1">
      <h3>What do you need for your 😍 trip?</h3>

      <select
        id="1"
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>
            {num}
          </option>
        ))}
      </select>

      <input
        id="2"
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />

      <button>Add</button>
    </form>
  );
}
