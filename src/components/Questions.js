import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps({ questions}) {
	return {
		questions: Object.keys(questions)
           .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
            // id: questions[id].id,
            // author: questions[id].author,
            // timestamp: questions[id].timestamp,
            // optionOne: questions[id].optionOne,
            // optionTwo: questions[id].optionTwo,

        
    }
}
  
class Questions extends Component {
    render() {
        const {questions} = this.props
        return (
            <div>
                <ul>
                    {questions.map((id) => (
                        <li key={id}>{questions.optionOne}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Questions);