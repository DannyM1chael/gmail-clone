import React, {useEffect} from 'react'
import {Header, Sidebar, Mail, EmailList, SendMail, Login} from './components'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux";
import {selectSendMessageIsOpen} from './features/mailSlice'
import {login, selectUser} from "./features/userSlice";
import firebase from "firebase";
import 'firebase/auth'
import './App.scss'

function App() {
    const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const auth = firebase.auth()

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                dispatch(login({
                    displayName: user.displayName,
                    email: user.email,
                    photoURL: user.photoURL
                }))
            }
        })
    }, [])

    return (
        <Router>
            {!user ? (
                <Login/>
            ) : (
                <div className="app">
                    <Header/>
                    <div className="app__body">
                        <Sidebar/>
                        <Switch>
                            <Route path='/mail'>
                                <Mail/>
                            </Route>
                            <Route path='/'>
                                <EmailList/>
                            </Route>
                        </Switch>
                    </div>
                    {sendMessageIsOpen && <SendMail/>}
                </div>
            )}
        </Router>
    )
}

export default App
