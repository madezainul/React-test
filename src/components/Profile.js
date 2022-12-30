import React, { useState } from "react";
import NowLoading from './NowLoading';

const Profile = (props) => {

    const [users, setUsers] = useState([
        {
          name: "Made",
          hobby: "Makan"
        },
        {
          name: "Vincent",
          hobby: "coding"
        },
        {
          name: "Jane",
          hobby: "swimming"
        },
        {
          name: "Jhon",
          hobby: "running"
        },
        {
          name: "Lidya",
          hobby: "Menggambar"
        }
      ])

  //props : sebuah parameter yang diberikan dari parent component nya
//   const { users } = props;
  return (
    <div className="App">
      <h1>Profile Page</h1>
            <p>Profile Table</p>
      <table border="1" cellspacing="0">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Hobby</th>
          </tr>
        </thead>
        <tbody>
          {users.length !== 0 ? (
            users.map((user, index) => {
              const { name, hobby } = user;
              return (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{hobby}</td>
                </tr>
              )
            })
          ) : (
            <NowLoading />
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
