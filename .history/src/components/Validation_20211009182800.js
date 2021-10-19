// import { useState } from "react";

 export default function validate (values){

let errors={};


  debugger;
    if(!values.question){
     errors.question='question required'
    }else if (!/^[A-Za-z]+/.test(values.username.trim())) {
        errors.question = 'Enter a valid username';
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
    






