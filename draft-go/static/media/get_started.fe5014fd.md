# Get started

## Install

```
npm install --save draft-go
```

## Usage

```
import React, { Component } from 'react';
import GoEditor, { convertToHTML } from 'draft-go';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.preview = this.preview.bind(this);
    this.state = { previewHtml: '' };
  }

  preview() {
    const { editorState } = this.state;
    const contentState = editorState.getCurrentContent();
    const html = convertToHTML(contentState);
    this.setState({ previewHtml: html });
  }

  render() {
    const { previewHtml } = this.state;

    return (
      <div as="main" role="main">
        <button onClick={this.preview}>Preview</button>
        <GoEditor
          onChange={(editorState) => this.setState({editorState})}
        />
        <div
          style={{ marginTop: '2rem' }}
          dangerouslySetInnerHTML={{ __html: previewHtml }}
        />
      </div>
    )
  }
}
```
