import { useEffect, useState } from "react"


const Description=({item,setFormValue })=>{

        const [value, setValue] = useState(item.value)
    
        const onChangeValue = (e) => {
            e.preventDefault()
            setValue(e.target.value)
        }

        useEffect(() => {
            const getData = setTimeout(() => {
                setFormValue(item.id,value)
            }, 2000)
            return () => clearTimeout(getData)
          }, [value])
            
            return (
            <div>
                <textarea 
                className=" w-96 block p-2.5  text-sm text-gray-900
                 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 
                 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="Description"
                  onPointerDown={event => event.stopPropagation()}
                   value={value} 
                   onChange={(e) => onChangeValue(e)} />
            </div>)
}

export default Description