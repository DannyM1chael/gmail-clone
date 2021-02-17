import React from 'react'
import {useDispatch} from 'react-redux'
import {login} from '../features/userSlice'
import {Button} from '@material-ui/core'
import firebase from 'firebase/app'
import 'firebase/auth'
import './Login.scss'

const logoUrl = 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg'

export const Login = () => {
    const dispatch = useDispatch()
    const signIn = () => {
        const auth = firebase.auth()
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider)
            .then(({user}) => {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }))
            }).catch(error => alert(error.message))
    }
    return (
        <div className='login'>
            <div className="login__container">
                <img src={logoUrl} alt="login"/>
                <Button
                    variant='contained'
                    color='primary'
                    onClick={signIn}
                >
                    Login
                </Button>
            </div>
        </div>
    )
}
