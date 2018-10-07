import React, { Component } from 'react';
import { Row, Col, BH4, Lead, BA, BImg } from 'bootstrap-4-react';
import Remarkable from 'remarkable';

const md = new Remarkable('full', { html: true });

const Description = props => {
  const html = md.render(props.children);
  return (
    <Lead>
      <div style={{ fontSize: '0.8em' }} dangerouslySetInnerHTML={{ __html: html }}>
      </div>
    </Lead>
  )
}

export default class Project extends Component {
  render() {
    const { project } = this.props;

    return (
      <Row>
        <Col col="12 md-5">
          <BH4>{project.title}</BH4>
          <Description>{project.description}</Description>
          { project.url && (
            <p>
              <BA text="dark" href={project.url}>{project.url}</BA>
            </p>
          )}
        </Col>
        <Col col="12 md-7" text="center">
          <BImg src={project.screenshot} mw="100" />
        </Col>
      </Row>
    )
  }
}
