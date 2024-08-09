import React from 'react'
import List from './List'
import Navbar from './Navbar'

// Component to display the list of albums
const AlbumsList = (props) => {
  return (
    <>
      {/* Navbar component with a link to the Add Album page */}
      <Navbar page="Add Album" path="/add-album" />

      {/* Container for displaying the list of albums */}
      <div className='albums-list'>
        {/* Map through the albums array passed via props and render a List component for each album */}
        {props.albums.map((album) => 
          <List 
            album={album} 
            key={album.id} 
            setUpdateAlbum={props.setUpdateAlbum} 
            deleteAlbumFromList={props.deleteAlbumFromList} 
          />
        )}
      </div>
    </>
  )
}

export default AlbumsList
