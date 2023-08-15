import React from "react";
import {Stack, Box} from '@mui/material';
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

function Videos({ videos, direction }) {
    // console.log('The value of videos is' +videos);

    if(!videos?.length) return 'Loading...';

  return (
    <Stack direction={direction || 'row'} flexWrap='wrap' justifyContent='center' gap={2}>
        {videos.map((item,idx) => (
            <Box key={idx}>
                {item.id.videoId && <VideoCard video={item} />}
                {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box>
        ))} 
    </Stack>
  )
}

export default Videos;
