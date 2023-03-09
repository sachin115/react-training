import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function UserData() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(false);
  const [item, setItem] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    const user = {
      id: uuidv4(),
      name,
      email,
      address,
    };
    setUsers([...users, user]);
  };

  const deleteUser = (id) => {
    const index = users.findIndex((user) => user.id === id);
    if (index > -1) {
      let copy = [...users];
      copy.splice(index, 1);
      setUsers(copy);
    }
  };

  const updateUser = (e) => {
    e.preventDefault();
    const user = {
      id: uuidv4(),
      name,
      email,
      address,
    };
    const newItem = users.find((user) => user.email === item);
    let copy = [...users];
    copy.splice(newItem, 1, user);
    setUsers(copy);
    setEdit(false);
  };

  const renderUpdateUser = (id) => {
    const { name, email, address } = users.find((user) => user.id === id);
    setName(name);
    setEmail(email);
    setAddress(address);
    setItem(email);
    setEdit(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form onSubmit={(e) => (edit ? updateUser(e) : addUser(e))}>
            <br />
            <div>
              <input
                placeholder="name"
                type="text"
                className="form-control-mb-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <br />
            <div>
              <input
                placeholder="email"
                type="text"
                className="form-control-mb-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div>
              <input
                placeholder="address"
                type="text"
                className="form-control-mb-2"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <br />
            <div>
              <button
                className="form-control btn"
                style={{
                  width: "20vh",
                  color: "white",
                  marginLeft: "4vh",
                  backgroundColor: "#101010",
                }}
                type="submit"
              >
                {edit ? "UPDATE USER" : "ADD USER"}
              </button>
            </div>
            <br />
          </form>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr
            style={{
              color: "white",
              width: "100%",
              backgroundColor: "#101010",
            }}
          >
            <th scope="col">name</th>
            <th scope="col">email</th>
            <th scope="col">address</th>
            <th scope="col">actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, name, email, address }) => {
            return (
              <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{address}</td>
                <td>
                  <button
                    style={{ color: "white", backgroundColor: "#101010" }}
                    onClick={() => deleteUser(id)}
                  >
                    DELETE
                  </button>
                  <button
                    style={{
                      color: "white",
                      marginLeft: "2vh",
                      backgroundColor: "#101010",
                    }}
                    onClick={() => renderUpdateUser(id)}
                  >
                    EDIT
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default UserData;
