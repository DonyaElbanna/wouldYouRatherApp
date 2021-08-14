import React, { Component } from 'react';

class Error extends Component {
    render() {
        return (
            <div style={{ backgroundColor: '#f7faf8' }}>
                <img src="/error.png" alt='pageNotFound' style={{ width: '70%', height: '90vh', display: 'flex', margin: 'auto'}}/>
            </div>
        );
    }
}

export default Error;