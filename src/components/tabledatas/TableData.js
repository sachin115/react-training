import React, { useState, useEffect } from "react";
import axios from "axios";
import Constants from "../../customUtils/Config";
import { Link } from "react-router-dom";

function TableData() {
  const [users, setUsers] = useState([]);
  const [userFiltered, setUserFiltered] = useState([]);
  const [search, setSearch] = useState("");

  const getUser = async () => {
    try {
      let response = await axios.get(Constants.BASE_URL + "/users");
      setUsers(response.data);
      setUserFiltered(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  // useEffect(() => {
  //     const result = userFiltered.filter((user) => {
  //         return user.username.toLowerCase().match(search.toLowerCase())
  //             || user.name.toLowerCase().match(search.toLowerCase())
  //     });
  //     setUsers(result);
  // }, [search]);

  const SearchData = () => {
    const result = userFiltered.filter((user) => {
      return (
        user.name.toLowerCase().includes(search.toLowerCase()) ||
        user.username.toLowerCase().includes(search.toLowerCase())
      );
    });
    setUsers(result);
  };

  const DeleteData = (id) => {
    const index = users.findIndex((user) => user.id === id);
    let copy = [...users];
    copy.splice(index, 1);
    setUsers(copy);
  };

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="search"
        style={{ marginTop: "2vh" }}
      />
      <button
        variant="contained"
        style={{
          marginLeft: "2vh",
          color: "#ffffff",
          backgroundColor: "#101010",
        }}
        onClick={SearchData}
      >
        search
      </button>
      <table className="table" style={{ marginTop: "2vh" }}>
        <thead>
          <tr
            style={{
              color: "white",
              width: "100%",
              backgroundColor: "#101010",
            }}
          >
            <th scope="col">NAME</th>
            <th scope="col">EMAIL</th>
            <th scope="col">PHONE</th>
            <th scope="col">WEBSITE</th>
            <th scope="col">ACTION</th>
            <th scope="col">Posts</th>
          </tr>
        </thead>
        <tbody>
          {users.map(({ id, username, email, phone, website }) => {
            return (
              <tr key={id}>
                <td>{username}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{website}</td>
                <td>
                  <button
                    onClick={() => DeleteData(id)}
                    style={{ color: "#ffffff", backgroundColor: "#101010" }}
                  >
                    DELETE
                  </button>
                </td>
                <td>
                  <Link to={`/posts/${id}`}>posts</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TableData;
