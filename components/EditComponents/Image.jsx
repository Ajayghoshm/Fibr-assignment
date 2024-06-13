import Image from "next/image"
import { useEffect, useState } from "react"


const ImageComponent = ({item,setFormValue}) => {

    const [value, setValue] = useState(item.value)

    const onChangeValue = (e) => {
        e.preventDefault()
        setValue(URL.createObjectURL(e.target.files[0]))
    }


    useEffect(() => {
        const getData = setTimeout(() => {
            setFormValue(item.id,value)
        }, 500)
        return () => clearTimeout(getData)
      }, [value])
        



    return (
        <div className="flex flex-col items-center">
             <label className="block mb-2 text-md font-medium text-gray-900 dark:text-white p-2">Image Component</label>
            <input className="block w-96 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                placeholder="image"
                onPointerDown={event => event.stopPropagation()}
                onChange={(e) => onChangeValue(e)}
                onBlur={()=>setFormValue(item.id,value)}
                type="file" />
             {value &&
            <Image src={value} alt='asd' width={100} height={100}  className="w-40 h-40" />
             }
                
            
        </div>)

}

export default ImageComponent