import React from 'react';
import { Avatar } from "@material-ui/core";
import "./Story.css";

function Story({ image, profileSrc, title }) {
    return (
        <div className="story">
            <Avatar src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}

export default Story;