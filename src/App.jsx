import Counter from "./counter.jsx";
import Batsman from "./batsman.jsx";
// import Users from "./users.jsx";
import Friends from "./friends.jsx";
import "./App.css";
import { Suspense } from "react";

// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data));


 const fetchFriends = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return data;
 }

function App() {
  const friendsPromise = fetchFriends();
  function handleClick() {
    alert("Button Clicked!");
  }
  const handleClick3 = () => {
    alert("Button 3 Clicked!");
  };

  return (
    <>
      <h3>Vite + React</h3>
      {/* <Suspense fallback={<h3>Loading Users...</h3>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}
      <Suspense fallback={<h3>Loading Friends...</h3>}>
        <Friends friendsPromise={friendsPromise}></Friends>
      </Suspense>
      <Counter></Counter>
      <Batsman></Batsman>

      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick2() {
          alert("Button 2 Clicked!");
        }}
      >
        Click Me2
      </button>
      <button onClick={handleClick3}>Click Me3</button>
    </>
  );
}

export default App;
