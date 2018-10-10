import React, { Component } from 'react';
import { Card } from 'bootstrap-4-react';

import Work from './Work';

const journal = {
  title: 'Journal',
  url: 'https://github.com/richardzcode/Journal-AWS-Amplify-Tutorial',
  description: 'Step by step tutorial to build a personal journal web app with ReactJS + AWS'
}

const ionic_starters = {
  title: 'Ionic Starters',
  url: 'https://github.com/ionic-team/starters',
  description: 'Starter templates for Ionic apps, used by the Ionic CLI'
}

const amplify_vue_starter = {
  title: 'Vue Starter',
  url: 'https://github.com/aws-samples/aws-amplify-vue',
  description: 'A VueJs starter app integrated with aws-amplify.'
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
  ionic_starters,
  amplify_vue_starter,
  fluid_react,
  docusaurus,
  metrics
]

export default class WorkList extends Component {
  render() {
    return (
      <Card.Group my="3">
        { works.map((work, index) => (
            <Work key={index} work={work} />
        ))}
      </Card.Group>
    )
  }
}
