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
            <button>Random</button>
            <input type="text" />
            <button>Search</button>

            <article><p><strong>An Article: </strong>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer convallis nulla eu neque ultrices tristique elementum sit amet velit. Aliquam convallis fermentum massa, et consectetur libero consectetur in. Etiam dictum, mi vitae porta imperdiet, lacus augue ultrices ante, at consectetur sem odio at eros. Phasellus nec felis hendrerit, mattis magna in, iaculis justo. Curabitur volutpat, purus ac porta accumsan, nibh felis efficitur ante, eu aliquam magna metus at ipsum. Cras consequat fermentum purus nec ultrices. Fusce non urna suscipit, hendrerit metus vel, sodales nibh. Curabitur imperdiet, lacus a mattis volutpat, turpis libero mollis tellus, et laoreet arcu risus sed dolor. Pellentesque venenatis, sapien ut interdum malesuada, enim ipsum porttitor nisi, eget laoreet purus nunc sit amet ipsum. Cras quis tincidunt lectus, ut ultricies felis. Etiam luctus vestibulum sem in ultrices. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris tincidunt finibus sagittis.
            </p></article>

            <article><p><strong>Yet Another Article: </strong>
            In sit amet nisi risus. Aenean vitae lacus risus. Morbi sagittis purus vitae vehicula congue. Fusce consequat, nisi eu aliquet lacinia, erat nibh accumsan eros, ac sollicitudin ante nibh vel neque. Fusce non magna placerat, molestie dolor et, tincidunt massa. Nullam ultrices leo mi, ut dapibus sapien convallis ut. Aenean eu mauris lacus. Fusce dignissim odio vitae nibh hendrerit commodo. Proin ut elit iaculis nisi semper auctor vitae non sapien. Sed lorem neque, porta nec vestibulum a, congue mattis lectus. Curabitur eleifend fermentum ex ac tempor. Nam maximus, tellus ut luctus molestie, lorem nunc viverra ante, congue tempor nulla lectus ut erat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam ut semper quam. Donec tempus tortor vel pellentesque egestas.
            </p></article>

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
