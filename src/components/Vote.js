import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddAnswer } from '../actions/questions'
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";

function mapStateToProps({ questions, users}) {
    return {
        questions :Object.values(questions) ,
        users: Object.values(users)
    };
  }

class Question extends Component {
  
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
      const { questions, users } = this.props
      console.log('Vote questions data: ', questions)
      console.log('Vote users data: ', users)
    
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
                    src=""
                    alt="avatar"
                    width="90"
                    height="90"
                    style={{ marginTop: "20px", marginBottom: "20px" }}
                  />
                  <Card.Subtitle className="mb-2 text-muted">
                    user is asking:
                  </Card.Subtitle>
                </Col>
                <Col md={{ span: 6, offset: 2 }}>
                  <Card.Title style={{ marginTop: "5px" }} className="mb-2">
                    Would your rather
                  </Card.Title>
                  <Form style={{ marginTop: "40px" }}>
                      <Form.Check type='radio' id='optionOne' 
                                  label='1' value='optionOne'
                                  name='vote' style={{ marginTop: "40px" }}/>
                      <Form.Check type='radio' id='optionTwo' 
                                  label='2' value='optionTwo'
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

export default connect(mapStateToProps)(Question);