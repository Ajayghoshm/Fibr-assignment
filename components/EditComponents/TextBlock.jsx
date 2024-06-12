import { useEffect, useState } from "react"


const TextBlock=({pageValue })=>{

        const [value, setValue] = useState(pageValue)
    
        const onChangeValue = (e) => {
            e.preventDefault()
            setValue(e.target.value)
        }
    
        // useEffect( () => {
        //     setFormValue({ 'textblock': value })
        // },[value])
    
            return (
            <div>
                <textarea placeholder="textblock" value={value} onChange={(e) => onChangeValue(e)} />
                {/* {errorObject?.textblock && 'Please enter a proper value for textblock'} */}
            </div>)
}

export default TextBlock