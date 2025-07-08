import { useState } from "react";
// Using Array of Object way of useState
// 1st way to handle inputs

const ShoppingList = () => {
  const [item, setItem] = useState([]);
  const [itemInput, setItemInput] = useState("");
  const [quantityInput, setQuantityInput] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (itemInput.trim()) {
      setItem([...item, { name: itemInput, quantity: quantityInput }]);
      setItemInput("");
    }
  };

  const handleItemChange = (e) => {
    setItemInput(e.target.value);
  };
  const handleQtyChange = (e) => {
    setQuantityInput(e.target.value);
  };
  return (
    <div>
      <h1>Shopping List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={itemInput}
          placeholder="Add new item"
          onChange={handleItemChange}
        />
        <input
          type="number"
          value={quantityInput}
          placeholder="Add quantity"
          onChange={handleQtyChange}
        />
        <button type="submit">Add Item</button>
      </form>

      <ol>
        {item.map((item, index) => (
          <li key={index}>
            Item: {item.name} {item.quantity}Qty
          </li>
        ))}
      </ol>
    </div>
  );
};

// // 2nd way to handle inputs
// const ShoppingList = () => {
//   const [item, setItem] = useState([]);
//   const [name, setName] = useState("");
//   const [quantity, setQuantity] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!name || !quantity) return;
//     const newItem = {
//       name,
//       quantity: parseInt(quantity),
//     };

//     setItem((prevItem) => [...prevItem, newItem]);
//     setName("");
//     setQuantity("");
//   };
//   return (
//     <div>
//       <h1>Shopping List</h1>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter your name"
//         />
//         <input
//           type="number"
//           value={quantity}
//           onChange={(e) => setQuantity(e.target.value)}
//           placeholder="Enter the Quantity"
//         />
//         <button type="submit">Add Item</button>
//       </form>

//       <ol>
//         {item.map((item, index) => (
//           <li key={index}>
//             {item.name} Quantity : {item.quantity}
//           </li>
//         ))}
//       </ol>
//     </div>
//   );
// };
export default ShoppingList;
