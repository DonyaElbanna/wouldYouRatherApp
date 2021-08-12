import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question'
import Unansweredq from './Unansweredq';
import {Tabs, Tab} from "react-bootstrap";


function mapStateToProps({authedUser, questions}) {
    return {
      
      unansQs: Object.keys(questions)
        .filter(
          (q) =>
            !questions[q].optionOne.votes.includes(authedUser) &&
            !questions[q].optionTwo.votes.includes(authedUser)
        )
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
      ansQs: Object.keys(questions)
        .filter(
          (q) =>
            questions[q].optionOne.votes.includes(authedUser) ||
            questions[q].optionTwo.votes.includes(authedUser)
        )
        .sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    };
}

class Home extends Component {
    render() {
      const { unansQs, ansQs } = this.props
      
      console.log('unanswered: ', unansQs)
      console.log('answered: ', ansQs)

      
        return (
          <Tabs fill
            defaultActiveKey="unanswered"
            style={{ marginTop: "5px", fontSize: "20px" }}
          >
            <Tab eventKey="unanswered" title="Unanswered Polls">
              {unansQs.map((id) => (
                <div key={id}>
                  <Unansweredq id={id} />
                </div>
              ))}
            </Tab>
            <Tab eventKey="answered" title="Answered Polls">
              {ansQs.map((id) => (
                <div key={id}>
                  <Question id={id} />
                </div>
              ))}
            </Tab>
          </Tabs>
        );
    }
}

export default connect(
    mapStateToProps,
)(Home);