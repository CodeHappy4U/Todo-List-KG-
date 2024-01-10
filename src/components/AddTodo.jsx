import { useRef } from "react";
import { MdOutlineAddComment } from "react-icons/md";

function AddTodo({ onNewItem }) {
  // const [todoName, setTodoName] = useState("");
  // const [dueDate, setDueDate] = useState(""); //not updating state require

  // CREATED REFERENCE USE REF
  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // Not require
  // const handleNameChange = (event) => {
    //   setTodoName(event.target.value);
    //   noOfUpdates.current += 1;
    // };
    
  // Not require
  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`noOfUpdates are :${noOfUpdates.current}`);
  // };

  const handleAddButtonClicked = (event) => {
    event.preventDefault(); //default to pass on server
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    // console.log(`${todoName} due on: ${dueDate}`)
    onNewItem(todoName, dueDate);
    // setDueDate("");
    // setTodoName("");
  };

  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={handleAddButtonClicked}>
        <div className="col-6">
          <input
            type="text"
            ref={todoNameElement}
            placeholder="Enter Todo Here"
            // value={todoName}
            // onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input type="date" ref={dueDateElement}   />
        </div>
        <div className="col-2">
          <button
            // type="button" // When you use form its default type "SUBMIT"
            className="btn btn-success kg-button"
            // onClick={handleAddButtonClicked}
          >
            <MdOutlineAddComment />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
