import React from 'react'

import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import ToolBar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'

import './Header.css'

let name = "FirstName LastName"

const Header = () => {
    return(
        <AppBar>
          <ToolBar>
            <Link to="/">
              <Button>{name}</Button>
            </Link>
            <Link to="/Rooms" className='roomsButton'>
              <Button>Rooms</Button>
            </Link>
          </ToolBar>
        </AppBar>
    )
}

export default Header
