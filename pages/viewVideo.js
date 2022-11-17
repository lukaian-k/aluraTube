import React from "react"
import styled from "styled-components"


export default function VideoScreen() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
        }}>
            <PlayerYouTube url={'uy-66JYifYw'} title={'ALAN JOGA!'} />
        </div>
    )
}


const StyledPlayerYouTube = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
    margin: 1rem;

    iframe {
        width: 1253px;
        height: 580px;
    }
`

function PlayerYouTube({ url, title }) {
    return (
        <StyledPlayerYouTube>
            <iframe
                src={`https://www.youtube.com/embed/${url}`}
                title={title}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            />
        </StyledPlayerYouTube>
    )
}