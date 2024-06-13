'use client'

import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const MainPage = ({ params }) => {

    console.debug("params", params)
    const route = useRouter()

    const [currentPageValues, setCurrentPageValues] = useState([])
    const [status,setStatus]=useState(false)

    useEffect(() => {
        const getUserfromLocalStorage = localStorage?.getItem("pageValues") ? JSON.parse(localStorage.getItem('pageValues')) : [];
        let currentPage = getUserfromLocalStorage?.filter(item => {
            return (item.id == params.slug)
        })
        console.debug("current page", currentPage, getUserfromLocalStorage, params)
        setCurrentPageValues(currentPage[0]?.values)
        setStatus(currentPage[0]?.status)
    }, [params.id])

    const onPublish = () => {
        setCurrentPageValues(state => {
            let newState = JSON.parse(JSON.stringify(state))
            newState[0].status = !newState[0]?.status
            return newState
        })
        const getUserfromLocalStorage = localStorage?.getItem("pageValues") ? JSON.parse(localStorage.getItem('pageValues')) : [];
        let currentPage = getUserfromLocalStorage?.findIndex(item => {
            return (item.id == params.slug)
        })
        getUserfromLocalStorage[currentPage].status =  !getUserfromLocalStorage[currentPage].status
        localStorage?.setItem("pageValues", JSON.stringify(getUserfromLocalStorage))
        route.push('/dashboard')
    }

    console.debug("currentPageValues",currentPageValues)



    return (
        <div className='flex flex-col items-center space-y-10'>
           {currentPageValues && <div className='flex justify-end w-full p-4'>
                <button onClick={() => onPublish()} 
                className='focus:outline-none text-white
                 bg-green-700 hover:bg-green-800 focus:ring-4
                  focus:ring-green-300 font-medium rounded-lg 
                  text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600
                   dark:hover:bg-green-700 dark:focus:ring-green-800'>{!status?'Publish':"Take Down"}</button>
            </div>}
            {!currentPageValues&&
            <div className='flex w-full h-[90vh] justify-center items-center'>Page don&apos;t Exist</div>}
            {currentPageValues?.map(item => {
                switch (item.type) {
                    case 'header':
                        return (
                            <h1 className='mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white'>
                                {item.value}
                            </h1>)
                    case 'footer':
                        return (<footer class="w-full bg-white rounded-lg shadow m-4 dark:bg-gray-800">
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
                            <>
                                {item.value && <Image src={item.value} width={500} height={100} />}
                            </>
                        )
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
                    case 'cards':
                        return (
                            <div className="flex justify-between space-x-6 after: py-2">
                                {item.value.map((each,index) => {
                                    return (
                                        <div key={index} className='space-y-10 border border-gray-200 p-4 rounded-md'>  <div class="flex flex-col items-center justify-center">
                                            <div className="mb-2 text-3xl font-extrabold">{Object.values(each)[0]}</div>
                                            <div className="text-gray-500 dark:text-gray-400">{Object.keys(each)[0]}</div>
                                        </div>
                                        </div>

                                    )
                                })}
                            </div>
                        )

                }
            })}
        </div>
    )
}

export default MainPage