import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../layout/Layout'

export default function ViewSingle() {
    const { id } = useParams()
    const user_id = `${id}`
  
    const [singledata, setsingledata] = useState([])
    useEffect(() => {
      axios.get(`http://localhost:4000/api/products`)
        .then(function (response) {
          console.log(response.data.productdata)
          setsingledata(response.data.productdata)
          // console.log(response.result._id);
          // setLoader(true)
        })
        .catch(function (error) {
          console.log(error)
        })
    }, [])
    
  return (
    <>
    <Layout>
   
    <div className='container'>
    {
            singledata.map((i) => {
              if(i._id===id)
              {
              return (
                <>
                  <div className='bg-white p-3 mx-2 my-2 w-31 shadow-lg'>
                   
                      <div className="flex items-center justify-center">
                        <div className="img w-full h-60 bg-slate-500"></div>
                      </div>
                      <div className=" mt-2">
                        <div className="title text-2xl text-center">
                          <span className='tracking-widest font-bold '> {i.title}</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <div className="price text-lg">
                            <span><span className='text-black text-xl font-semibold'>price:</span> {i.price}</span>

                          </div>
                          <div className='text-lg'> <span className='text-black text-xl font-semibold'>stock:</span> {i.stock}</div>
                        </div>
                        <div className='text-lg'> <span className='text-black text-xl font-semibold'>category:</span> <span> {i.category}</span></div>
                      </div>
                      <div> {i.description}</div>
                  </div>
                </>
              )
              }
            })
          }
          </div>
          </Layout>

    </>
  )
}
