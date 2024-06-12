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
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { useSortable } from "@dnd-kit/sortable/dist"
import { CSS } from '@dnd-kit/utilities';


const DragablComponents = ({ item, id, setFormValue }) => {

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    switch (item?.type) {
        case 'title': {
            return <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
                <div className="flex flex-col items-center p-2 bg-gray-50 rounded-lg my-2 hover:bg-gray-100  ">
                    <Title item={item} setFormValue={setFormValue} />
                    <ArrowIcon /></div>
            </div>
        }
        case 'description': {
            return <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
                <div className="flex flex-col items-center p-2  border-gray-100 border bg-gray-50 rounded-lg my-2 hover:bg-gray-100">
                    <Description item={item} setFormValue={setFormValue} />
                    <ArrowIcon /></div></div>

        }
        case 'header': {
            return <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
                <div className="flex flex-col items-center p-2   border-gray-100 border bg-gray-50 rounded-lg my-2 hover:bg-gray-100">
                    <Header item={item} setFormValue={setFormValue} />
                    <ArrowIcon /></div></div>

        }
        case 'footer': {
            return <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
                <div className="flex flex-col items-center p-2  border-gray-100 border bg-gray-50 rounded-lg my-2 hover:bg-gray-100">
                    <Footer item={item} setFormValue={setFormValue} /><ArrowIcon /></div></div>

        }
        case 'textblock': {
            return <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
                <div className="flex flex-col items-center p-2  border-gray-100 border bg-gray-50 rounded-lg my-2 hover:bg-gray-100">
                    <TextBlock item={item} setFormValue={setFormValue} /><ArrowIcon /></div></div>

        }
        case 'image': {
            return <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
                <div className="flex flex-col items-center p-2  border-gray-100 border bg-gray-50 rounded-lg my-2 hover:bg-gray-100">
                    <ImageComponent item={item} setFormValue={setFormValue} /><ArrowIcon /></div></div>

        }
    }
}


const ArrowIcon = () => {
    return (
        <>
            <div className="border border-black h-10  w-0.5" />
            <svg class="w-3 h-3 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
            </svg>
        </>)
}


const Edit = () => {

    const { slug } = useParams()

    console.debug("ids", slug)

    const [newComponentPopup, setNewComponentPopup] = useState(false)

    const sensors = useSensors(
        useSensor(PointerSensor),
        // useSensor(KeyboardSensor, {
        //     coordinateGetter: sortableKeyboardCoordinates,
        // })
    );


    const [pageValues, setPageValue] = useState([
        {
            id: Math.random(),
            type: 'header',
            value: "Noteworthy technology acquisitions"
        },
        {
            id: Math.random(),
            type: 'title',
            value: "Year 2024"
        },
        {
            id: Math.random(),
            type: 'description',
            value: " After a sluggish 2023, mergers and acquisitions activity has so far exhibited a cautious but optimistic upturn in the first quarter of 2024."
        },

        {
            id: Math.random(),
            type: 'textblock',
            value: "SAP : WalkMe : $1.5 billion"
        },
        {
            id: Math.random(),
            type: 'image',
            value: null
        },
        {
            id: Math.random(),
            type: 'footer',
            value: "Acquisitions List"
        },
    ])

    const setFormValue = (id, value) => {
        setPageValue(state => {
            const newState = JSON.parse(JSON.stringify(state))
            const index = newState.findIndex((item => item.id == id));
            newState[index].value = value
            return newState
        }
        )
    }

    const onSubmit = () => {
        const existingValue=window?.localStorage?.getItem('pageValues') ? JSON.parse(localStorage.getItem('pageValues')) : [];
        existingValue.push({id:slug,values:pageValues})

        localStorage.setItem('pageValues', JSON.stringify(existingValue))
    }

    const addComponent = (type, value) => {
        console.debug("newPush", type, value)
        setPageValue(state => {
            const newState = JSON.parse(JSON.stringify(state))
            newState.push({
                id: Math.random(),
                type: type,
                value: value
            })
            return (newState)
        })
        setNewComponentPopup(false)
    }

    const openPopup = () => {
        setNewComponentPopup(true)
    }

    function handleDragEnd(event) {
        const { active, over } = event;
        console.debug("active", active, over)
        if (active.id !== over.id) {
            setPageValue((items) => {
                const oldIndex = items.findIndex((item => item.id == active.id));
                const newIndex = items.findIndex((item => item.id == over.id));

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    }


    return (
        <>
            <Popup show={newComponentPopup} setShow={setNewComponentPopup} addComponent={addComponent} />
            <div className="flex flex-col items-center justify-center w-full">
                <DndContext
                    sensors={sensors}
                    collisionDetection={closestCenter}
                    onDragEnd={handleDragEnd}
                >
                    <SortableContext
                        items={pageValues}
                        strategy={verticalListSortingStrategy}
                    >
                        {pageValues.map(item => {
                            return <DragablComponents item={item} id={item.id} setFormValue={setFormValue} />
                        })}
                    </SortableContext>
                </DndContext>
                <button  className="w-96 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={() => openPopup()}>Add Component</button>
                <button className="w-96 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => onSubmit()}>Submit</button>
            </div >
        </>)
}

export default Edit