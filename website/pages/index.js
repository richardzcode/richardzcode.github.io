const React = require('react');

const Doc = require('../components/docs/Doc.js');

class Index extends React.Component {
  render() {
    const { site } = this.props;
    const { theme } = site;

    const doc = site.docs.find('me');
    return (
      <div>
        <Doc site={site} title={doc.title}>
          {doc.content}
        </Doc>
      </div>
    );
  }
}

module.exports = Index;
