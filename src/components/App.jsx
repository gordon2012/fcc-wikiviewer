import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>Wikipedia Viewer</h1>
        </header>
        <div className="content">
          <div className="wikiviewer">
            <button onClick={e => { window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank'); }}>Random</button>
            <input type="text" />
            <button onClick={this.props.fetchArticle}>Search</button>

            { this.props.results && this.props.results.map( (e, i) =>
                <article key={i}><p><strong>{e.title}: </strong>{e.text}</p></article>
            )}

            {process.env.NODE_ENV === 'development' && <div>
              <hr /><pre><code>{JSON.stringify(this.props, null, 2)}</code></pre>
            </div>}

          </div>
        </div>
        <footer>Copyright 2016 Gordon Doskas</footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export const AppContainer = connect(
  mapStateToProps,
  actionCreators
)(App);
