 export default function validate (values){

let errors={};


    if(!values.question){
     errors.question='question required'
    }else {
  
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
    if(!values.technology){
        errors.technology='must select anyone'
    }
    if(!values.difficultyLevel){
        errors.difficultyLevel='must select anyone'
    }
    return errors;
    }
    






