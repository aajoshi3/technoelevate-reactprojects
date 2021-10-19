import { useState } from "react";

const useForm=validate=>{
    const [values, setvalues] = useState([
        {
            question:'',
            answer:'',
            difficultyLevel:'',
            candidateName:'',
            department:'',
            clientName:'',
            technology:''
        
        }
        ]);
        const [errors, seterrors] = useState({})

        const handleChange=e=>{
            const {name,value}=e.target
            setvalues({
                ...values,
                [name]:value
            })
        }
        const handleSubmit=e=>{
            // e.preventDefault();
            seterrors(validate(values))
        }
        return {handleChange,values,handleSubmit,errors}
}
export default useForm