import React, { Component } from 'react';
import { Card } from 'bootstrap-4-react';

import Work from './Work';

const journal = {
  title: 'Journal',
  url: 'https://github.com/richardzcode/Journal-AWS-Amplify-Tutorial',
  description: 'Step by step tutorial to build a personal journal web app with ReactJS + AWS'
}

const fluid_react = {
  title: 'fluid-react',
  url: 'https://github.com/richardzcode/fluid-react',
  description: 'CSS-in-JS library for React'
}

const docusaurus = {
  title: 'Docusaurus',
  url: 'https://github.com/facebook/Docusaurus',
  description: 'Easy to maintain open source documentation websites.'
}

const metrics = {
  title: 'metrics',
  url: 'https://github.com/richardzcode/metrics',
  description: 'Capture Java application metrics'
}

const works = [
  journal,
  fluid_react,
  docusaurus,
  metrics
]

export default class WorkList extends Component {
  render() {
    return (
      <Card.Group my="3">
        { works.map(work => (
            <Work work={work} />
        ))}
      </Card.Group>
    )
  }
}
