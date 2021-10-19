    export default function validate (){

let errors={};


    if(!validate.question.trim()){
     errors.question='question required'
    }
    return errors;

}






