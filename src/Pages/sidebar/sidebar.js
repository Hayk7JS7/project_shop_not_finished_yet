import React from 'react'
import { NavLink} from 'react-router-dom';
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <h4><NavLink to={'/'} className="side">Home</NavLink></h4>
        <h4><NavLink to={'/about'} className="side">About</NavLink></h4>
        <h4><NavLink to={'/products'} className="side">Products</NavLink></h4>
        <h4><NavLink to={'/suggestion'} className="side">Suggestions</NavLink></h4>
      </div>
  )
}

export default Sidebar