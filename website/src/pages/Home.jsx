import React, { Component } from 'react';

import {
  Gallery,
  ProjectList,
  WorkList
} from '../components';

export default class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Gallery />
        <ProjectList />
        <WorkList />
      </React.Fragment>
    )
  }
}
