import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import './style/style.css';

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
    this.onSearchChange('surfboard');
  }

  onSearchChange(term) {
    YTSearch({ key: API_KEY, term }, ( videos ) => {
      this.setState({
        videos,
        selectedVideo: videos[0]
       })
    })
  }

  render() {

    const { videos, selectedVideo } = this.state;
    const videoSearch = _.debounce(( term ) => this.onSearchChange(term), 500);

    return (
      <div className="container">
        <SearchBar
          onSearchChange={ videoSearch }/>
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
