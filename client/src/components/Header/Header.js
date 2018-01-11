import React from 'react'

import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import ToolBar from 'material-ui/Toolbar'
import Button from 'material-ui/Button'

import './Header.css'

let name = "Room Reserving System"

const Header = () => {
    return(
        <AppBar>
          <ToolBar>
            <Link className='title' to="/">
              <Button>{name}</Button>
            </Link>
          </ToolBar>
        </AppBar>
    )
}

export default Header
