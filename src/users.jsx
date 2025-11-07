import { useEffect, useState } from "react";

export default function Users({ fetchUsers }) {
  const usersStyle = {
    border: "2px solid red",
    margin: "20px",
    padding: "20px",
    borderRadius: "10px",
    width: "200px",
    textAlign: "center",
  };

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    // fetchUsers may be a Promise or a function that returns a Promise
    if (typeof fetchUsers === "function") {
      try {
        const result = fetchUsers();
        if (result && typeof result.then === "function") {
          result
            .then((data) => {
              setUsers(data || []);
              setLoading(false);
            })
            .catch(() => setLoading(false));
        } else {
          // not a promise — assume data
          setUsers(result || []);
          setLoading(false);
        }
      } catch {
        setLoading(false);
      }
    } else if (fetchUsers && typeof fetchUsers.then === "function") {
      fetchUsers
        .then((data) => {
          setUsers(data || []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    } else {
      setUsers([]);
      setLoading(false);
    }
  }, [fetchUsers]);

  return (
    <div style={usersStyle}>
      {loading ? <h3>Loading users...</h3> : <h3>User: {users.length}</h3>}
    </div>
  );
}
