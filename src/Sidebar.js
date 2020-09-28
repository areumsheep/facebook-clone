import React from 'react';
import SidebarRow from './SidebarRow';
import "./SidebarRow.css";

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import { ExpandMoreOutlined } from "@material-ui/icons";

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow src="https://avatars3.githubusercontent.com/u/48716298?v=4" title="areumsheep" />
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center'/>

            <SidebarRow Icon={EmojiFlagsIcon} title='Pages'/>
            <SidebarRow Icon={PeopleIcon} title='Friends'/>
            <SidebarRow Icon={ChatIcon} title='Massenger'/>
            <SidebarRow Icon={StorefrontIcon} title='Marketplace'/>
            <SidebarRow Icon={VideoLibraryIcon} title='Videos'/>
            <SidebarRow Icon={ExpandMoreOutlined} title='More'/>

            {/* <SidebarRow title='Friends' />
            <SidebarRow title='Massenger' />
            <SidebarRow title='Marketplace' />
            <SidebarRow title='Videos' /> 
            <SidebarRow title='Pages' /> */}
        </div>
    );
}

export default Sidebar;