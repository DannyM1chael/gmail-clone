import React, {useState, useEffect} from 'react'
import {
    ArrowDropDown,
    Redo,
    MoreVert,
    ChevronLeft,
    KeyboardHide,
    ChevronRight,
    Settings
} from "@material-ui/icons"
import {Checkbox, IconButton} from "@material-ui/core"
import Section from "./Section"
import EmailRow from "./EmailRow";
import {EmailSectionItems} from './helpers/EmailSectionItems'
import {db} from "../firebase";
import './EmailList.scss'

export const EmailList = () => {
    const [emails, setEmails] = useState([])
    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => setEmails(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }))))

    }, [])
    return (
        <div className='emailList'>
            <div className="emailList__settings">
                <div className="emailList__settingsLeft">
                    <Checkbox/>
                    <IconButton>
                        <ArrowDropDown/>
                    </IconButton>
                    <IconButton>
                        <Redo/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
                <div className="emailList__settingsRight">
                    <IconButton>
                        <ChevronLeft/>
                    </IconButton>
                    <IconButton>
                        <ChevronRight/>
                    </IconButton>
                    <IconButton>
                        <KeyboardHide/>
                    </IconButton>
                    <IconButton>
                        <Settings/>
                    </IconButton>
                </div>
            </div>
            <div className="emailList__sections">
                {EmailSectionItems.map((item, i) => (
                    <Section key={i + 'e'} {...item} />
                ))}
            </div>
            <div className="emailList__List">
                {emails.map(({id, data: {title, subject, message, timestamp}}) => (
                    <EmailRow
                        id={id}
                        key={id}
                        title={title}
                        subject={subject}
                        description={message}
                        time={new Date(timestamp?.seconds *1000).toUTCString()}
                    />
                ))}
            </div>
        </div>
    )
}
