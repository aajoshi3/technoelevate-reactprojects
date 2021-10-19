import { AddCircleRounded } from "@material-ui/icons";
import {
  Autocomplete,
  Button,
  Container,
  Grid,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
// import PopUp from "../kavithas/Modals";
// import "./Upload.css";
// import DeleteModal from "../kavithas/DeleteModal"


function UploadQuestion(props) {
  const [UploadData, setUploadData] = useState({
    CandidateName: "",
    Department: "",
    ClientName: "",
    Technology: "",
    Questions: "",
  });

  const [questions, setQuestions] = useState([
    {
      Question: "",
      Answer: "",
      DifficultyLevel: "",
    },
  ]);

  const [validation, setvalidation] = useState({
    CandidateName: "",
    Department: "",
    ClientName: "",
    Technology: "",
    Questions: "",
  });

  const [modalshow, setModalshow] = useState(false);

  const [questionAnswerValidate, setquestionAnswerValidate] = useState([
    {
      Question: "",
      Answer: "",
      DifficultyLevel: "",
    },
  ]);

  useEffect(() => {
    const validationCopy = { ...validation };

    for (const key in UploadData) {
      let keys = key;

      if (UploadData[keys] === "") {
        // console.log(`validation-${key}- ${validation[key]}`);

        validationCopy[key] = "is required";

        console.log(`${key}`, validationCopy[key]);

        console.log("validationCopy", validationCopy);

        setvalidation(validationCopy);
        // setvalidation({
        //   ...validation,
        //   key:"** is requird"
        // })
      } else {
        validationCopy[key] = "";

        console.log(`${key}`, validationCopy[key]);

        console.log("validationCopy", validationCopy);

        setvalidation(validationCopy);
      }
    }
  }, [UploadData]);

  const validateQuestionAndAnswerField = () => {
    questions.forEach((obj, index) => {
      for (const key in obj) {
        if (obj[key] === "") {
          const questionAdcnswerValidateCopy = [...questionAnswerValidate];

          questionAdcnswerValidateCopy[index][key] = "** is required";

          setquestionAnswerValidate(questionAdcnswerValidateCopy);
        } else {
          const questionAdcnswerValidateCopy = [...questionAnswerValidate];

          questionAdcnswerValidateCopy[index][key] = "";

          setquestionAnswerValidate(questionAdcnswerValidateCopy);
        }
      }
    });
  };

  const onSubmitFunc = () => {
    validateQuestionAndAnswerField();

    const validationCopy = { ...validation };

    for (const key in UploadData) {
      let keys = key;

      if (UploadData[keys] === "") {
        // console.log(`validation-${key}- ${validation[key]}`);

        validationCopy[key] = "is required";

        console.log(`${key}`, validationCopy[key]);

        console.log("validationCopy", validationCopy);

        setvalidation(validationCopy);
        // setvalidation({
        //   ...validation,
        //   key:"** is requird"
        // })
      } else {
        validationCopy[key] = "";

        console.log(`${key}`, validationCopy[key]);

        console.log("validationCopy", validationCopy);

        setvalidation(validationCopy);
      }
    }

    // checking if there is an empty feild if

    // debugger

    // if there is any empty field then dont update

    const UploadDataCopy = { ...UploadData };

    let errorCount = 0;

    questionAnswerValidate.forEach((object) => {
      for (const key in object) {
        if (object[key] !== "") {
          errorCount++;
        }
      }
    });

    console.log("errorCount", errorCount);

    if (errorCount < 1) {
      UploadDataCopy.Questions = questions;

      console.log("onSubmit", UploadDataCopy);

      setUploadData(UploadDataCopy);
    }

    let mainDataErrCount = 0;

    for (const key in validation) {
      if (validation[key] !== "") {
        mainDataErrCount++;
      }
    }

    if (errorCount > 0 || mainDataErrCount > 1) {
      // here make a copy of upload data

      // pass that data to server

      alert("eneter user info");

      console.log("log", errorCount, mainDataErrCount, UploadDataCopy);
    } else {
      // alert("submitted successfully");
      setModalshow(true);
    }
  };

  const addrow = (event, index) => {
    validateQuestionAndAnswerField();

    if((questions[index].Question !== "") && (questions[index].Answer !== "") && (questions[index].DifficultyLevel !== "") ){

    // For storing data question answer difficulty level
    const questionsCopy = [...questions];
    questionsCopy.push({
      Question: "",
      Answer: "",
      DifficultyLevel: "",
    });
    console.log("new row created");
    setQuestions(questionsCopy);

    // for storing error message validation
    const questionAnswerCopy = [...questionAnswerValidate];
    questionAnswerCopy.push({
      Question: "",
      Answer: "",
      DifficultyLevel: "",
    });

    console.log("new row created");
    setquestionAnswerValidate(questionAnswerCopy);

    console.log("question and answer validation", questionAnswerCopy);
  }
  };

  const deleterow = (index) => {
    let userval = <DeleteModal />

    if (userval) {
      const questionsCopy = [...questions];
      questionsCopy.splice(index, 1);

      setQuestions(questionsCopy);
    }
  };
  //Destructuring
  // const {CandidateName,Department,ClientName,InterviewLevel,Technology}=UploadData
  //Data to be shown in dropdown
  const DepartmentOptions = ["HR", "IT"];
  const InterviewLevelOptions = ["Easy", "Intermediate", "Expert"];
  const TechnologyOptions = ["React JS", "Angular", "Vue JS", "Java"];
  //Data is entered into the UserData

  const handleChangeQuestions = (event, index) => {
    console.log("in handle change");

    const questionsCopy = [...questions];

    const obj = questionsCopy[index];

    obj[event.target.name] = event.target.value;

    questionsCopy.splice(index, 1, obj);

    console.log("obj updted at index ", index, "\n object is ", obj);

    console.log("questionCopy", questionsCopy);
    setQuestions([...questionsCopy]);

    validateQuestionAndAnswerField();
  };

  const handleChange = (event) => {
    debugger;

    console.log("event.target.name", event.target.name);

    const uploadDataCopy = { ...UploadData };

    uploadDataCopy[event.target.name] = event.target.value
      ? event.target.value
      : event.target.innerText;
    console.log("upload dataCopy", uploadDataCopy);
    setUploadData(uploadDataCopy);

    // checking if the input is empty or not
  };

  return (
    <Container style={{ paddingLeft: 0, paddingRight: 0 }}>
      <p id="uploadquestions">Upload your Questions</p>

      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="CandidateName"
            name="CandidateName"
            // value={UploadData.CandidateName}
            onChange={(event) => {
              handleChange(event);
            }}
          />
          <p>{validation.CandidateName}</p>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Autocomplete
            fullWidth
            id="combo-box-demo"
            options={DepartmentOptions}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Department"
                name="Department"
                onSelect={(event) => {
                  handleChange(event);
                }}
              />
            )}
          />
          <p>{validation.Department}</p>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <TextField
            fullWidth
            id="outlined-basic"
            label="ClientName"
            name="ClientName"
            // name={UploadData.ClientName}
            // value={UploadData.ClientName}
            onChange={(event) => {
              handleChange(event);
            }}
          />
          <p>{validation.ClientName}</p>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Autocomplete
            fullWidth
            id="combo-box-demo"
            options={TechnologyOptions}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Technology"
                name="Technology"
                onSelect={(event) => {
                  handleChange(event);
                }}
              />
            )}
          />
          <p>{validation.Technology}</p>
        </Grid>
      </Grid>

      <br></br>

      {/* Question and Answer Section */}
      {questions.map((obj, index) => {
        return (
          <div key={index}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={9}>
                <TextField
                  id="outlined-basic"
                  style={{ width: "100%" }}
                  label="Question"
                  name="Question"
                  onChange={(event) => {
                    handleChangeQuestions(event, index);
                  }}
                />
                <p>{questionAnswerValidate[index].Question}</p>
              </Grid>

              <Grid item xs={12} sm={6} md={3}>
                <Autocomplete
                  id="combo-box-demo"
                  options={InterviewLevelOptions}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="DifficultyLevel"
                      name="DifficultyLevel"
                      onSelect={(event) => {
                        handleChangeQuestions(event, index);
                      }}
                    />
                  )}
                />
                <p>{questionAnswerValidate[index].DifficultyLevel}</p>
              </Grid>
              <Grid item xs={12} sm={6} md={9}>
                <TextField
                  id="outlined-multiline-static"
                  fullWidth
                  label="Answer"
                  name="Answer"
                  multiline
                  rows={4}
                  onChange={(event) => {
                    handleChangeQuestions(event, index);
                  }}
                />
                <p>{questionAnswerValidate[index].Answer}</p>
              </Grid>
              <Grid item xs={12} sm={6} md={3}>
                <Box
                  mt={2}
                  ml={5}
                  display
                  style={{
                    marginTop: "90px",
                    marginLeft: "24px",
                  }}
                >
                  {index === questions.length - 1 ? (
                    <>
                    <Button
                      onClick={(e) => {
                        addrow(e, index);
                      }}
                      style={{ backgroundColor: "#FAA81D" }}
                      variant="contained"
                      startIcon={<AddCircleRounded />}
                    >
                      Add New
                    </Button>  
                    <Button
                      onClick={() => {
                        deleterow(index);
                      }}
                      style={{
                        backgroundColor: "#FAA81D",
                      }}
                      variant="contained"
                      startIcon={<AddCircleRounded />}
                    >
                      delete
                    </Button>
                    </>
                  ) : (
                    <Button
                      onClick={() => {
                        deleterow(index);
                      }}
                      style={{
                        backgroundColor: "#FAA81D",
                      }}
                      variant="contained"
                      startIcon={<AddCircleRounded />}
                    >
                      delete
                    </Button>
                  )}
                </Box>
              </Grid>
            </Grid>
            <br></br>
          </div>
        );
      })}

      <Box
        style={{
          float: "right",
        }}
        className="boxSubmit"
      >
        <Button
          style={{ backgroundColor: "#FAA81D" }}
          variant="contained"
          onClick={() => {
            onSubmitFunc();
          }}
        >
          Submit
        </Button>
      </Box>

      <div>{modalshow && <PopUp />}</div>

      {/* { console.log('candidateName',UploadData.CandidateName)} */}
    </Container>
  );
}

export default UploadQuestion;
