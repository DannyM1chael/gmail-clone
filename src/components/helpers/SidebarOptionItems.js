import {
    Inbox,
    Star,
    AccessTime,
    LabelImportant,
    NearMe,
    Note,
    ExpandMore
} from '@material-ui/icons'

export const SidebarOptionItems = [
    {
        Icon: Inbox,
        title: 'Inbox',
        number: 54,
        selected: true,
    },
    {
        Icon: Star,
        title: 'Starred',
        number: 54,
        selected: false,
    },
    {
        Icon: AccessTime,
        title: 'Snoozed',
        number: 54,
        selected: false,
    },
    {
        Icon: LabelImportant,
        title: 'Important',
        number: 54,
        selected: false,
    },
    {
        Icon: NearMe,
        title: 'Sent',
        number: 54,
        selected: false,
    },
    {
        Icon: Note,
        title: 'Drafts',
        number: 54,
        selected: false,
    },
    {
        Icon: ExpandMore,
        title: 'More',
        number: 54,
        selected: false,
    },
]