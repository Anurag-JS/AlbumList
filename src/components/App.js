import React, { Component } from 'react'
import { Routes, Route } from "react-router-dom";
import AddAlbum from './AddAlbum';
import AlbumsList from './AlbumsList';
// import Navbar from './Navbar'
import UpdateAlbum from './UpdateAlbum';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      albums: [], // State to hold the list of albums
      updateAlbum: {} // State to hold the album being updated
    }
  }

  // This lifecycle method is called once the component is mounted
  componentDidMount = async () => {
    const albums = await fetch('https://jsonplaceholder.typicode.com/albums')
      .then((response) => response.json())
      .then((json) => json);
    // Update the state with the fetched albums data
    this.setState({
      albums
    })
  }

  // Delete album function-----------------------------------------------------------------------------------
  // This function takes an album id and deletes the album from the albums list, then updates the state
  deleteAlbumFromList = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, { method: 'DELETE', })
    // Filter out the deleted album and update the state
    const newAlbums = this.state.albums.filter((album) => album.id !== id);
    alert("Your Album Deleted successfully");
    this.setState({
      albums: newAlbums,
    })
  }
  //---------------------------------------------------------------------------------------------------------

  // Update album functions------------------------------------------------------------------------------------
  // This function takes an album object from the albums list and sets the state for the album to be updated
  setUpdateAlbum = async (album) => {
    this.setState({
      updateAlbum: album
    })
  }

  // This function takes the album id, updated title, updated userId, and the old album, then updates it and sets the state
  updateAlbumInList = async (id, updateTitle, updateUserid, oldAlbum) => {
    const albums = this.state.albums;
    const index = albums.indexOf(oldAlbum);
    let updatedAlbum = [];
    // If the album id is less than 100, update the album using the API
    if (id < 100) {
      updatedAlbum = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`, {
        method: 'PUT',
        body: JSON.stringify({
          userId: updateUserid,
          id: id,
          title: updateTitle,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }).then((response) => response.json()).then((json) => json);
    } else {
      // If the id is greater than 100, create a new album object
      updatedAlbum = {
        userId: updateUserid,
        id: id,
        title: updateTitle
      }
    }
    // Update the album in the state and notify the user
    albums[index] = updatedAlbum;
    this.setState({
      albums: albums
    })
    alert("Update Successfully done")
  }
  //--------------------------------------------------------------------------------------------------------

  // Add album function--------------------------------------------------------------------------------------
  // This function takes the userId and title from input and adds it to the bottom of the albums list
  addAlbumToList = (userId, title) => {
    // Add the album using the API
    fetch('https://jsonplaceholder.typicode.com/albums', {
      method: 'POST',
      body: JSON.stringify({
        userId: userId,
        id: this.state.count,
        title: title,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json()).then((json) => json);
    
    // Get the last album id and create a new album with an incremented id
    const length = this.state.albums.length;
    const lastId = this.state.albums[length - 1].id;
    const album = {
      userId: userId,
      id: lastId + 1,
      title: title,
    }
    // Update the state with the new album and notify the user
    this.setState({
      albums: [...this.state.albums, album]
    })
    alert("New Album added successfully in the bottom");
  }
  //--------------------------------------------------------------------------------------------------------

  render() {
    return (
      <>
        {/* Define routes for the application */}
        <Routes>
          {/* Route for displaying the albums list */}
          <Route path='/' element={<AlbumsList albums={this.state.albums} setUpdateAlbum={this.setUpdateAlbum} deleteAlbumFromList={this.deleteAlbumFromList} />}></Route>
          {/* Route for adding a new album */}
          <Route path='/add-album' element={<AddAlbum addAlbumToList={this.addAlbumToList} />}></Route>
          {/* Route for updating an existing album */}
          <Route path='/update-album' element={<UpdateAlbum album={this.state.updateAlbum} updateAlbumInList={this.updateAlbumInList} />}></Route>
        </Routes>
      </>
    )
  }
}
