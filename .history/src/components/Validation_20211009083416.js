    export default function validate (values){

let errors={};


    if(!values.question){
     errors.question='question required'
    }
    return errors;

}






