'use client' 
import ListingTable from '@/components/ListingTable'
import React, { useState } from 'react'


const Dashboard=()=>{

    const [routeListing,setRouteListing]=useState([{
        name:'1',
        status:'Live',
        editable:true,
      },
      {
        name:'2',
        status:'Ready',
        editable:true,
      },
      {
        name:'3',
        status:'Not Ready',
        editable:true,
      },
    ])

    return(<div>
       <div className="flex h-[90vh]">
      {/* <aside className="min-w-48">
      <Sidebar/>
      </aside> */}
      <main>
      <ListingTable routeListing={routeListing}/>
      </main>
      </div>
    </div>)
}

export default Dashboard