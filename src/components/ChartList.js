import React from 'react';
import Song from '../components/Song';

class ChartList extends React.Component {
  render() {
    //if (!this.props.topTwentyList) return null;
    const chartNodes = this.props.topTwentyList.map((track, index) => {
      return (
      <Song key={index} position={index+1}
        artist={track['im:artist'].label}
        song={track['im:name'].label}
      />
    )
    })

    return <div className='music-list'>{chartNodes}</div>
  }
}

export default ChartList;
