import React from 'react'
import "./Feed.css";
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';

function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            
            <Post 
                profilePic="https://miro.medium.com/fit/c/336/336/1*01mcsMzmaEw7nmkD2r2iDg.jpeg"
                message='WOW this works!'
                timestamp='This is a timestamp'
                username='areumsheep'
                image="https://code.org/shared/images/social-media/codeorg2019_social.png"
            />
            <Post 
                profilePic="https://miro.medium.com/fit/c/336/336/1*01mcsMzmaEw7nmkD2r2iDg.jpeg"
                message='WOW this works!'
                timestamp='This is a timestamp'
                username='areumsheep'
            />
        </div>
    );
}

export default Feed;