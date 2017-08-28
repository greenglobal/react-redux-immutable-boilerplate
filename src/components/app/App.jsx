import React from 'react';
import {RenderRoutes} from 'base/routes';
class App extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div>
        <RenderRoutes routes={this.props.route.routes}/>
      </div>
    );
  }
}

App.contextTypes = {
  router: React.PropTypes.object
};

export default App;
