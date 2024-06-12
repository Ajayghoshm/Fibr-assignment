'use client'
import ListingTable from '@/components/ListingTable'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'


const Dashboard = () => {


    const route = useRouter()
    const [routeListing, setRouteListing] = useState([{
        name: '1',
        status: 'Live',
        editable: true,
    },
    {
        name: '2',
        status: 'Ready',
        editable: true,
    },
    {
        name: '3',
        status: 'Not Ready',
        editable: true,
    },
    ])

    const onNewCreate = () => {
        route.push(`/dashboard/${routeListing.length + 1}/edit`)
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

    return (<div>
        <div className="flex">
            {/* <aside className="min-w-48">
      <Sidebar/>
      </aside> */}
            <main className='h-[90vh] w-[90vw]'>
                {routeListing.length!=0 && <div className='flex justify-end'>
                    <button
                        onClick={() => onNewCreate()}
                        type="button" className="text-white my-4
                     bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                      font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
                     focus:outline-none dark:focus:ring-blue-800">Create</button>
                </div>
}

                <ListingTable routeListing={routeListing} onNewCreate={onNewCreate} />

            </main>
        </div>
    </div>)
}

export default Dashboard