import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const UpdateAlbum = (props) => {
  
  // Function to get updated data from the input fields
  const getUpdateData = () => {
    const id = props.album.id; // Get the album id from props
    let updateTitle = document.getElementById('title-inp').value; // Get the new title from the input field
    let updateUserid = document.getElementById('userid-inp').value; // Get the new userId from the input field

    // If no new title is provided, use the existing title
    if (updateTitle === '') {
      updateTitle = props.album.title;
    }

    // If no new userId is provided, use the existing userId
    if (updateUserid === '') {
      updateUserid = props.album.userId;
    }

    // Call the updateAlbumInList function passed via props to update the album details
    props.updateAlbumInList(id, updateTitle, Number(updateUserid), props.album);
  }

  return (
    <>
      {/* Navbar component to navigate back to the Home page */}
      <Navbar path="/" page="Home" />

      <div className='update-album'>
        <div className='form-container'>
          {/* Display current album title */}
          <h4>Title : {props.album.title}</h4>

          {/* Input field to enter a new title */}
          <div className='inp-container'>
            Enter New Title :
            <input type="text" id='title-inp'></input>
          </div>

          {/* Display current userId */}
          <h4>User Id : {props.album.userId}</h4>

          {/* Input field to enter a new userId */}
          <div className='inp-container'>
            Enter New UserId :
            <input type="number" id='userid-inp'></input>
          </div>

          {/* Link to navigate back to the Home page, and button to save the updates */}
          <Link to='/'><button type='submit' onClick={getUpdateData}><strong>Save</strong></button></Link>
        </div>
      </div>
    </>
  )
}

export default UpdateAlbum;
