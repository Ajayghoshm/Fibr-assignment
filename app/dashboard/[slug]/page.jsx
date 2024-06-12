'use client'

import React, { useEffect, useState } from 'react'

const MainPage = ({ params }) => {

    console.debug("params", params)

    const [currentPageValues, setCurrentPageValues] = useState([])

    useEffect(() => {
        const getUserfromLocalStorage = localStorage?.getItem("pageValues") ? JSON.parse(localStorage.getItem('pageValues')) : [];
        let currentPage = getUserfromLocalStorage?.filter(item => {
            return (item.id == params.slug)
        })
        console.debug("current page", currentPage, getUserfromLocalStorage, params)
        setCurrentPageValues(currentPage[0].values)
    }, [params.id])


    return <div className='flex flex-col items-center space-y-10'>
        {currentPageValues?.map(item => {
            switch (item.type) {
                case 'header':
                    return (
                        <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
                            {item.value}
                        </h1>)
                case 'footer':
                    return (<footer class="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
                        <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">{item.value}
                            </span>
                            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                                <li>
                                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                                </li>
                                <li>
                                    <a href="#" class="hover:underline">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </footer>
                    )
                case 'textblock':
                    return (
                        <p className='mb-3 text-gray-500 dark:text-gray-400'>
                            {item.value}
                        </p>)
                case 'image':
                    return (
                        <image src={item.value} width={10} height={10} />)
                case 'title':
                    return (
                        <div className='mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-400'>
                            {item.value}
                        </div>)
                case 'description':
                    return (
                        <div>
                            {item.value}
                        </div>)
            }
        })}
    </div>
}

export default MainPage