import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import YTSearch from 'youtube-api-search';

import { SearchBar } from './components/search_bar';
import { VideoDetail } from './components/video_detail';
import { VideoList } from './components/video_list';

const API_KEY = 'AIzaSyAOpr1dUUOaLWncGhcWuV_5BV32puARkCw';

class App extends Component {
  constructor( props ) {
    super( props );

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({ key: API_KEY, term: 'surfboard' }, ( videos ) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
       })
    })
  }

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="container">
        <SearchBar />
        <div className="row">
          <VideoDetail video={ selectedVideo }/>
          <VideoList
            onVideoSelect={ selectedVideo => this.setState({ selectedVideo })}
            videos={ videos } />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
