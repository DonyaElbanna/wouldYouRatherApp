import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps({ authedUser, questions }) {
    const unansweredQuestions = Object.keys(questions)
      .filter(
        id =>
          !questions[id].optionOne.votes.includes(authedUser) &&
          !questions[id].optionTwo.votes.includes(authedUser)
      )
      .sort((x, y) => questions[y].timestamp - questions[x].timestamp);
    const answeredQuestions = Object.keys(questions)
      .filter(
        id =>
          questions[id].optionOne.votes.includes(authedUser) ||
          questions[id].optionTwo.votes.includes(authedUser)
      )
      .sort((x, y) => questions[y].timestamp - questions[x].timestamp);
    return {
      authedUser,
      unansweredQuestions,
      answeredQuestions
    };
  }

class AnsQs extends Component {
    render() {

        const { authedUser, unansweredQuestions, answeredQuestions } = this.props

        console.log('AUTHEDUSER:  ', authedUser)
        console.log('unansweredQuestions:  ', unansweredQuestions)
        console.log('answeredQuestions:  ', answeredQuestions)



        return (
            <div>
                <ul>
                {unansweredQuestions.map((id) => (
                        <li key={id}>{unansweredQuestions.id}</li>
                    ))}
                </ul>
                
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(AnsQs);