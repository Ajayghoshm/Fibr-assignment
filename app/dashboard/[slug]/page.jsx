'use client'

import React from 'react'


const MainPage=({params})=>{

    console.debug("params",params)

    const getUserfromLocalStorage = window?.localStorage?.getItem(params.slug) ? JSON.parse(localStorage.getItem(params.slug)) : null;

    return <div>
        Publish Page
        {getUserfromLocalStorage?.header}
        {getUserfromLocalStorage?.textblock}
        {getUserfromLocalStorage?.image}
        {getUserfromLocalStorage?.footer}
    </div>
}

export default MainPage