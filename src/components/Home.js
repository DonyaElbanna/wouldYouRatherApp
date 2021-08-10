import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question'
import Nav from "react-bootstrap/Nav";

function mapStateToProps({authedUser, questions, users}) {
    return {
        authedUser, 
        questions, 
        users,
        questionIds: Object.keys(questions)
         .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    };
}


class Home extends Component {


    render() {
      const {authedUser, questionIds, questions, users } = this.props

      console.log('AUTHED USAAAH: ', authedUser)
      console.log('questionsIdddddddds: ', questionIds)
      console.log('questionsssssssssss: ', questions)


      const answered = !authedUser
      ? []
      : questionIds.filter(
            key =>
              questions[key].optionOne.votes.includes(authedUser) ||
              questions[key].optionTwo.votes.includes(authedUser)
          )
          .map(ques => questions[ques])
          //.sort((a, b) => b.timestamp - a.timestamp);
    const unanswered = !authedUser
      ? []
      : questionIds.filter(
            key =>
              !questions[key].optionOne.votes.includes(authedUser) &&
              !questions[key].optionTwo.votes.includes(authedUser)
          )
          .map(ques => questions[ques])
          //.sort((a, b) => b.timestamp - a.timestamp);

          console.log('answered: ', answered)
          console.log('unanswered: ', unanswered)
    
      
        return (
          <div>
            <Nav
              justify
              variant="tabs"
              defaultActiveKey="#Unansqs"
              style={{ marginTop: "10px", fontSize: "20px" }}
            >
              <Nav.Item>
                <Nav.Link href="#Unansqs">Unanswered Polls</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#Ansqs">Answered Polls</Nav.Link>
              </Nav.Item>
            </Nav>
            {this.props.questionIds.map((id) => (
              <div key={id}>
                <Question id={id} />
              </div>
            ))}
          </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Home);