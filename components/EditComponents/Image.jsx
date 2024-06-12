import { useEffect, useState } from "react"


const ImageComponent = (pageValue) => {

    const [value, setValue] = useState()

    const onChangeValue = (e) => {
        e.preventDefault()
        setValue(e.target.value)
    }

    // useEffect(()=>{
    //     setFormValue({ 'image': value })
    // },[])



        return (
            <div>
                <input placeholder="image" value={value} onChange={(e) => onChangeValue(e)}  type="file"/>

            </div>)

}

export default ImageComponent