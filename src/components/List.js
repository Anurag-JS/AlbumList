import React from 'react'
import { Link } from "react-router-dom";

// Component to display a single album item with options to update or delete
const List = (props) => {
  return (
    <div className='list'>
      {/* Display the album title */}
      <h3>{props.album.title}</h3>

      {/* Button group for updating and deleting the album */}
      <div className='button-group'>
        {/* Link to the update album page, with an onClick handler to set the album to be updated */}
        <Link to="/update-album">
          <button className="update-btn" onClick={() => props.setUpdateAlbum(props.album)}><strong>Update</strong></button>
        </Link>

        {/* Button to delete the album from the list */}
        <button className='delete-btn' onClick={() => props.deleteAlbumFromList(props.album.id)}><strong>Delete</strong></button>
      </div>
    </div>
  )
}

export default List
