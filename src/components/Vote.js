import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddAnswer } from '../actions/questions'
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import { formatQuestion } from "../utils/helpers";

function mapStateToProps ({ authedUser, questions, users}, {match}) {
    const id = match.params.question_id;  
    const question = questions[id]
    return {
       authedUser,
       question: formatQuestion(question, users[question.author], authedUser),
    }
}



class Vote extends Component {
  
  vote = (e) => {
    e.preventDefault();

    const { dispatch, authedUser, question } = this.props

    dispatch(handleAddAnswer({
      authedUser,
      qid: question.id,
      answer: question.answer
    }))
    };

  render() {
    const { authedUser,  question} = this.props;
    const {
        id,
        name,
        //timestamp,
        avatar,
        optionOne,
        optionTwo,
      //   votesOne,
      //   votesTwo,
      } = question;

      console.log('Vote  data: ', question)
    
    return (
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <Card
          style={{ width: "40rem", height: "20rem" }}
          border="primary"
          className="m-auto"
        >
          <Card.Body>
            <Container>
              <Row className="align-items-center justify-content-md-center">
                <Col md="auto">
                  <img
                    src={avatar}
                    alt={`Avatar of ${name}`}
                    width="90"
                    height="90"
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                  />
                  <Card.Subtitle className="mb-2 text-muted">
                    {name} is asking:
                  </Card.Subtitle>
                </Col>
                <Col md={{ span: 6, offset: 2 }}>
                  <Card.Title style={{ marginTop: "5px" }} className="mb-2">
                    Would your rather
                  </Card.Title>
                  <Form style={{ marginTop: "40px" }}>
                      <Form.Check type='radio' id='optionOne' 
                                  label={optionOne} value='optionOne'
                                  name='vote' style={{ marginTop: "40px" }}/>
                      <Form.Check type='radio' id='optionTwo' 
                                  label={optionTwo} value='optionTwo'
                                  name='vote' style={{ marginTop: "30px" }}/>
                       <Button style={{ marginTop: "60px" }}>
                           Vote
                        </Button>
                  </Form>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Vote);