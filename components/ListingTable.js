import Link from "next/link";
import React from "react";

const ListingTable = ({ routeListing }) => {

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name of the route</th>
                        <th>Status</th>
                        <th>View</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {routeListing.map(item => {
                        return (<tr key={item.name}>
                            <td>
                                {item.name}
                            </td>
                            <td>
                                {item.status}
                                </td>

                            <td>
                                <Link href={`/dashboard/${item.name}`}>
                                   View
                                </Link>
                                </td>
                            {item?.editable &&
                             <td className="cursor-pointer">
                                <Link href={`/dashboard/${item.name}/edit`}>Edit
                                </Link>
                            </td>
                            }
                            <td className="cursor-pointer">Delete</td>
                        </tr>)
                    })}

                </tbody>
            </table>
        </div>
    )

}

export default ListingTable