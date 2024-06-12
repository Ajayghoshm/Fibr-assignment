import { useEffect, useState } from "react"


const Title=({title})=>{

        const [value, setValue] = useState(title)
    
        const onChangeValue = (e) => {
            e.preventDefault()
            setValue(e.target.value)
        }
    
        // useEffect(()=>{
        //     setFormValue({ 'Title': value })
        // },[value])
            
        
    

            return (
            <div>
                <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" value={value} onChange={(e) => onChangeValue(e)}  />
            </div>)
        
    
        
    
}

export default Title