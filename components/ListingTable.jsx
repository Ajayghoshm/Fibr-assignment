import Link from "next/link";
import React, { useState } from "react";
import Popup from "./popup";
import DeletePopup from "./deletePopup";

const ListingTable = ({ routeListing, onNewCreate, deleteItem,addClickinTable}) => {

    const [deletePopUp, setDeletePopup] = useState(false)

    const onDelete=()=>{
       deleteItem(deletePopUp)
       setDeletePopup(false)
    }

    const addClick=(id)=>{
        console.debug("clicker")
        addClickinTable(id)
    }


    console.debug("router",routeListing)
    return (
        <>
            <DeletePopup show={deletePopUp} setShow={setDeletePopup} onSubmit={onDelete} header={'Do you want to delete the Page'} />
                
            <div>
                {routeListing?.length !== 0 ?
                    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead className=" text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                            <tr>
                                <th scope="col" className="px-6 py-3">Name of the route</th>
                                <th scope="col" className="px-6 py-3">Status</th>
                                <th scope="col" className="px-6 py-3">View</th>
                                <th scope="col" className="px-6 py-3">Edit</th>
                                <th scope="col" className="px-6 py-3">Delete</th>
                                <th scope="col" className="px-6 py-3">Number of Views</th>
                            </tr>
                        </thead>
                        <tbody>
                            {routeListing.map(item => {
                                return (<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={item.name}>
                                    <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {item.id}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.status?<div className="text-xs text-green-500 bg-green-200 rounded-lg text-center w-28">
                                           Live
                                        </div>:<div className="text-xs text-red-500 bg-red-200 rounded-lg text-center w-28">
                                            Need to publish
                                        </div>}
                                    </td>

                                    <td className="px-6 py-4"  >
                                        <Link href={`/dashboard/${item.id}`} onClick={()=>addClick(item.id)}>
                                            View
                                        </Link>
                                    </td>

                                    <td className="cursor-pointer px-6 py-4" o>
                                        <Link href={`/dashboard/${item.id}/edit`}><span  >
                                        Edit
                                        </span>
                                        </Link>
                                    </td>

                                    <td className="cursor-pointer px-6 py-4" onClick={()=>setDeletePopup(item.id)}>Delete</td>
                               
                                    <td className="px-6 py-4">
                                        
                                            {item?.clicks}
                                        
                                    </td>
                               
                                </tr>)
                            })}

                        </tbody>
                    </table>
                    :
                    <div className="flex text-gray-500 justify-center flex-col h-[90vh] items-center">
                        No existing Dashboard, create a new once using the Create button
                        <button type="button" class="text-white my-4
                     bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300
                      font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700
                     focus:outline-none dark:focus:ring-blue-800" onClick={() => onNewCreate()}>Create a New page</button>
                    </div>
                }
            </div>

        </>
    )

}

export default ListingTable