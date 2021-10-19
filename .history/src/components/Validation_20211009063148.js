    export default function validate (){

let errors={};
const validateInfo=[
    {
        question:'',
        answer:'',
        difficultyLevel:'',
        candidateName:'',
        department:'',
        clientName:'',
        technology:''
    }
    ]

    if(!validate.question.trim ()){
     errors.question='question required'
    }
    return errors;

}






