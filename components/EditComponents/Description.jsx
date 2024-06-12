import { useEffect, useState } from "react"


const Description=({description })=>{

        const [value, setValue] = useState(description)
    
        const onChangeValue = (e) => {
            e.preventDefault()
            setValue(e.target.value)
        }
    
        // useEffect( () => {
        //     setFormValue({ 'Description': value })
        // },[value])
    
            return (
            <div>
                <textarea placeholder="Description" value={value} onChange={(e) => onChangeValue(e)} />
            </div>)
}

export default Description