import React from 'react';
import { VideoListItems } from './video_list_item';

const VideoList = ( { videos, onVideoSelect } ) => {

  const List = videos.map(( dataVideos, index ) => {
    return(
      <VideoListItems
        onVideoSelect={ onVideoSelect }
        videoList={ dataVideos }
        key={ dataVideos.etag }/>
    )
  })

  return(
    <ul className="col-md-4 list-group">
      { List }
    </ul>
  )
}

export { VideoList };
