import React, { Component } from 'react';

export default class Article extends Component {
    render() {
        const {title, text} = this.props.data;

        return <article>
            <p>
                <strong>{title}: </strong>{text}
            </p>
        </article>
    }
}
