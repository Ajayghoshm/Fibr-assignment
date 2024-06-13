'use client'
import ListingTable from '@/components/ListingTable'
import withProtectedRoute from '@/components/withProtectedRoute'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const Dashboard = () => {


    const logout = async () => {
        localStorage.setItem('auth', false)
        route.push('/login')
    };


    const route = useRouter()
    const [routeListing, setRouteListing] = useState([])

    const onNewCreate = () => {
        route.push(`/dashboard/${ Math.round((Math.floor(Math.random() * 1000) + 10) / 10) * 10}/edit`)
    }


    useEffect(() => {
        const getUserfromLocalStorage = window?.localStorage?.getItem('pageValues') ? JSON.parse(localStorage.getItem('pageValues')) : null;
        if (getUserfromLocalStorage && getUserfromLocalStorage.length != 0) {
            setRouteListing(getUserfromLocalStorage)
        }
        else {
            setRouteListing([])
        }

    }, [])

    const deleteItem = (id) => {
        setRouteListing(state => {
            let newState = JSON.parse(JSON.stringify(state))
            newState = newState.filter(item => item?.id != id)
            return newState
        })
        let getUserfromLocalStorage = window?.localStorage?.getItem('pageValues') ? JSON.parse(localStorage.getItem('pageValues')) : null;
        getUserfromLocalStorage = getUserfromLocalStorage?.filter(item => item?.id != id)
        window?.localStorage?.setItem('pageValues',JSON.stringify(getUserfromLocalStorage))
    }

    const addClickinTable=(id)=>{
        console.debug("item",id)
        setRouteListing(state => {
            let newState = JSON.parse(JSON.stringify(state))
            
            let foundIndex = newState.findIndex(item => item?.id == id)
            console.debug("item",newState,id,foundIndex)
            newState[foundIndex].clicks=newState[foundIndex]?.clicks+1
            return newState
        })
        let getUserfromLocalStorage = window?.localStorage?.getItem('pageValues') ? JSON.parse(localStorage.getItem('pageValues')) : null;
        let foundIndex = getUserfromLocalStorage?.findIndex(item => item?.id == id)
        getUserfromLocalStorage[foundIndex].clicks=getUserfromLocalStorage[foundIndex]?.clicks?getUserfromLocalStorage[foundIndex]?.clicks+1:1
        window?.localStorage?.setItem('pageValues',JSON.stringify(getUserfromLocalStorage))
    }

    return (<div>
        <header>
            <nav class="bg-white border-gray-200 dark:bg-gray-900">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" class="flex items-center space-x-3 rounded-lg rtl:space-x-reverse">
                        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7a3ec529632909.55fc107b84b8c.png" class="h-8" alt="Flowbite Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Blog Page Creator</span>
                    </a>
                    <button onClick={() => { logout() }} href="https://www.linkedin.com/in/ajayghoshm/" class="flex  text-xs items-center space-x-3 rounded-lg rtl:space-x-reverse">
                        Logout
                    </button>
                </div>
            </nav>
        </header>
        <div className="">
            <main className='h-[90vh] w-[100vw] px-4'>
                {routeListing.length != 0 && <div className='flex justify-end'>
                    <button
                        onClick={() => onNewCreate()}
                        type="button" className="text-white my-4
                     bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                      font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
                     focus:outline-none dark:focus:ring-blue-800" >Create</button>
                </div>
                }

                <ListingTable addClickinTable={addClickinTable} routeListing={routeListing} onNewCreate={onNewCreate} deleteItem={deleteItem} />

            </main>
        </div>
        <footer>
            Developed by Ajayghosh M
        </footer>
    </div>)
}

export default withProtectedRoute(Dashboard)