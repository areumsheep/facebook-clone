import React from 'react';
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className="storyReel">
            <Story 
                image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
                profileSrc="https://avatars3.githubusercontent.com/u/48716298?v=4"
                title="areumsheep"
            />
            
            <Story 
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTBHC2s4NFdzXEsVzvBPGjkrSePQa-8XFuNtQ&usqp=CAU"
                profileSrc="https://i.picsum.photos/id/928/400/400.jpg?hmac=k2EMUXnGU8q7UZvX5ztLcUWpDyIVSXGJXoaoHzDqv54"
                title="Rafeh Qazi"
            />

            <Story 
                image="https://images.unsplash.com/photo-1527082395-e939b847da0d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOEyMDd9&w=1000&q=80"
                profileSrc="https://image.cnbcfm.com/api/v1/image/106569797-1591649109683geetyimages-1032942656.jpeg?v=1597932630"
                title="Frankie"
            />

            <Story 
                image="https://webcdn-adespressoinc.netdna-ssl.com/wp-content/uploads/2019/11/amazing-example-fb-ig-stories-that-convert-01.jpg"
                profileSrc="https://prod-takelessons.netdna-ssl.com/document/profile_183419_pi_IMG_6868.JPG?v=1561606635"
                title="Aaron Bernath"
            />

            <Story 
                image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/Facebook-Stories-exist-for-a-maximum-of-24-hours.png"
                profileSrc="https://miro.medium.com/fit/c/336/336/2*4lH0jftaq_sPRqQisUsVqw.jpeg"
                title="Naz"
            />
        </div>
    );
}

export default StoryReel;