import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
    demoThumbnailUrl,
    demoVideoTitle,
    demoVideoUrl,
    demoChannelTitle,
    demoChannelUrl,
} from "../utils/constants";

function VideoCard({
    video: {
        id: { videoId },
        snippet,
    },
}) {
    // console.log(videoId , snippet);

    return (
        <Card
            sx={{
                width: { xs: "100%", md: "290px" },
                boxShadow: "none",
                borderRadius: 0,
                backgroundColor: "#000",
            }}
        >
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    alt={snippet?.title}
                    sx={{ borderRadius: "15px", height: 160 }}
                />
            </Link>
            <CardContent sx={{ backgroundColor: "#000", height: "106px" }}>
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        color="#fff"
                    >
                        {snippet?.title.slice(0, 60) ||
                            demoVideoTitle.slice(0, 60)}
                    </Typography>
                </Link>

                <Link
                    to={
                        snippet?.channelId
                            ? `/channel/${snippet?.channelId}`
                            : demoChannelUrl
                    }
                >
                    <Typography
                        variant="subtitle2"
                        fontWeight="bold"
                        color="gray"
                    >
                        {snippet?.channelTitle || demoChannelTitle}
                        <CheckCircle
                            sx={{ fontSize: 12, color: "gray", ml: "5px" }}
                        />
                    </Typography>
                </Link>
            </CardContent>
        </Card>
    );
}

export default VideoCard;
