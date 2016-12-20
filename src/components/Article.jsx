import React, { Component } from 'react';

export default class Article extends Component {
    render() {
        const {title, text, url} = this.props.data;

        return <article onClick={ e => { window.open(url, '_blank'); }}>
            <p>
                <strong>{title}: </strong>{text}
            </p>
        </article>
    }
}
