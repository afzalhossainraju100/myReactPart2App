import { use } from "react";
export default function Friends({ friendsPromise }) {
    const friends = use(friendsPromise);
  const friendsStyle = {
    border: "2px solid orange",
    margin: "20px",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
    textAlign: "center",
  };
  return (
    <div style={friendsStyle}>
      <h3>Friends :{friends.length}</h3>
    </div>
  );
}