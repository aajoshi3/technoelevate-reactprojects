    export default function validate (values){

let errors={};


    if(!values.question){
     errors.question='question required'
    }else{
        errors.question=null
    }
    return errors;

}






