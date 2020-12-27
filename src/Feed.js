import React, { useState } from 'react'
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';
import db from "./firebase";

function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) => 
            setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    }, []);

    // useEffect(() => {
    //     db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => 
    //         setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    //     );
    // }, []);

    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            
            {/* {posts.map((post) => (
                <Post 
                    key={post.id}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timestamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))} */}

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