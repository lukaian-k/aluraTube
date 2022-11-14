import styled from "styled-components"


export const StyledTimeline = styled.div`
    flex: 1;
    width: 100%;
    padding: 16px;
    overflow: hidden;
    h2 {
        font-size: 16px;
        margin-bottom: 16px;
        text-transform: capitalize;
    }
    img {
        aspect-ratio: 16/9;
        font-weight: 500;
        object-fit: cover;
        width: 100%;
        max-width: 210px;
        height: auto;
    }
    section {
        width: 100%;
        padding: 0;
        overflow: hidden;
        padding: 16px;
        div {
            width: calc(100vw - 16px * 4);
            display: grid;
            grid-gap: 16px;
            grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
            grid-auto-flow: column;
            grid-auto-columns: minmax(200px,1fr);
            overflow-x: scroll;
            scroll-snap-type: x mandatory;
            a {
                scroll-snap-align: start;
                span {
                    padding-top: 8px;
                    display: block;
                    padding-right: 24px;
                    color: ${({ theme }) => theme.textColorBase || "#222222"};
                }
            }
        }
    }
`


const StyledBookmarks = styled.section`
    flex: 1;
    width: 100%;
    padding: 16px;
    margin-top: 50px;
    overflow: hidden;
    text-align: center;
    h2 {
        margin-bottom: 0px;
        font-size: 16px;
        text-transform: capitalize;
    }
    img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        
    }
    section {
        width: calc(100vw - 16px * 4);
        display: grid;
        grid-gap: 16px;
        grid-auto-flow: column;
        grid-template-columns: repeat(auto-fill,minmax(150px,1fr));
        grid-auto-columns: minmax(150px,1fr);
        overflow-x: scroll;
        scroll-snap-type: x mandatory;
        a {
            scroll-snap-align: start;
            span {
                padding-top: 8px;
                display: block;
                color: ${({ theme }) => theme.textColorBase || "#222222"};
            }
        }
    }
`

export default function Bookmarks(props) {
    const listBookmarks = props.bookmarks
    
    return (
        <StyledBookmarks>
            <h2>Canais Favoritos</h2>
            <section>
                {
                    listBookmarks.map((bookmark) => {
                        return (
                            <a key={bookmark.url} href={`https://www.youtube.com/c/${bookmark.url}`}>
                                <img src={bookmark.logo} />
                                <span>
                                    {bookmark.name}
                                </span>
                            </a>
                        )
                    })
                }
            </section>
        </StyledBookmarks>
    )
}