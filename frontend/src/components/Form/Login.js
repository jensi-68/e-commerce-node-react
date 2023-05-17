import axios from 'axios';
import React, { useState } from 'react'


export default function Login() {

  const [password,setpassword]= useState("");
  const [email,setemail]= useState("");

  const handleSubmit = async (event)=>{
      event.preventDefault();
      const data = {password,email}
      if(password || email ==='')
      { 
        alert('enter the data')
      }
      console.log(data);
      // axios.post('http://localhost:4000/api/login',data,{
      //     headers: {
      //         'Content-Type': 'application/json',
      //         'Authorization': 'Bearer <your-token>',
      //       },
      // })
      // .then(function (response) {
      //   // handle success
      //   console.log(response.data);
      // })
      // .catch(function (error) {
      //   // handle error
      //   console.log(error);
      // }
      // )

      try {
        const response = await axios.post('http://localhost:4000/api/login',data,
      {headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer <your-token>',
              }},)
        const token = response.data.token
        // console.log(token);
        localStorage.setItem('token', token);
      
      
       window.location='/'
      } catch (error) {
        console.error('login failed:',error)
        
      }

     
    }  
  return (
    <>
    <section class="bg-gray-50 capitalize">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
    
      <div class="w-full rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 bg-white">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  login
              </h1>
              <form class="space-y-4 md:space-y-6 capitalize" action="#">
                  
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                      <input type="email" name="email" id="email" onChange={(e)=>setemail(e.target.value)} class="bg-gray-50 border outline-none border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com" required=""/>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                      <input type="password" name="password" id="password" onChange={(e)=>setpassword(e.target.value)}  placeholder="••••••••" class="outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" required=""/>
                  </div>
                
                  <div class="flex items-start">
                      <div class="flex items-center h-5">
                        <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border outline-none border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300  " required=""/>
                      </div>
                      <div class="ml-3 text-sm">
                        <label for="terms" class="font-light text-gray-500 ">I accept the <a class="font-medium text-primary-600 hover:underline" href="#">Terms and Conditions</a></label>
                      </div>
                  </div>
                  <button type="submit" class="w-full text-white bg-blue-600 hover:bg-blue-500 duration-100 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center capitalize" onClick={handleSubmit}>login here</button>
                  <p class="text-sm font-light text-gray-500">
                      don't have an account? <a href="#" class="font-medium text-primary-600 hover:underline ">create an account</a>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
    </>
  )
}
