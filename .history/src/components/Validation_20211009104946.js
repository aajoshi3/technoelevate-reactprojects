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
    if(!values.clientName){
        errors.clientName='Clients input cannot be empty'
    }
    return errors;
    }
    






