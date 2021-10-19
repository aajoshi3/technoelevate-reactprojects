const validateQuestion=(index)=>{
    let eachQuestion=questions[index].question;
    if(eachQuestion){
        return true
    }else{
        setquestionError('Please enter the question')
    }
    return false;
}

const validateDifficultyLevel=(index)=>{
    let eachLevel=questions[index].difficultyLevel;
    console.log('each level',eachLevel);
    if(eachLevel){
        return true;
    }else{
        setdiffLevelError('Please enter the diff Level')
    }
    return false
}


const addRow=(index)=>{
    let questionValid=validateQuestion(index)
    let difflevelValid=validateDifficultyLevel(index);
    console.log(questionValid+''+difflevelValid);
    if(questionValid && difflevelValid){
        let questionscopy=[...questions]
        questionscopy.push({
            question:'',
            answer:'',
            difficultyLevel:''
        })
        setQuestions(questionscopy);
        console.log(questionscopy);
    }
}