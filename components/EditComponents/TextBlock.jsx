import { useEffect, useState } from "react"


const TextBlock=({item,setFormValue})=>{

        const [value, setValue] = useState(item.value)
    
        const onChangeValue = (e) => {
            e.preventDefault()
            setValue(e.target.value)
        }

        useEffect(() => {
            const getData = setTimeout(() => {
                setFormValue(item.id,value)
            }, 500)
            return () => clearTimeout(getData)
          }, [value])
            
    
            return (
                <div className="flex flex-col items-center">
                 <label class="block mb-2 text-md font-medium text-gray-900 dark:text-white p-2">TextBlock Component</label>
                <textarea className=" w-96 block p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600
                 dark:placeholder-gray-400 dark:text-white
                  dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                   placeholder="textblock" 
                   value={value} 
                   onPointerDown={event => event.stopPropagation()}
                   onBlur={()=>setFormValue(item.id,value)}
                   onChange={(e) => onChangeValue(e)} />
                {/* {errorObject?.textblock && 'Please enter a proper value for textblock'} */}
            </div>)
}

export default TextBlock