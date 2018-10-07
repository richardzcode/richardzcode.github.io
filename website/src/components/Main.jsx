import React, { Component } from 'react';

import { Home } from '../pages';

export default class Main extends Component {
  render() {
    return (
      <div as="main" role="main">
        <Home />
      </div>
    )
  }
}
