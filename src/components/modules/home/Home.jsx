import React from 'react';
import {connect} from 'react-redux';

import {Categories} from 'api';

import axios from 'axios';

class Home extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    }

    if (typeof this.props.categories != "undefined") {
      this.state.test = this.props.categories[0].short_description;
    }
  }

  componentDidMount() {
    // This is call only at client
    console.log(this.props.categories);
  }

  render() {
    const img = require(`assets/images/cactus-flower.jpg`);

    return (
      <div className="home-container">
        <div className="container-fluid">
          <div className="row">
            <img src={img}/>
          </div>
          This is Homepage
        </div>
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    //categories: state.categories.data.data
  }
}

export default connect(mapStateToProps)(Home);
