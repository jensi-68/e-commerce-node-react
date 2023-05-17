import React, { useState } from 'react'
import Layout from '../layout/Layout'
import axios from 'axios';


export default function AddProduct() {
const [title,settitle]=useState('')
const [description,setdescription]=useState('')
const [price,setprice]=useState('')
const [images,setimages]=useState('')
const [category,setcategory]=useState('')
const [stock,setstock]=useState('')

  const handleSubmit = async (event)=>{
    event.preventDefault();

    const data = {title,description,price,images,category,stock}
    console.log(data);
    // if(password || email ==='')
    // { 
    //   alert('enter the data')
    // }
    

    try {
      const response = await axios.post('http://localhost:4000/api/product/new',data,
    {headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer <your-token>',
            }},)
      const token = response.data.token
      // console.log(token);
      localStorage.setItem('token', token);
    console.log(response);
    
   
    } catch (error) {
      console.error('product not added:',error)
      
    }
settitle('')
setdescription('')
setimages('')
setprice('')
setcategory('')
setstock('')
   
  }  
  return (
    <>
      <Layout>
        <div className="container">
          <div className="bg-white capitalize mt-2 rounded-sm py-4 px-4 w-full">
            <span className='text-2xl'>add new product</span>
            <p className='text-slate-300'>enter basic description....</p>
            <div className='mt-7'>
            <form action="" method="">
              <div className='flex gap-4'>
              <input type="text" placeholder='Enter  title' name='product_name' className='focus:outline-1 focus:outline-emerald-300 outline-0 py-2 px-4 border rounded-3xl w-full' onChange={(e)=>settitle(e.target.value)} />
              <input type="text" placeholder='Enter  description' name='product_des' className='focus:outline-1 focus:outline-emerald-300 outline-0 py-2 px-4 border rounded-3xl w-full' onChange={(e)=>setdescription(e.target.value)} />
              {/* <input type="text" placeholder='Enter One Line Description' name='product_description' className='focus:outline-1 focus:outline-emerald-300 outline-0 py-2 px-4 border rounded-3xl w-full'conChange={(e)=>setdescription(e.target.value)} /> */}
              <input type="text" placeholder='Enter price' name='product_price' className='focus:outline-1 focus:outline-emerald-300 outline-0 py-2 px-4 border rounded-3xl w-full' onChange={(e)=>setprice(e.target.value)} />
              </div>
              <div className='flex gap-4 mt-3'>


              <input type="text" placeholder='Enter Product category' name='product_category' className='focus:outline-1 focus:outline-emerald-300 outline-0 py-2 px-4 border rounded-3xl w-full' onChange={(e)=>setcategory(e.target.value)}/>
              <input type="text" name="product_stock" id="" className='focus:outline-1 focus:outline-emerald-300 outline-0 py-2 px-4 border rounded-3xl w-full' onChange={(e)=>setstock(e.target.value)}/>
              {/* <input type="file" placeholder='' name='product-image' className='focus:outline-1 focus:outline-emerald-300 outline-0 py-2 px-4 border rounded-3xl w-full' onChange={(e)=>setimages(e.target.value)} /> */}
            
  <input
    class="relative m-0 block w-full min-w-0 flex-auto rounded-3xl border border-solid border-neutral-300 bg-clip-padding px-3 pl-0 pr-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-3xl file:h-11 file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3  file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:text-black hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
    type="file"
    id="formFileMultiple"
    multiple />
              </div>
              <div className="mt-3 justify-end gap-2 flex">
              <button className='bg-emerald-400 py-2 px-4 rounded-sm text-white capitalize text-sm hover:bg-emerald-600 duration-100' onClick={handleSubmit}>submit</button>
              <button className='border border-emerald-400 py-2 px-4 rounded-sm text-emerald-400 capitalize text-sm hover:bg-emerald-600 duration-100 bg-transparent'>cancel</button>
              </div>
            </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}
