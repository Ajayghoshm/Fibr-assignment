import React, { useState } from 'react'


const Popup = ({ show, setShow,addComponent }) => {


    const [type, setType] = useState()
    const [value, setValue] = useState()


    const onCheckBoxSelection = (type) => {
        setValue()
        setType(type)
    }


    return (
        <>
            {show &&
                <div id="default-modal" tabindex="-1" aria-hidden="true" class=" overflow-y-auto overflow-x-hidden fixed top-1/2 right-1/2 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div class="relative p-4 w-full max-w-2xl max-h-full">

                        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">

                            <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                    Select the component to be added
                                </h3>
                                <button onClick={() => setShow(false)} type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                    </svg>
                                    <span class="sr-only">Close modal</span>
                                </button>
                            </div>

                            <div class="p-4 md:p-5 space-x-10">
                                <div className='flex justify-between'>
                                    <div class="flex items-center">
                                        <input onClick={() => onCheckBoxSelection('header')} checked={type == 'header'} type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Header</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input onClick={() => onCheckBoxSelection('footer')} checked={type == 'footer'} type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Footer</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input onClick={() => onCheckBoxSelection('textblock')} checked={type == 'textblock'} type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Text block</label>
                                    </div>
                                    <div class="flex items-center">
                                        <input onClick={() => onCheckBoxSelection('image')} checked={type == 'image'} type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Image</label>
                                    </div>
                                </div>
                                <div>
                                    {(type === 'header' || type === 'footer') &&
                                        <>
                                            <input value={value} onChange={(e)=>setValue(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 w-96"></input>
                                        </>}
                                    {(type === 'textblock') &&
                                        <>
                                            <textarea value={value} onChange={(e)=>setValue(e.target.value)}  className=" w-96 block p-2.5  text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " />
                                        </>}
                                    {(type === 'image') &&
                                        <>
                                            <input type='file' value={value} onChange={(e)=>setValue(e.target.value)}  className="block w-96 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" />
                                        </>}
                                </div>
                            </div>

                            <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button onClick={() => addComponent(type, value)} data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                                <button onClick={() => setShow(false)} data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>)
}

export default Popup