    export default function validate (values){

let errors={};


    if(!values.question.trim()){
     errors.question='question required'
    }
    return errors;

}






