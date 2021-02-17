import React from 'react'
import {useDispatch} from 'react-redux'
import firebase from 'firebase'
import {Close} from '@material-ui/icons'
import {Button} from '@material-ui/core'
import {useForm} from 'react-hook-form'
import {closeSendMessage} from "../features/mailSlice";
import {db} from "../firebase";
import './SendMail.scss'

export const SendMail = () => {
    const {register, handleSubmit, errors} = useForm()
    const dispatch = useDispatch()
    const onSubmit = formData => {
        db.collection('emails').add({
            to: formData.to,
            subject: formData.subject,
            message: formData.message,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        dispatch(closeSendMessage())
    }
    return (
        <div className='sendMail'>
            <div className="sendMail__header">
                <h3>New Message</h3>
                <Close className='sendMail__close' onClick={() => dispatch(closeSendMessage())}/>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="email"
                    name='to'
                    placeholder='To'
                    ref={register({required: true})}
                />
                {errors.to && <p className='sendMail__error'>Field is required</p>}
                <input
                    type="text"
                    name='subject'
                    placeholder='Subject'
                    ref={register({required: true})}
                />
                {errors.subject && <p className='sendMail__error'>Field is required</p>}
                <input
                    type="text"
                    name='message'
                    placeholder='Message'
                    className='sendMail__message'
                    ref={register({required: true})}
                />
                {errors.message && <p className='sendMail__error'>Field is required</p>}

                <div className="sendMail__options">
                    <Button
                        className='sendMail__send'
                        type='submit'
                        variant='contained'
                        color='primary'
                    >
                        Send
                    </Button>
                </div>
            </form>
        </div>
    )
}
