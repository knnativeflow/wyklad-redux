import React from 'react';
import ExampleContext from './ExampleContext';
import ExampleRedux from './ExampleRedux';
import ExampleReduxFetch from 'ExampleReduxFetch';
import ExampleReduxThunk from 'ExampleReduxThunk';
import ExampleReduxGeneric from 'ExampleReduxGeneric';

const IndexPage = () => (
  <ol>
    <li><a href="/context">Przykład: React.Context</a></li>
    <li><a href="/redux-1">Przykład: Czysty Redux</a></li>
    <li><a href="/redux-fetch">Przykład: Redux fetchujący dane</a></li>
    <li><a href="/redux-thunk">Przykład: redux-thunk</a></li>
    <li><a href="/redux-generic">Przykład: redux z helperami dla API</a></li>
  </ol>
);

const App = () => {
  const path = window.location.pathname;

  switch(path) {
    case '/context':
      return <ExampleContext />;
    case '/redux-1':
      return <ExampleRedux />;
    case '/redux-fetch':
      return <ExampleReduxFetch />;
    case '/redux-thunk':
      return <ExampleReduxThunk />;
    case '/redux-generic':
      return <ExampleReduxGeneric />;
    default:
      return <IndexPage />;
  }
}

export default App;
