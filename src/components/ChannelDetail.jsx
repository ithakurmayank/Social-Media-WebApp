import React, { useEffect, useState } from "react";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";
import Videos from "./Videos";
import ChannelCard from "./ChannelCard";
import { Box } from "@mui/material";

function ChannelDetail() {
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState([]);

    const { id } = useParams();

    console.log(channelDetail);

    useEffect(() => {
        fetchFromAPI(`channels?part="snippet&id=${id}`).then((data) =>
            setChannelDetail(data?.items[0])
        );
    }, [id]);

    useEffect(() => {
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
            (data) => setVideos(data?.items)
        );
    }, [id]);

    return (
        <Box minHeight="95vh">
            <Box>
                <div
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(0,16,36,1) 0%, rgba(21,12,117,1) 28%, rgba(8,53,133,1) 47%, rgba(60,126,197,1) 73%, rgba(3,15,38,1) 100%)",
                        zIndex: 10,
                        height: "200px",
                        
                    }}
                />
                <ChannelCard channelDetail={channelDetail} marginTop="-120px" />
            </Box>

            <Box display='flex' p={2}>
                    <Box>
                        <Videos videos={videos} />
                    </Box>
            </Box>
        </Box>
    );
}

export default ChannelDetail;
