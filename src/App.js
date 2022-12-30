import React, { useState } from 'react';
import './App.css';
import Profile from './components/Profile';


function App() {

  

  // const NowLoading = () => {
  //   return (
  //     <div>
  //       <h3>Loading data...</h3>
  //     </div>
  //   )
  // }

  return (
    <div className='App'>
      <h1>Belajar React</h1>
      <p>Lorem ipsum is a dummy text</p>
      <hr/>

      {/* 
        Jika array users kosong === 0,
        akan menampilkan NowLoading
        Jika array users lebih dari 0,
        akan menampilkan users.map
      */}

      {/* {
        users.length !== 0 ?
        users.map(user => {
          const {name, hobby} = user
          return (
            <Profile name={name} hobby={hobby}/>
          )
        }) : <NowLoading/>
      } */}

      {/* <Profile name={"Made"} hobby={"Makan Nasi Ayam"}></Profile>
      <Profile name={"Vincent"} hobby={"Coding"}></Profile>
      <Profile name={"Jack"} hobby={"Gym"}></Profile>
      <Profile name={"Jannie"} hobby={"Swimming"}></Profile> */}
      {/* <Profile users={users}/> */}
      <Profile/>
    </div>
  );
}

export default App;
