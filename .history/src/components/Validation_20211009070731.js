    export default function validate (values){

let errors={};


    if(!validate.question.trim()){
     errors.question='question required'
    }
    return errors;

}






