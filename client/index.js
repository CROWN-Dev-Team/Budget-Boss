//client/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import htmlContent from 'path/to/file.html';
import { HashRouter } from 'react-router-dom'
import Routes from './routes'

const MyComponent = React.createClass({
  render() {
      return (
          <div dangerouslySetInnerHTML={ {__html: htmlContent} } />
      );
  }
});

ReactDOM.render(
  <HashRouter>
    <Routes />
  </HashRouter>, document.getElementById('root')
);

export default MyComponent;
