import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <header>
          <h1>Boilerplate: React Redux</h1>
        </header>
        <div className="content">
          <div className="secret-sauce">
            <h2>A Starting Point</h2>
            <p>This app serves as a starting point for applications powered by React and Redux. It also includes Sass, gh-pages deployment, and a cors-anywhere dev proxy server.</p>

            <button onClick={this.props.decrement}><h1>-</h1></button>
            <span><h1>{this.props.count}</h1></span>
            <button onClick={this.props.increment}><h1>+</h1></button>

          </div>
        </div>
        <footer>Copyright 2016 Gordon Doskas</footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export const AppContainer = connect(
  mapStateToProps,
  actionCreators
)(App);
