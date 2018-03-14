import React from 'react';
import ChartList from '../components/ChartList';

class ChartsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topTwenty: []
    };

  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('load', () =>{
      if (xhr.status !== 200) return;
      const jsonString = xhr.responseText;
      const songObjects = JSON.parse(jsonString);
      this.setState({topTwenty: songObjects.feed.entry})
    });
    xhr.send();
  }

  render(){
    console.log(this.state.topTwenty);
    return <ChartList topTwentyList={this.state.topTwenty}/>
  }
}

export default ChartsContainer;
