import { useEffect, useState } from "react"



const Footer = ({ pageValue }) => {

    const [value, setValue] = useState(pageValue)

    const onChangeValue = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    // useEffect(()=>{
    //     setFormValue({ 'footer': value })
    // },[value])
        
        return (
        <div>
            <input placeholder="Footer" value={value} onChange={(e) => onChangeValue(e)} />
            {/* {errorObject?.footer && 'Please enter a proper value for footer'} */}
        </div>)

}

export default Footer