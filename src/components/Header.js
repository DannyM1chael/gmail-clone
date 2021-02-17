import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Menu, Search, Apps, Notifications, ArrowDropDown} from '@material-ui/icons'
import {IconButton, Avatar} from "@material-ui/core"
import GmailLogo from '../assets/gmail_logo.png'
import firebase from 'firebase/app'
import 'firebase/auth'
import './Header.scss'
import {logout, selectUser} from "../features/userSlice";


export const Header = () => {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const auth = firebase.auth()
    const signOut = () => {
        auth.signOut()
            .then(() => dispatch(logout()))
    }
    return (
        <header className='header'>
            <div className="header__left">
                <IconButton>
                    <Menu/>
                </IconButton>
                <img src={GmailLogo} alt="gmail"/>
            </div>
            <div className="header__middle">
                <Search/>
                <input type="text" placeholder='Search mail'/>
                <ArrowDropDown className='header__input'/>
            </div>
            <div className="header__right">
                <IconButton>
                    <Apps/>
                </IconButton>
                <IconButton>
                    <Notifications/>
                </IconButton>
                <Avatar src={user?.photoURL} onClick={signOut} className='header__avatar'/>
            </div>
        </header>
    )
}
