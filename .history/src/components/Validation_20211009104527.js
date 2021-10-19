 export default function validate (values){

let errors={};


    if(!values.question){
     errors.question='question required'
    }
    if(!values.answer){
        errors.answer='Answer required'
    }
    if(!values.candidateName){
        errors.candidateName='Candidates name cannot be empty'
    }
    if(!values.department){
        errors.department='must select anyone'
    }
    return errors;
    }
    






