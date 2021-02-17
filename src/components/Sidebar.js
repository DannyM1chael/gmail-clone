import React from 'react'
import {useDispatch} from "react-redux";
import {Button, IconButton} from "@material-ui/core"
import {Add, Person, Duo, Phone} from '@material-ui/icons'
import SidebarOption from "./SidebarOption";
import {SidebarOptionItems} from "./helpers/SidebarOptionItems";
import {openSendMessage} from "../features/mailSlice";
import './Sidebar.scss'

export const Sidebar = () => {
    const dispatch = useDispatch()
    return (
        <div className='sidebar'>
            <Button startIcon={<Add fontSize='large'/>}
                    className='sidebar__compose'
                    onClick={() => dispatch(openSendMessage())}
            >
                Compose
            </Button>
            {SidebarOptionItems.map((item, i) => (
                <SidebarOption key={i + 's'} {...item} />
            ))}
            <div className="sidebar__footer">
                <div className="sidebar__footerIcons">
                    <IconButton>
                        <Person/>
                    </IconButton>
                    <IconButton>
                        <Duo/>
                    </IconButton>
                    <IconButton>
                        <Phone/>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
