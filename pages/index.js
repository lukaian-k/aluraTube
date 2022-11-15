import React from "react"
import config from "../config.json"
import styled from "styled-components"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"
import Bookmarks from "../src/components/Timeline"


export default function HomePage() {
    const [valorDoFiltro, setValorDoFiltro] = React.useState("")

    return (
        <>
            <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
            }}>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro} />
                <Header />
                <TimeLine searchValue={valorDoFiltro} playlists={config.playlists} />
            </div>
        </>
    )
}


const StyledHeader = styled.div`
    background-color: ${({ theme }) => theme.backgroundLevel1};

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
const StyledBanner = styled.div`
    /* metodo 1: acessando o json de forma direta
    background: url(${config.banner}) center top/cover no-repeat fixed; */
    
    /* metodo 2: passando o json por parametro - props */
    background: url(${({ banner }) => banner}) center top/cover no-repeat fixed;

    height: 230px;
`

function Header() {
    return (
        <StyledHeader>
            <StyledBanner banner={config.banner} />

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
        </StyledHeader>
    )
}


function TimeLine({ searchValue, ...props }) {
    const playlistNames = Object.keys(props.playlists)

    return (
        <StyledTimeline>
            {
                playlistNames.map((playlistName) => {
                    const videos = props.playlists[playlistName]
                    return (
                        <section key={playlistName}>
                            <h2>{playlistName}</h2>
                            <div>
                                {
                                    videos
                                        .filter((video) => {
                                            const titleNormalized = video.title.toLowerCase()
                                            const searchValueNormalized = searchValue.toLowerCase()

                                            return titleNormalized.includes(searchValueNormalized)
                                        })
                                        .map((video) => {
                                            return (
                                                <a key={video.url} href={`https://www.youtube.com/watch?v=${video.url}`}>
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
            <Bookmarks bookmarks={config.bookmarks} />
        </StyledTimeline>
    )
}