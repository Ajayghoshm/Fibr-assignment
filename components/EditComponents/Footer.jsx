import { useEffect, useState } from "react"



const Footer = ({ item,setFormValue }) => {

    const [value, setValue] = useState(item.value)

    const onChangeValue = (e) => {
        e.preventDefault()
        console.debug("e",e)
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
            <input 
            className="w-96 bg-gray-50 border border-gray-300
             text-gray-900 text-sm rounded-lg focus:ring-blue-500
              focus:border-blue-500 block p-2.5 dark:bg-gray-700
               dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                placeholder="Footer" value={value}
                onPointerDown={event => event.stopPropagation()}
                 onChange={(e) => onChangeValue(e)} />
            {/* {errorObject?.footer && 'Please enter a proper value for footer'} */}
        </div>)

}

export default Footer