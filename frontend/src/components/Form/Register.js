import React, { useState } from 'react'
import axios from 'axios';  

export default function Register() {
    const [name,setname]= useState("");
    const [email,setemail]= useState("");
    const [password,setpassword]= useState("");
    const[mobile,setmobile]=useState('')
    const[role]=useState(1)
    const handleSubmit = (event)=>{
        event.preventDefault();

        const data = {name,email,password,mobile,role}
        axios.post('http://localhost:4000/api/register',data,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer <your-token>',
              },
        })
        .then(function (response) {
          // handle success
          console.log(response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
      }  
  return (

    <>
   <section class="bg-gray-50">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
      <div class="w-full rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 bg-white">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Create and account
              </h1>
              <form class="space-y-4 md:space-y-6 capitalize" action="#">
                  <div>
                      <label for="name" class="block mb-2  text-sm font-medium text-gray-900 ">Your name</label>
                      <input type="text" name="name" onChange={(e)=>setname(e.target.value)} id="name" class="bg-gray-50 outline-none border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name" required=""/>
                  </div>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                      <input type="email" name="email" onChange={(e)=>setemail(e.target.value)} id="email" class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input type="password" name="password" onChange={(e)=>setpassword(e.target.value)} id="password" placeholder="••••••••" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                  </div>
                  <div>
                      <label for="mobile-no" class="block mb-2 text-sm font-medium text-gray-900">mobile no</label>
                      <input type="text" name="mobile-no" id="mobile-no" onChange={(e)=>setmobile(e.target.value)} placeholder="your mobile no." class="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 " required=""/>
                  </div>
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border outline-none border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  " required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 ">I accept the <a class="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-500 duration-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center" onClick={handleSubmit}>Create an account</button>
                  <p class="text-sm font-light text-gray-500">
                      Already have an account? <a href="#" class="font-medium text-primary-600 hover:underline ">Login here</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </>
    )
}
