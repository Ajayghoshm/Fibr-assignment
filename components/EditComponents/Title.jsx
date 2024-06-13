import { useEffect, useState } from "react"


const Title = ({ item,setFormValue }) => {

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
             <label class="block mb-2 text-md font-medium text-gray-900 dark:text-white p-2">Title Component</label>
            <input className=" w-96
                bg-gray-50 border border-gray-300
                 text-gray-900 text-sm rounded-lg focus:ring-blue-500
                  focus:border-blue-500 block p-2.5 dark:bg-gray-700
                   dark:border-gray-600 dark:placeholder-gray-400
                 dark:text-white dark:focus:ring-blue-500
                  dark:focus:border-blue-500"
                   placeholder="Title" 
                   onPointerDown={event => event.stopPropagation()}
                   value={value}
                   onBlur={()=>setFormValue(item.id,value)}
                    onChange={(e) => onChangeValue(e)} />
        </div>)




}

export default Title