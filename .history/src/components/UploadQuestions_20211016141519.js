import React from "react";
import { useState } from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import { Card } from "react-bootstrap";

function UploadQuestions() {
  const [questionError, setquestionError] = useState(' ')
  const [questions, setquestions] = useState([
    {
      question: "",
      answer: "",
      diffiultyLevel: "",
    },
  ]);

  
const [primaryInfo, setprimaryInfo] = useState({
  candidateName: "",
  department: "",
  clientName: "",
  technology: "",
});

  console.log('---------------------------------------')

  const handleQuestionChange = (i, event) => {
    // debugger
    const arrayQuestionCopy = [...questions];
    arrayQuestionCopy[i].question = event.target.value;
    setquestions(arrayQuestionCopy);
    console.log(questions[i]);
  };

  const handleLevelChange=(i,event)=>{
    const arrayLevelCopy = [...questions];
    arrayLevelCopy[i].diffiultyLevel = event.target.value;
    setquestions(arrayLevelCopy);
    console.log(questions[i]);
  }

  const handleAnswerChange=(i,event)=>{

    const arrayAnswerCopy = [...questions];
    arrayAnswerCopy[i].answer = event.target.value;
    setquestions(arrayAnswerCopy);
    console.log(questions[i]);
  }

  const handleRemoveClick = (index) => {
    const questionsCopy = [...questions];
    questionsCopy.splice(index, 1);
    setquestions(questionsCopy);
  };

  const handleAddClick = () => {
    
    if(questions.question){
      //  console.log('');
      setquestionError(' ')
    const questionsCopy = [...questions];
    questionsCopy.push([{ question: "", answer: "", diffiultyLevel: "" }]);
    setquestions(questionsCopy);
  }else{
   setquestionError('Please write a question in the box')
  }
}
  return (

    
    <div classinput="App">
      <Card>
        <Card.Body>
          <Container>
            <p>Upload Your Questions</p>

            <Row xs={1} sm={2} md={4} lg={4}>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Candidate input"
                  classinput="mb-3"
                  size="md"
                  id=""
                >
                  <Form.Control type="text" placeholder=" " />
                </FloatingLabel>
              </Col>
              <Col>
                <FloatingLabel
                  controlId="floatingSelect"
                  label="Department"
                  classinput="mb-3"
                >
                  <Form.Select aria-label="Floating label select example">
                    <option>select... </option>
                    <option value="1">HR</option>
                    <option value="2">IT</option>
                    <option value="3">ACCOUNTS</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
              <Col>
                {" "}
                <FloatingLabel
                  controlId="floatingInput"
                  label="Client input"
                  classinput="mb-3"
                >
                  <Form.Control type="text" placeholder="" />
                </FloatingLabel>
              </Col>

              <Col>
                <FloatingLabel
                  controlId="floatingSelect"
                  label="Technology"
                  classinput="mb-3"
                >
                  <Form.Select aria-label="Floating label select example">
                    <option> select...</option>
                    <option value="1">React.js</option>
                    <option value="2">vue.js</option>
                    <option value="3">Angular</option>
                    <option value="3">Python</option>
                    <option value="3">Python</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>
          </Container>
          <br />

          {/* //Looping */}
          <div>
            {questions.map((val, i) => {
              return (
                <>
                  <Container >
                    <Row>
                      <Col lg={9}>
                        <FloatingLabel
                          controlId="floatingTextarea"
                          label="Question"
                          classinput="mb-3"
                        >
                          <Form.Control
                            as="textarea"
                            placeholder="x"
                            name="question"
                            value={val.question}
                            onChange={(event) => handleQuestionChange(i, event)}
                          />
                        </FloatingLabel>
                        <small>{!questions.question && questionError}</small>

                      </Col>

                      <Col lg={3}>
                        <FloatingLabel
                          controlId="floatingSelect"
                          label="Difficulty level"
                          classinput="mb-3"
                        >
                          <Form.Select
                            aria-label="Floating label select example"
                            name="difficult"
                            value={val.diffiultyLevel}
                            onChange={(event) => handleLevelChange(i, event)}
                          >
                            <option> select...</option>
                            <option value="1">easy</option>
                            <option value="2">Intermediate</option>
                            <option value="3">Expert</option>
                          </Form.Select>
                        </FloatingLabel>
                      </Col>
                    </Row>
                  </Container>
                  <br />

                  <Container>
                    <Row>
                      <Col lg={9}>
                        <FloatingLabel
                          classinput="mb-3 "
                          controlId="floatingTextarea2"
                          label="Answer"
                        >
                          <Form.Control
                            as="textarea"
                            placeholder=" x"
                            style={{ height: "100px" }}
                            value={val.answer}
                            name="answer"
                            onChange={(event) => handleAnswerChange(i, event)}
                          />
                        </FloatingLabel>
                        <br />
                        <br />
                      </Col>
                      <Col lg={3} key={i + 3}>
                        {questions.length !== i+1 && (
                          <button
                            class="btn"
                            onClick={() => handleRemoveClick(i)}
                          >
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-trash"
                              viewBox="0 0 16 16"
                            >
                              <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                              <path
                                fillRule="evenodd"
                                d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                              />
                            </svg>{" "}
                            Delete
                          </button>
                        )}
                        <br />
                        <br />

                        {/* <Button variant="warning"  style={{ color: 'white' }} ><i class="fas fa-plus-circle"></i> Add New </Button> */}
                       {/* {questions.length - 1 === i && ( */}
                          <button class="btn" onClick={handleAddClick}>
                            <i class="fa fa-plus-circle"></i> Add New
                          </button>
                        )
                      </Col>
                    </Row>
                    {/* <Col lg={3}>
       {questions.length - 1 === i && <button class="btn" onClick={handleAddClick}><i class="fa fa-plus-circle"></i> Add New</button>}
     </Col> */}
                    {/* <div style={{ marginTop: 20 }}>{JSON.stringify(questions)}</div> */}
                  </Container>
                </>
              );
            })}
          </div>
          <br />
          <br />
          <br />
          <br />
          <Container>
            <button class="btn1" style={{ color: "white" }}>
              {" "}
              Submit{" "}
            </button>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default UploadQuestions;
