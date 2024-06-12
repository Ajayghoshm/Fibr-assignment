import { useEffect, useState } from "react"


const ImageComponent = ({item,setFormValue}) => {

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
            <input className="block w-96 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                placeholder="image"
                onPointerDown={event => event.stopPropagation()}
                onChange={(e) => onChangeValue(e)}
                type="file" />
             
            <image src={value} alt='asd' width={10} height={10}  className="w-40 h-40" />
                

        </div>)

}

export default ImageComponent