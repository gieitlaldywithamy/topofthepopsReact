import React from 'react';

class Song extends React.Component {
  render(){
    return (
      <div>
        <li>{this.props.position} is {this.props.artist} with {this.props.song}</li>

      </div>
    )
  }
}

export default Song;
