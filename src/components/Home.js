import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question'
import HomeNav from './HomeNav'

function mapStateToProps({questions}) {
    return {
        questionIds: Object.keys(questions)
         .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    };
}

class Home extends Component {
    render() {
        return (
          <div>
            <HomeNav />
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