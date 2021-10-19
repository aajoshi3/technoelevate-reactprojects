const validateQuestion=(index)=>{
    let eachQuestion=questions[index].question;
    if(eachQuestion){
        return true
    }else{
        setquestionError('Please enter the question')
    }
    return false;
}