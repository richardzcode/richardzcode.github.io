import React, { Component } from 'react';
import { BDiv } from 'bootstrap-4-react';

import Project from './Project';

const dochameleon = {
  title: 'Dochameleon',
  description: 'A Progressive Static Website Generator, built for Open Source documentation.',
  screenshot: '/img/dochameleon-site.png',
  url: 'https://dochameleon.io/'
}

const b4r = {
  title: 'bootstrap-4-react',
  description: [
    'Bootstrap 4 + React',
    '',
    'Simpliest way to build frontend with Bootstrap 4 and React.'
  ].join('\n'),
  screenshot: '/img/bootstrap-4-react-site.png',
  url: 'https://bootstrap-4-react.com/'
}

const projects = [
  dochameleon,
  b4r
]

export default class ProjectList extends Component {
  render() {
    return (
      <React.Fragment>
      { projects.map(project => (
        <BDiv mt="3" p="3">
          <Project project={project} />
        </BDiv>
      ))}
      </React.Fragment>
    )
  }
}
