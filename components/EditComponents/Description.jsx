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
            }, 500)
            return () => clearTimeout(getData)
          }, [value])
            
            return (
                <div className="flex flex-col items-center">
                 <label class="block mb-2 text-md font-medium text-gray-900 dark:text-white p-2">Description Component</label>
                <textarea rows={10}
                className=" w-96 block p-2.5  text-sm text-gray-900
                 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 
                 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400
                  dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="Description"
                  onPointerDown={event => event.stopPropagation()}
                   value={value} 
                   onBlur={()=>setFormValue(item.id,value)}
                   onChange={(e) => onChangeValue(e)} />
            </div>)
}

export default Description