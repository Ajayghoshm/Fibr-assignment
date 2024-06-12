import { useEffect, useState } from "react"


const Header=({pageValue})=>{

        const [value, setValue] = useState(pageValue)
    
        const onChangeValue = (e) => {
            e.preventDefault()
            setValue(e.target.value)
        }
    
        // useEffect(()=>{
        //     setFormValue({ 'header': value })
        // },[value])
            
        
    

            return (
            <div>
                <input placeholder="header" value={value} onChange={(e) => onChangeValue(e)}  />
            </div>)
        
    
        
    
}

export default Header