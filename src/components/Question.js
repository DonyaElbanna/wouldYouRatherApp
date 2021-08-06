import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion, formatDate } from '../utils/helpers'

function mapStateToProps({authedUser, users, questions}, { id }) {
    const question = questions[id]
    return {
        authedUser,
        question: formatQuestion(question, users[question.author], authedUser)
    };
}

class Question extends Component {

    vote = (e, id) => {
        e.preventDefault()
        //adjust voting
    }

    render() {
        console.log(this.props)
        const {question} = this.props

        const {//id,
            name,
            timestamp,
            avatar,
            optionOne,
            optionTwo,
            votesOne,
            votesTwo} = question
        return (
            <div>
                <img src={avatar}
                alt={`Avatar of ${name}`}
                width="50" height="50"/>
                <div>{name} asks: </div>
                <div>{formatDate(timestamp)}</div>
                <p>Would your rather</p>
                    <button onClick={(e) => this.vote(e)}>{optionOne}</button>
                    <progress value={votesOne} max="5">  </progress>
                    <span>{votesOne}</span>
                    <br/>
                    <button onClick={(e) => this.vote(e)}>{optionTwo}</button>
                    <progress value={votesTwo} max="5">  </progress>
                    <span>{votesTwo}</span>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Question);