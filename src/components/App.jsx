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
          <div className="secret-sauce">
            <button onClick={this.props.fetchArticle}>Random</button>
            <input type="text" />
            <button>Search</button>

            { this.props.results && this.props.results.map( (e, i) =>
                <article key={i}><p><strong>{e.title}: </strong>{e.text}</p></article>
            )}

            <br />
            <button onClick={this.props.decrement}><h1>-</h1></button>
            <span><h1>{this.props.count}</h1></span>
            <button onClick={this.props.increment}><h1>+</h1></button>

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
