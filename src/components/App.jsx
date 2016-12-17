import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export default class App extends Component {

  handleSearch(e) {
    e.preventDefault();

    const search = this.searchinput.value.trim();
    if(search) this.props.initiateSearch(search);

    this.searchinput.value = "";
  }

  handleKeyDown(e) {
    if(e.keyCode === 13) {
      this.handleSearch(e);
    }
  }

  render() {
    const {loading, search, results} = this.props;

    const resultsNode = results && results.length > 0 ?
      results.map( (e, i) => <article key={i}><p><strong>{e.title}: </strong>{e.text}</p></article>)
    :
      <p>No results</p>

    const searchNode = loading ? <p>Loading...</p> : search ?
      resultsNode
    :
      null;

    return <div className="app">
      <header>
        <h1>Wikipedia Viewer</h1>
      </header>
      <div className="content">
        <div className="wikiviewer">
          <button onClick={e => { window.open('https://en.wikipedia.org/wiki/Special:Random', '_blank'); }}>Random</button>
          <input type="text" onKeyDown={e => {this.handleKeyDown(e);}} ref={(c) => this.searchinput = c} />
          <button onClick={this.handleSearch.bind(this)}>Search</button>
          {searchNode}

          {process.env.NODE_ENV === 'development' && <div>
            <hr /><pre><code>{JSON.stringify(this.props, null, 2)}</code></pre>
          </div>}

        </div>
      </div>
      <footer>Copyright 2016 Gordon Doskas</footer>
    </div>;
  }
}

function mapStateToProps(state) {
  return state;
}

export const AppContainer = connect(
  mapStateToProps,
  actionCreators
)(App);
