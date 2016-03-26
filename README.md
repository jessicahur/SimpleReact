# SimpleReact
(From **Pro React** by *Cassio de Sousa Antonio*)
## Notes for webpack.config.js
0. While the book lists:

    module: {
      loaders: [{
        test: /\.jsx?$/,
        loader: 'babel'
      }]
    }

Webpack can only runs my file if I change .jsx to .js in my webpack.config.js

Alternatively, changing App.js to App.jsx will run fine with the setting listed above, in opposed to naming it as App.js as the book seems to suggests.

1. The book lists:
`React.render(<Hello />, document.getElementById('root'));`
React.render is _**deprecated**_. What I did was install `react-dom` from npm, then call `import {render} from 'react-dom';` and then replace `React.render` by `render`:

    import React from 'react';
    import { render } from 'react-dom';
    class Hello extends React.Component {
      render() {
        return (
          <\h1>Hello World<\/h1>
        );
      }
    }
    render(<Hello />, document.getElementById('root'));

2. React does not deal with undefined type like Angular
