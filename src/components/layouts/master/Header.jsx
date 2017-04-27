import React from 'react';
import {Link} from 'react-router';

class Header extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <header className="header-container bg-transparent">
        <div className="container-fluid">
          Header Section
        </div>
      </header>
    );
  }
}
export default Header;
