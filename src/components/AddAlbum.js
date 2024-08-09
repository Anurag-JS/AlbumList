import React from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';

const AddAlbum = (props) => {

  // Function to get input values (userId and title) and call the addAlbumToList function to add the album to the list
  const getAlbumFormData = () => {
    const userId = document.getElementById('aaform-userid-inp').value; // Get userId from input field
    const title = document.getElementById('aaform-title-inp').value; // Get album title from input field
    props.addAlbumToList(Number(userId), title); // Call the addAlbumToList function passed via props with userId and title
  }

  return (
    <>
      {/* Navbar component */}
      <Navbar path="/" page="Home" />

      {/* Container for the form to add a new album */}
      <div className='addalbum-container'>
        <div className='addalbum-form'>
          <h4>Enter New Album Details</h4>

          {/* Input field for User Id */}
          <div className='inp-container'>
            Enter User Id :
            <input id='aaform-userid-inp' type="number" />
          </div>

          {/* Input field for Album Title */}
          <div className='inp-container'>
            Enter Album Title :
            <input id='aaform-title-inp' type="text" />
          </div>

          {/* Button to add the album, wrapped with a Link component to navigate back to home page */}
          <div>
            <Link to="/"><button onClick={getAlbumFormData}><strong>Add To List</strong></button></Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AddAlbum
