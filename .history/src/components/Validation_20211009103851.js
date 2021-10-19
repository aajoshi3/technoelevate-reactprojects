 export default function validate (values){

let errors={};


    if(!values.question){
     errors.question='question required'
    }
    if(!values.answer){
        errors.answer='Answer required'
    }
    if(!values.candidateName){
        errors.candidateName='must choose anyone'
    }
    return errors;
    }
    






