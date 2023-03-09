import axios from "axios";
import React, { useEffect, useState } from "react";
import Constants from "../../customUtils/Config";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  const albumData = async () => {
    let response = await axios.get(Constants.BASE_URL + "/albums");
    setAlbums(response.data);
  };

  useEffect(() => {
    albumData();
  }, []);

  return (
    <table className="table table-dark" style={{marginTop:"2vh"}}>
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">TITLE</th>
        </tr>
      </thead>
      <tbody>
         {albums.map((album) => {
          return (
            <tr key={album.id}>
              <th scope="row">{album.id}</th>
              <td>{album.title}</td>
            </tr>
          );
        })} 
      </tbody>
    </table>
  );
};

export default Albums;
