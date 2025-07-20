import { use, useState } from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";

function Content() {
  let [items, setItem] = useState([
    { id: 1, label: "HTML", checked: true },
    { id: 2, label: "Css", checked: false },
    { id: 3, label: "JS", checked: true },
  ]);

  let [newItem, setNewItem] = useState("");

  let changeCheck = (id) => {
    let newListItem = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItem(newListItem);
  };
  return (
    <>
      <div>
        <h1>ToDo List</h1>
        <div>
          <input
            type="text"
            placeholder="Add new item"
            value={newItem}
            onChange={(e) => {
              setNewItem(e.target.value);
            }}
          />
          <button>Add</button>
        </div>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => {changeCheck(item.id)}}
                />
                <label> {item.label} </label>
                <MdOutlineDeleteSweep role="button" tabIndex={0} />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default Content;
