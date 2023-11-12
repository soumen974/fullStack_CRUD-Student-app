import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Home() {
 
  const [users, setUsers] = useState([])


  useEffect(()=>{
    fetch('http://localhost:8080/usersdetails')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((result) => {
      setUsers(result);
    })
    .catch((error) => {
      console.error('Error fetching data:', error);
    });
  },[])

  return (
    <>
     <header className=" shadow  pt-14">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-semibold text-gray-900">Student Details</h1>
        </div>
      </header>
      <main className='home'>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg ">

                  <div className="flex flex-col">
                    <div className="overflow-x-auto">
                      <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-scroll border rounded-lg">
                          <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                              <tr>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                  ID
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                  Name
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                  UserName
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                                >
                                  Email
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                >
                                  Edit
                                </th>
                                <th
                                  scope="col"
                                  className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                                >
                                  Delete
                                </th>
                              </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                              {
                                users.map((user,index)=>(

                                  <tr>
                                <td key={index} className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap">
                                  {index+1}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{user.name}</td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{user.username}</td>
                                <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">
                                {user.email}
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                  <Link
                                  to={`/usersdetails/${user.id}`}
                                   className="text-green-500 hover:text-green-700" href="#">
                                    Edit
                                  </Link>
                                </td>
                                <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                                  <a className="text-red-500 hover:text-red-700" href="#">
                                    Delete
                                  </a>
                                </td>
                                  </tr>

                                ))
                              }
                              

                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                </div>
                
            </div>
          </div>
        </div>
      </main>
     


    </>
  )
}
