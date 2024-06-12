import { useEffect, useState } from "react"


export const Cards = ({ item, setFormValue }) => {

    const [value, setValue] = useState(item.value)

    const onChangeValue = (e) => {
        e.preventDefault()
        console.debug("e", e)
        setValue(e.target.value)
    }


    useEffect(() => {
        const getData = setTimeout(() => {
            setFormValue(item.id, value)
        }, 2000)
        return () => clearTimeout(getData)
    }, [value])


    return (
        <div>
            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Card Component</label>
            {Object.entries(value).map((item,index) => {
                return (
                    <div key={index} className="flex justify-between space-x-2 py-2">

                        <input className="w-44 bg-gray-50 border border-gray-300
             text-gray-900 text-sm rounded-lg focus:ring-blue-500
              focus:border-blue-500 block p-2.5 dark:bg-gray-700
               dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Value" value={item[0]}
                            onPointerDown={event => event.stopPropagation()} />
                        <input className="w-44 bg-gray-50 border border-gray-300
             text-gray-900 text-sm rounded-lg focus:ring-blue-500
              focus:border-blue-500 block p-2.5 dark:bg-gray-700
               dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Value" value={item[1]}
                            onPointerDown={event => event.stopPropagation()} />
                    </div>)
            })}

        </div>
    )
}