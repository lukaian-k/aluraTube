import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"


function HomePage() {
    return (
        <>
            <CSSReset />
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu />
                <Header />
                <TimeLine playlists={config.playlists} />
            </div>
        </>
    )
}

export default HomePage


const StyleHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`
const StyleBanner = styled.div`
    background: url(${config.banner}) center top/cover no-repeat fixed;
    max-width: 100%;
    height: 230px;
`

function Header() {
    return (
        <StyleHeader>
            <StyleBanner />

            <section className="user-info">
                <img src={`http://github.com/${config.github}.png`} />
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.description}
                    </p>
                </div>
            </section>
        </StyleHeader>
    )
}


function TimeLine(props) {
    // console.log("Componente: ", props.playlists)
    const playlistNames = Object.keys(props.playlists)

    return (
        <StyledTimeline>
            {
                playlistNames.map((playlistName) => {
                    const videos = props.playlists[playlistName]
                    console.log(playlistName)
                    console.log(videos)
                    return (
                        <section>
                            <h2>{playlistName}</h2>
                            <div>
                                {
                                    videos.map((video) => {
                                        return (
                                            <a href={`https://www.youtube.com/watch?v=${video.url}`}>
                                                <img src={`https://img.youtube.com/vi/${video.url}/hqdefault.jpg`} />
                                                <span>
                                                    {video.title}
                                                </span>
                                            </a>
                                        )
                                    })
                                }
                            </div>
                        </section>
                    )
                })
            }
        </StyledTimeline>
    )
}