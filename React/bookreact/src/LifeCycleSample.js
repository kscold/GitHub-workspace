import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    }

    myRef = null;

    constructor(props) {
        super(props);
        console.log('constructor');
    } //생성자

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log('getDerivedStateFromProps');
        if (nextProps.color! == prevState.color) {
            return { color: nextProps.color }
        }
    } //초기

    componentDidMount() {
        console.log('componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    render() {
        return (
            <div>

            </div>
        );
    }
}

export default LifeCycleSample;