import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import VisibilityIcon from "@mui/icons-material/Visibility";

import Videos from "./Videos";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function VideoDetail() {
    const [videoDetail, setVideoDetail] = useState(null);
    const [videos, setVideo] = useState([]);

    const { id } = useParams();
    console.log("id is " + id);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
            setVideoDetail(data.items[0])
        );

        fetchFromAPI(`search?part=snippet&relatedToVideo=${id}`).then((data) =>
            setVideo(data.items)
        );
        // console.log('The value of videos is' +videos);
    }, [id]);

    if (!videoDetail?.snippet) return "Loading...";

    // Below is an example of "object destructuring" - here different parameters from "videoDetail" are destructured.
    const {
        snippet: { title, channelId, channelTitle },
        statistics: { viewCount, likeCount },
    } = videoDetail;

    return (
        <Box minHeight="95vh">
            <Stack direction={{ xs: "column", md: "row" }}>
                <Box flex={1}>
                    <Box
                        sx={{ width: "100%", position: "sticky", top: "75px" }}
                    >
                        <ReactPlayer
                            url={`https://www.youtube.com/watch?v=${id}`}
                            className="react-player"
                            controls
                        />
                        <Typography
                            color="#fff"
                            variant="h6"
                            fontWeight="bold"
                            p={2}
                        >
                            {title}
                        </Typography>
                        <Stack
                            direction="row"
                            justifyContent="space-between"
                            sx={{ color: "#fff" }}
                            py={{ xs: 1, md: 0 }}
                            px={2}
                            mt={{ md: "-10px" }}
                        >
                            <Link to={`/channel/${channelId}`}>
                                <Typography
                                    variant={{ sm: "subtitle1", md: "h6" }}
                                    color="#fff"
                                >
                                    {channelTitle}
                                    <CheckCircle
                                        sx={{
                                            fontSize: "13px",
                                            color: "gray",
                                            ml: "5px",
                                        }}
                                    />
                                </Typography>
                            </Link>
                            <Stack
                                direction="row"
                                gap="20px"
                                alignItems="center"
                            >
                                <Typography
                                    variant="body1"
                                    sx={{ opacity: 0.7 }}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {parseInt(viewCount).toLocaleString()}{" "}
                                    <VisibilityIcon sx={{ height: "20px" }} />
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ opacity: 0.7 }}
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                    {parseInt(likeCount).toLocaleString()}{" "}
                                    <ThumbUpOffAltIcon
                                        sx={{ height: "20px" }}
                                    />
                                </Typography>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>

                <Box
                    px={2}
                    py={{ md: 1, xs: 5 }}
                    justifyContent="center"
                    alignItems="center"
                >
                    <Videos videos={videos} direction="column" />
                </Box>
            </Stack>
        </Box>
    );
}

export default VideoDetail;
