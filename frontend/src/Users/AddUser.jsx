import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AddUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: ""
  });
  const [addedMsg, setAddedMsg] = useState(false);
  const[errorMeg,setErrorMeg]=useState(false);

  let navigate = useNavigate();

  const { name, username, email } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const HandleForm = (e) => {
    e.preventDefault();
    console.log(user);

    if (user.name === '' || user.username === '' || user.email === '') {
      setErrorMeg(true);
    } else {
      fetch("http://localhost:8080/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then(() => {
          console.log("New User added");
          setAddedMsg(true);
          setErrorMeg(false);
    
          setTimeout(() => {
            setAddedMsg(false);
          }, 5000);
    
          EmptyForm();
          setTimeout(() => {
            navigate("/");
          }, 1000);
        });
    }
    
  };

  const EmptyForm = () => {

    setUser({
      name: "",
      username: "",
      email: ""
    });

    if (user.name === '' || user.username === '' || user.email === '') {
      navigate("/");
    }
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
            <form onSubmit={(e) => HandleForm(e)} className='grid gap-5 flex-col justify-center align-center pt-10'>
              <input value={name} onChange={(e) => onInputChange(e)} name="name" className='bg-gray-100 rounded-sm p-2 w-[75vw] md:w-[22rem]' type="text" placeholder='Enter your name' />
              <input value={username} onChange={(e) => onInputChange(e)} name="username" className='bg-gray-100 rounded-sm p-2 md:w-[22rem]' type="text" placeholder='Enter your User Name' />
              <input value={email} onChange={(e) => onInputChange(e)} name="email" className='bg-gray-100 rounded-sm p-2 md:w-[22rem]' type="text" placeholder='Enter your Email' />

              <div className='flex gap-4'>
                <button type="submit" className='bg-slate-800 cursor-pointer text-white w-full p-2 rounded-sm'>Add</button>
                <input type="button" onClick={EmptyForm} value="Cancel" className='bg-red-700 cursor-pointer text-white w-full p-2 rounded-sm' />
              </div>

              <div className={`${addedMsg ? "block" : "hidden"}  text-green-500 text-center border border-green-500 p-0 flex justify-between`}>
                <h4 className='p-2'>Successfully added</h4>
              </div>
              

              <div className={`${errorMeg ? "block" : "hidden"}  text-red-500 text-center border border-red-500 p-0 flex justify-between`}>
                <h4 className='p-2'>Fill properly</h4>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
