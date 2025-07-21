import { use, useState } from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { RiAddCircleFill } from "react-icons/ri";
import { HiOutlineSave } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";

function Content() {
  let [items, setItem] = useState([
    { id: 1, label: "HTML", checked: true },
    { id: 2, label: "Css", checked: false },
    { id: 3, label: "JS", checked: true },
  ]);

  let [newItem, setNewItem] = useState("");

  let [isEditing, setIsEditing] = useState(false);

  let [currId, setcurrId] = useState(null);

  let handleUpdate = (id) => {
    let updateItem = items.find((item) => {
      return item.id === id;
    });
    setcurrId(id)
    //console.log(updateItem)
    setNewItem(updateItem.label);
    setIsEditing(true);
  };

  let changeCheck = (id) => {
    let newListItem = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItem(newListItem);
  };

  let handleAddorSave = () => {
    if (newItem.trim() === "") {
      alert("Enter a valid item");
    } 
    else {
      if (isEditing) {
        let listItem = items.map( (item)=>{ return item.id===currId ? {...item, label: newItem} : item } )
        setItem(listItem)
        setIsEditing(false)
        setcurrId(null)
        setNewItem("")
      } 
      else {
        setItem([
          ...items,
          { id: items.length + 1, label: newItem, checked: false },
        ]);
        setNewItem("");
      }
    }
  };

  let handledelete = (id) => {
    let filteredlist = items
      .filter((item) => item.id !== id)
      .map((item, index) => {
        return { ...item, id: index + 1 };
      });
    //console.log(filteredlist)
    setItem(filteredlist);
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
          <button onClick={handleAddorSave}>
            {isEditing ? <HiOutlineSave color="red"/> : <RiAddCircleFill color="green"/>
}
          </button>
        </div>
        <ul>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => {
                    changeCheck(item.id);
                  }}
                />
                <label> {item.label} </label>
                <FaEdit
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    handleUpdate(item.id);
                  }}
                />
                <MdOutlineDeleteSweep
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    handledelete(item.id);
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
export default Content;
