import React from 'react';

export default class Response extends React.Component {
  
  render() {
    var response = this.props.response;
    
    return (
      <img src={"images/" + response.RESPONSES_image}></img>
    )
  }
}