import { useState } from "react"

export const useForm = (formValue ={}) => {

    const [formState, setFormState] = useState(formValue)



    const handleChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })

    }

    const handleCleanForm =()=>{
        setFormState(formValue)
    }

    return {
        ...formState,
        formState,
        handleChange,
        handleCleanForm
    }
}