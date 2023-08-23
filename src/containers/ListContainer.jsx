import { useEffect } from "react";
import { useState } from "react";

function ListContainer() {
    // set the song list an empty list
    const [songList, setSongList] = useState([])

    useEffect(() => {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
            .then((res) => res.json())
            .then((songList) => {
                setSongList(songList.feed.entry)
            })
    }, [])
    // top 20 songs
    const topTwentySongs = songList.map((song) => {
        // return <li>{song.entry}</li>
        return <li>{song.title.label}</li>
    })
    return (
        <>
            <h1>Top 20 Songs</h1>
            <ul type="none">
                {topTwentySongs}
            </ul>
        </>
    )
}

export default ListContainer