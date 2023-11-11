import React, { useState } from 'react'

export default function AddUser() {

 

  const [name, setName] = useState('')
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [addedMsg,setAddedMsg]=useState(false);

  const HandleForm = (e) => {
    e.preventDefault();
    const user = { name,username,email};
    console.log(user);
  
    fetch("http://localhost:8080/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, 
      body: JSON.stringify(user),
    })
      .then(() => {
        console.log("New Student added");
        setAddedMsg(true);

        setTimeout(() => {
          setAddedMsg(false);
        }, 5000); 
      
        setName('');
        setUsername('');
        setEmail('');
      });
  };



 
  return (
    
    <>
     <header className="bg-white shadow pt-14">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Add New User</h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
              <form className='grid gap-5 flex-col justify-center align-center pt-10'>
                <input value={name} onChange={(e)=>setName(e.target.value)} className=' bg-gray-100 rounded-sm p-2 w-[75vw] md:w-[22rem] '  type="text" name="" id="" placeholder='Enter your name' />
                <input value={username} onChange={(e)=>setUsername(e.target.value)} className=' bg-gray-100 rounded-sm p-2 md:w-[22rem] '  type="text" name="" id="" placeholder='Enter your User Name '/>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} className=' bg-gray-100 rounded-sm p-2 md:w-[22rem] '  type="text" name="" id="" placeholder='Enter your Email '/>
                
                <div className='flex gap-4'>
                  <input type="button" onClick={HandleForm} value="Add" className='bg-slate-800 cursor-pointer text-white w-full p-2 rounded-sm' />
                  <input type="button" value="Cancel" className='bg-red-700 cursor-pointer text-white w-full p-2 rounded-sm' />

                </div>
                <div className={`${addedMsg ? "block" : "hidden"} text-green-500 text-center border border-green-500 p-4`}>Successfully added</div>
              </form>
    
            </div>
          </div>
      </div>    

    </>
  )
}
