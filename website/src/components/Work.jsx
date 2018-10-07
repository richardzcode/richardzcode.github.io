import React, { Component } from 'react';
import { Card, BA, BPre } from 'bootstrap-4-react';

export default class Work extends Component {
  render() {
    const work = this.props.work || {};

    return (
      <Card border="0" bg="dark" style={{ minWidth: '25%' }}>
        <Card.Body>
          <Card.Title>
            <BA href={work.url} text="light">{work.title}</BA>
          </Card.Title>
          <Card.Text>
            <BPre text="muted" style={{ whiteSpace: 'pre-wrap' }}>
              {work.description}
            </BPre>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}
