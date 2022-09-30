import React from 'react';
import { useLocation } from 'react-router-dom';

function Dashboard() {

    let recievedData= useLocation();
    console.log(recievedData)
  return (
    <div>
        <h1>Welcome {recievedData.state.name}</h1>
        <img src={"http://localhost:9797/"+recievedData.state.profilePic}></img>
        <h1>Gender: {recievedData.state.gen}</h1>
        <h1>Mobile: {recievedData.state.mob}</h1>
        <h1>Email: {recievedData.state.email}</h1>
        <h1>State: {recievedData.state.state}</h1>
        <h1>City: {recievedData.state.city}</h1>
        <h1>Country: {recievedData.state.country}</h1>
        <h1>Marital Status: {recievedData.state.marital}</h1>
        
    </div>
  )
}

export default Dashboard