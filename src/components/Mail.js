import React from 'react'
import {useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {IconButton} from '@material-ui/core'
import {LabelImportant} from '@material-ui/icons'
import {MailToolsItemsLeft, MailToolsItemsRight} from './helpers/MailToolsItems'
import {selectOpenMail} from '../features/mailSlice'
import './Mail.scss'

export const Mail = () => {
    const history = useHistory()
    const selectedMail = useSelector(selectOpenMail)
    return (
        <div className='mail'>
            <div className="mail__tools">
                <div className="mail__toolsLeft">
                    {MailToolsItemsLeft.filter((item, i) => i === 0)
                        .map((Tool, i) => (
                            <IconButton key={i + 'tl'} onClick={() => history.push('/')}>
                                {<Tool/>}
                            </IconButton>
                        ))}
                    {MailToolsItemsLeft.filter((item, i) => i !== 0)
                        .map((Tool, i) => (
                            <IconButton key={i + 'tl'}>
                                {<Tool/>}
                            </IconButton>
                        ))}
                </div>
                <div className="mail__toolsRight">
                    {MailToolsItemsRight.map((Tool, i) => (
                        <IconButton key={i + 'tr'}>
                            {<Tool/>}
                        </IconButton>
                    ))}
                </div>
            </div>
            <div className="mail__body">
                <div className="mail__bodyHeader">
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportant className='mail__important'/>
                    <p>{selectedMail?.title}</p>
                    <p className='mail__time'>{selectedMail?.time}</p>
                </div>
                <p className="mail__message">
                    {selectedMail?.description}
                </p>
            </div>
        </div>
    )
}
