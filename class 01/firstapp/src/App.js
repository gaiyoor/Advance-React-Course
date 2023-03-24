import { useState } from "react";

const ToDo = (props) => {

    return(
    <li>
        <span>{props.id}</span> - <span>{props.createdAt}</span>
    </li>
    );
}
function App() {
    const [todos, setTodos] = useState([
        {
            id: 'todo1',
            createdAt: '18',
        },
        {
            id: 'todo2',
            createdAt: '20',
        }
    ]);
    function reverseOrder() {
        setTodos([...todos].reverse())
    }
    return (
        <div className="App">
        <button onClick={reverseOrder}>reverse</button>
            <ul>
                {todos.map((todo, index) => <ToDo id={todo.id} createdAt={todo.createdAt} />
                )}
            </ul>
        </div>
    );
}

export default App;