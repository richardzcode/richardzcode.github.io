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

const amplify = {
  title: 'AWS Amplify',
  description: 'The foundation for your cloud-powered mobile & web apps',
  screenshot: '/img/amplify-site.png',
  url: 'https://aws-amplify.github.io/'
}

const projects = [
  dochameleon,
  b4r,
  amplify
]

export default class ProjectList extends Component {
  render() {
    return (
      <React.Fragment>
      { projects.map((project, index) => (
        <BDiv key={index} mt="3" p="3">
          <Project project={project} />
        </BDiv>
      ))}
      </React.Fragment>
    )
  }
}
