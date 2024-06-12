'use client'

import Description from "@/components/EditComponents/Description"
import Footer from "@/components/EditComponents/Footer"
import Header from "@/components/EditComponents/Header"
import ImageComponent from "@/components/EditComponents/Image"
import TextBlock from "@/components/EditComponents/TextBlock"
import Title from "@/components/EditComponents/Title"
import Popup from "@/components/popup"
import { useParams } from "next/navigation"
import { useState } from "react"


const Edit = () => {

    const { slug } = useParams()

    console.debug("ids", slug)


    const [pageValues, setPageValue] = useState({
        title: 'title',
        description: 'description',
        components: [
            {
                type: 'header',
                value: "new Header"
            },
            {
                type: 'textblock',
                value: "new textblock"
            },
            {
                type: 'image',
                value: "new image"
            },
            {
                type: 'footer',
                value: "new footer"
            },
        ]
    })

    const setFormValue = (object) => {
        setPageValue(state => ({ ...state, ...object }))
    }

    const onSubmit = () => {
        localStorage.setItem(slug, JSON.stringify(pageValues))
    }

    const addComponent = () => {
        console.debug("newPush")
        setPageValue(state => {
            const newState = JSON.parse(JSON.stringify(state))
            newState.components.push({
                type: 'footer',
                value: "new footer"
            })
            return (newState)
        })
    }

    return (
        <div className="flex flex-col items-center justify-center w-full">
            {/* <Popup show={true}/> */}
            <Title title={pageValues.title} />
            <Description description={pageValues.description} />
          
            {pageValues.components.map(item => {
                switch (item?.type) {
                    case 'header': {
                        return <Header pageValue={item?.value} />
                    }
                    case 'footer': {
                        return <Footer pageValue={item?.value} />
                    }
                    case 'textblock': {
                        return <TextBlock pageValue={item?.value} />
                    }
                    case 'image': {
                        return <ImageComponent pageValue={item?.value} />
                    }
                }
            })}
  <button onClick={() => addComponent()}>Add Component</button>
            <button onClick={() => onSubmit()}>Submit</button>
        </div>)
}

export default Edit