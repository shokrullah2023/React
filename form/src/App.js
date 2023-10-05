import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

/*        TODO APPLICATION         */

// const Todo = (props) => (
//   <tr>
//     <td>
//       <label>{props.id}</label>
//     </td>
//     <td>
//       <input />
//     </td>
//     <td>
//       <label>{props.createdAt}</label>
//     </td>
//   </tr>
// );

// function App() {
//   const [todos, setTodo] = useState([
//     {
//       id: "todo1",
//       createdAt: "18:00",
//     },
//     {
//       id: "todo2",
//       createdAt: "20:30",
//     },
//   ]);

//   const reverseOrder = () =>
//     // Reverse is a mutative operation, so we need to create a new array first
//     setTodo([...todos].reverse());

//   // First example with keys, show browser console to see the warning.
//   return (
//     <div>
//       <button onClick={reverseOrder}>Reverse</button>
//       <table>
//         <tbody>
//           {todos.map((todo, index) => (
//             <Todo key={todo.id} id={todo.id} createdAt={todo.createdAt} />
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

/************ FORM *****************/

// function App() {
//   const [name, setName] = useState("");

//   const handleClick = (e) => {
//     e.preventDefault();
//     setName("");
//     console.log("Welcome to Key stroke");
//   };
//   return (
//     <div className="App">
//       <form onSubmit={handleClick}>
//         <fieldset>
//           <div className="Field">
//             <label htmlFor="name">Name: </label>
//             <input
//               id="name"
//               type="text"
//               name="name"
//               placeholder="Name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <button disabled={!name} type="submit">
//             Submit
//           </button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }

/*********GIVING FEEDBACK AND LEAVING COMMENT************/

// function App() {
//   const [score, setScore] = useState("4");
//   const [comment, setComment] = useState("");

//   const handleClick = (e) => {
//     e.preventDefault();
//     setScore("4");

//     if (Number(score) <= 5 && comment.length <= 5) {
//       alert("Please provide a comment explaining why the experience was poor.");
//       return;
//     }

//     console.log("Form Submitted");
//     setComment("");
//   };
//   return (
//     <div className="App">
//       <form onSubmit={handleClick}>
//         <fieldset>
//           <h2>Feedback form</h2>
//           <div className="Field">
//             <label>Score: {score} </label>
//             <input
//               type="range"
//               min="0"
//               max="10"
//               value={score}
//               onChange={(e) => setScore(e.target.value)}
//             />
//           </div>
//           <div className="Field">
//             <label>Comment: </label>
//             <textarea
//               // id="comment"
//               value={comment}
//               onChange={(e) => setComment(e.target.value)}
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </fieldset>
//       </form>
//     </div>
//   );
// }

/**************SET GOAL USING HOOK STATE*****************/

function GoalForm(props) {
  const [formData, setFormData] = useState({ goal: "", by: "" });

  function ChangeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function SubmitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ goal: "", by: "" });
  }

  return (
    <>
      <h1>My little Lemon Goals</h1>
      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          name="goal"
          placeholder="Goal"
          value={formData.goal}
          onChange={ChangeHandler}
        />
        <input
          type="text"
          name="by"
          placeholder="by"
          value={formData.by}
          onChange={ChangeHandler}
        />
        <button>Submit Goal</button>
      </form>
    </>
  );
}

function ListOfGoals(props) {
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.goal}>
          <span>
            My goal is to {g.goal}, by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
}
function App() {
  const [allGoals, updateAllGoals] = useState([]);

  function addGoal(goal) {
    updateAllGoals([...allGoals, goal]);
  }

  return (
    <div className="App">
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
}

export default App;
