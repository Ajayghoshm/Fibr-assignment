import { useEffect, useState } from "react"


export const Cards = ({ item, setFormValue }) => {

    const [value, setValue] = useState()


    console.debug("cards", value)

    const onChangeValue = (type,index, e) => {
        e.preventDefault()
        if(type=='heading'){
            setValue(state=>{
                let newState=JSON.parse(JSON.stringify(state))
                newState[index]={[e.target.value]:Object.values(newState[index])[0]}
                return newState
            })
        }
        else{
            console.debug("item",value[index])
            setValue(state=>{
                let newState=JSON.parse(JSON.stringify(state))
                newState[index]={[Object.keys(newState[index])[0]]:e.target.value}
                return newState
            })
        }

    }
    useEffect(()=>{
        setValue(item.value)
    },[])
    

    useEffect(() => {
        const getData = setTimeout(() => {
            setFormValue(item.id, value)
        }, 500)
        return () => clearTimeout(getData)
    }, [value])


    return (
        <div className="flex flex-col items-center">
            <label class="block mb-2 text-md font-medium text-gray-900 dark:text-white p-2">Card Component</label>
            {value?.map((item, index) => {
                return (
                    <div key={index} className="flex justify-between space-x-2 py-2">

                        <input className="w-44 bg-gray-50 border border-gray-300
             text-gray-900 text-sm rounded-lg focus:ring-blue-500
              focus:border-blue-500 block p-2.5 dark:bg-gray-700
               dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Value" value={Object.keys(item)[0]}
                        
                            onChange={(e) => onChangeValue('heading',index, e)}
                            onPointerDown={event => event.stopPropagation()} />
                        <input className="w-44 bg-gray-50 border border-gray-300
             text-gray-900 text-sm rounded-lg focus:ring-blue-500
              focus:border-blue-500 block p-2.5 dark:bg-gray-700
               dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Value" value={Object.values(item)[0]}
      
                            onChange={(e) => onChangeValue('value', index, e)}
                            onPointerDown={event => event.stopPropagation()} />
                    </div>)
            })}

        </div>
    )
}