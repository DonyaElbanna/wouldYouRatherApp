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
                    {this.props.questionIds.map((id) => (
                        <div key={id}>
                            <Question id={id}/>
                        </div>
                    ))}
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Home);