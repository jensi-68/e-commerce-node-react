import React, { useEffect, useState } from 'react'
import Layout from '../layout/Layout'
import axios from 'axios';
import { BsFillPencilFill, BsFillTrash3Fill } from "react-icons/bs";
import { useParams } from 'react-router-dom';
export default function ViewProducts() {

  const [data, setdata] = useState([])
  const { id } = useParams()
  const user_id = `${id}`
  useEffect(() => {
    axios.get('http://localhost:4000/api/products')
      .then(function (response) {
        console.log(response.data.productdata)
        setdata(response.data.productdata)
        // setLoader(true)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/product/${id}`);
      setdata(data.filter((i) => i._id !== id));
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <Layout>

        <div className="mx-auto capitalize w-full flex justify-center items-center text-3xl mb-1 text-black">
          <div>all products</div>
        </div>
        <div className='flex-wrap flex mx-1 capitalize text-black'>
          {
            data.map((i) => {
              return (
                <>
                  <div className='bg-white p-3 mx-2 my-2 w-31 shadow-lg'>
                    <a href={`/ViewSingle/${i._id}`}>
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
                    </a>
                    <div className="flex gap-1 justify-end items-center">
                    <div className="delete-btn flex justify-end items-center">
                      <button className='bg-red-400 py-2 px-3 rounded-md text-white text-xl'><a href="UpdateProduct"><BsFillPencilFill/></a></button>
                    </div>
                    <div className="delete-btn flex justify-end items-center">
                      <button className='bg-red-400 py-2 px-3 rounded-md text-white text-xl' onClick={() => deleteProduct(i._id)}><BsFillTrash3Fill/></button>
                    </div>
                    </div>
                      {/* <div className="btns flex justify-between items-center capitalize mt-1">
                        <button className='capitalize py-1 px-3 bg-green-50 duration-100 border-2 rounded-sm border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>add to cart</button>
                        <button className='capitalize py-1 px-4 bg-blue-500 text-white duration-100 rounded-sm hover:tracking-wider'>buy now</button>
                      </div> */}
                  </div>
                </>
              )
            })
          }
        </div>
      </Layout>
    </>
  )
}
