import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question'

function mapStateToProps({questions}) {
    return {
        questionIds: Object.keys(questions)
         .sort((a,b) => questions[b].timestamp - questions[b].timestamp)
    };
}

class Home extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.questionIds.map((id) => (
                        <li key={id}>
                            <Question id={id}/>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Home);