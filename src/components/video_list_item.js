import React from 'react';

const VideoListItems = ({ videoList, onVideoSelect }) => {
  const imgUrl = videoList.snippet.thumbnails.default.url;
  const title = videoList.snippet.title;

  return(
    <li onClick={() => onVideoSelect(videoList) } className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={ imgUrl } />
        </div>
        <div className="media-body">
          <div className="media-heading">{title}</div>
        </div>
      </div>
    </li>
  )
}

export { VideoListItems };
