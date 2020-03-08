import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date().toLocaleTimeString()
        };
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            this.tick();
        }, 1000);
    }

    componentWillMount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState({
            date: new Date().toLocaleTimeString()
        })
    }

    render() {
        return (
            <div>
                <h1>hello, {this.state.date}</h1>
            </div>
        );
    }
}
