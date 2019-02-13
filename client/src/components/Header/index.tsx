import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-apollo-hooks'

import history from '../../history'
import { LOG_OUT } from '../../mutations'
import { CURRENT_USER } from '../../queries'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import './header.css'

const Header = () => {
  const [anchorEl, handleClick] = useState<HTMLElement | null>(null)
  const open = Boolean(anchorEl)
  const { data, loading } = useQuery(CURRENT_USER, { suspend: false })
  const logOut = useMutation(LOG_OUT, {
    refetchQueries: [{ query: CURRENT_USER }],
    update: () => {
      handleClick(null)
    }
  })

  const renderMenuItems = () => {
    if (loading) {
      return null
    }

    if (data.me) {
      return [
        <MenuItem key="profile" onClick={() => handleClick(null)}>
          Profile
        </MenuItem>,
        <MenuItem key="logout" onClick={() => logOut()}>
          Log out
        </MenuItem>
      ]
    }

    return [
      <MenuItem key="profile" onClick={() => {
        handleClick(null)
        history.push('/signin')
      }}>
        Sign in
      </MenuItem>,
      <MenuItem key="logout" onClick={() => {
        handleClick(null)
        history.push('/signup')
      }}>
        Sign up
      </MenuItem>
    ]
  }

  return (
    <div className="header-container">
      <IconButton
        aria-label="More"
        aria-owns={open ? 'menu' : undefined}
        aria-haspopup="true"
        onClick={e => handleClick(e.currentTarget)}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="menu"
        open={open}
        anchorEl={anchorEl}
        onClose={() => handleClick(null)}
        PaperProps={{
          elevation: 3,
          style: {
            padding: '0 5',
            minWidth: 150
          }
        }}
      >
        {renderMenuItems()}
      </Menu>
    </div>
  )
}

export default Header
