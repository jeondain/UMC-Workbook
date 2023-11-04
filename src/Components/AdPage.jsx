import React, { Component } from 'react';
import Ad from './Ad';

class AdPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAd: true, // Initially show the ad
    };
  }

  handleToggleClick = () => {
    this.setState((prevState) => ({
      showAd: !prevState.showAd, // Toggle the showAd state
    }));
  };

  render() {
    return (
      <div className="ad-page">
        <button onClick={this.handleToggleClick}>
          {this.state.showAd ? 'Hide Ad' : 'Show Ad'}
        </button>
        <Ad showAd={this.state.showAd} />
      </div>
    );
  }
}

export default AdPage;
