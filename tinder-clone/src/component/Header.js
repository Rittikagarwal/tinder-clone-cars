import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import './Header.css';
import { IconButton } from '@mui/material';

function Header() {
  return (
    <div className='tinder-header'>
        <IconButton className='header-icons' fontSize='large'>
            <PersonIcon fontSize='large'/>
        </IconButton>

        <IconButton>
            <img src='https:/www.logo.wine/a/logo/Tinder_(app)/Tinder_(app)-Flame-Logo.wine.svg' />
        </IconButton>

        <IconButton className='header-icons' fontSize='large'>
            <ChatBubbleIcon />
        </IconButton>
    </div>
  )
}

export default Header