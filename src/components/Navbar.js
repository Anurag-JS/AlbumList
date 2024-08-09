import React from 'react';
import { Link } from 'react-router-dom'

// Navbar component that receives button name and path as props
const Navbar = (props) => {

  return (
    <div className='navbar'>
      {/* Brand name with click event to handle specific action, such as navigation or toggling a state */}
      <h2 onClick={() => props.handleClick(false)}>
        <span className='brand'>ALBUMLIST</span> 
      </h2>
      <span className='name'>by Anurag</span>

      {/* Link to navigate to a specified path with a button displaying the page name */}
      <Link to={props.path}>
        <button>{props.page}</button>
      </Link>
    </div>
  )
}

export default Navbar
