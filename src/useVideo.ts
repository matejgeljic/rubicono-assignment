import { useState } from "react";
import axios from 'axios';

const useVideo = (currentTab: string, itemId: string) => {
    const [videos, setVideos] = useState([]);

    const getVideo = async () => {
        try {
            const videoResults = await axios.get(`https://api.themoviedb.org/3/${currentTab}/${itemId}/videos?api_key=5e045baab1a179f86b216829c62d441a`);
            const videoArray = await videoResults
            const video = await videoArray.data.results[0].key
            setVideos(video);
        } catch (error) {
            setVideos([])
        }
    }
    getVideo()
    return videos;
}

export default useVideo