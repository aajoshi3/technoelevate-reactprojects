    export default function validate (values){

let errors={};


    if(values.question.trim()===   ''){
     errors.question='question required'
    }
    if(values.answer===''){
        errors.answer='Answer required'
    }
    return errors;
    }
    






