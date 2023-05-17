import { Checkbox, Radio } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Price } from './Price'
// import { BsFillTrash3Fill } from "react-icons/bs";

export default function UserLandingPage() {
  const [data, setdata] = useState([])
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [allCategory, setCategory] = useState([])
  const [checked, setchecked] = useState([])
  const [radio, setRadio] = useState([]);
  const [currentPage, setCurrentPage] = useState('');
  const [totalPages, setTotalPages] = useState('2');
  const [products, setProducts] = useState([]);
  const { id } = useParams()
  const user_id = `${id}`
  useEffect(() => {
    axios.get('http://localhost:4000/api/products')
      .then(function (response) {
        // console.log(response.data.productdata)
        setProducts(response.data.productdata)
        // setLoader(true)
      })
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  useEffect(() => {
    axios.get('http://localhost:4000/api/products')
      .then(function (response) {
        const uniqueCategories = response.data.productdata.filter(
          (category, index, self) =>
            index === self.findIndex(c => c.id === category.id)
        );
        console.log(response.data.productdata);
        // setCategory(response.data.productdata)
        setCategory(uniqueCategories)
        console.log(uniqueCategories);
      })
      .catch(function (error) {
        console.log(error);
      })
  }, [])

  // filter by category
  const handlefilter = (value, id) => {
    let all = [{ ...checked }]
    if (value) {
      all.push(id)
    }
    else {
      all = all.filter(i => i !== id)
    }
    setchecked(all)
  }
  // const click = (newvalue)=>{
  //   console.log(newvalue)

  // }
  // next page
  const nextPage = (newvalue) => {
    setCurrentPage(newvalue)
    if (currentPage < totalPages) {
      const nextpage = currentPage + 1
      axios.get(`http://localhost:4000/api/paginate?page=${nextpage}&size=10`)
      .then(function (response) {
        // const data2 = response.data
        console.log(currentPage);
        // console.log(nextpage);
          setProducts(response.data.productdata);
          setCurrentPage((prevPage) => prevPage + 1);
          console.log(response.data.productdata);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }

  // previous page
  const PrevPage = () => {
    // if (currentPage > 1) {
    //   const prevPage = currentPage - 1;
    //   axios.get(`/api/products?page=${prevPage}&limit=10`)
    //     .then((response) => {
    //       if (response.ok) {
    //         return response.json();
    //       } else {
    //         throw new Error('Error fetching data');
    //       }
    //     })
    //     .then((data) => {
    //       setProducts(data.products);
    //       setCurrentPage(prevPage);
    //     })
    //     .catch((error) => console.error('Error:', error));
    // }
  };

  // search

  const handleSearch = async (e) => {
    e.preventDefault();

    try {
      console.log(searchTerm);
      const response = await axios.get(`http://localhost:4000/api/product/search/${searchTerm}`);
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error searching:', error);
    }
  };


  // add to cart

  const addToCart = (product) => {
    // Send the selected product to the backend API to add to the cart
    try {
      product = {id:1 , name:'first'}
      axios.post('http://localhost:4000/api/product/addtocart', product)
      console.log("Request data:");
console.log(product);  
    } catch (error) {
      console.log(error);
    }
    
      // .then(response => {
      //   console.log('Product added to cart:', response.data);
      //   // Handle success, update the UI or show a notification
      // })
      // .catch(error => {
      //   console.error('Error adding product to cart:', error);
      //   // Handle error, show an error message
      // });
  };

  return (
    <>

      <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-2">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>
          <div className="flex md:order-2">
            <button className='px-3 text-2xl '><AiOutlineShoppingCart/></button>
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">    <a href="/Login">login</a></button>
            <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
            </button>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex flex-col md:p-0 font-medium  bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a href="UserLandingPage" className="block py-2 pl-3 pr-4 text-gray-900 bg-blue-700 rounded md:bg-transparent" aria-current="page">Home</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
              </li>
              <li>
                <a href="#" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact</a>
              </li>
              <input
          type="text" className='border border-gray-300 bg-transparent rounded-md outline-none p-2'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" onClick={handleSearch}>Search</button>
            </ul>
          </div>
        </div>
      </nav>
      {JSON.stringify(checked, null, 4)}
      <main className='mt-20 container'>
        <div className="flex w-full">
          <div className="filter-sec w-1/4 capitalize text-xl text-black">
            <span>filter by</span>
            <div className="bg-white w-full p-1 flex flex-col ">
              category :
              {/* <div className="">

<input type="checkbox" name="" id="" /> under 250
</div>
               <div className="">

<input type="checkbox" name="" id="" /> under 350
</div>
               <div className="">

<input type="checkbox" name="" id="" /> under 450
</div>
               <div className="">

<input type="checkbox" name="" id="" /> under 699
</div> */}

              {
                allCategory?.map((i) => {
                  return (
                    <>
                      <Checkbox key={i._id} onChange={(e) => handlefilter(e.target.checked, i._id)}>
                        {i.category}
                      </Checkbox>
                    </>

                  )
                })
              }
            </div>
            <div className="bg-white w-full p-1 flex flex-col ">
              price :
              {/* <div className="">

<input type="checkbox" name="" id="" /> under 250
</div>
               <div className="">

<input type="checkbox" name="" id="" /> under 350
</div>
               <div className="">

<input type="checkbox" name="" id="" /> under 450
</div>
               <div className="">

<input type="checkbox" name="" id="" /> under 699
</div> */}


              <Radio.Group onChange={e => setRadio(e.target.value)}>
                {
                  Price.map((i) => {
                    // <div key={i._id} >

                    <Radio>{i.name}</Radio>
                    // </div>
                  })
                }
              </Radio.Group>

            </div>


          </div>


          <div className='flex-wrap flex mx-1 capitalize text-black w-full'>
            {
              products.map((i) => {
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
                     
                      <div className="btns flex justify-between items-center capitalize mt-1">
                        <button onClick={addToCart} className='capitalize py-1 px-3 bg-green-50 duration-100 border-2 rounded-sm border-green-600 text-green-600 hover:bg-green-600 hover:text-white'>add to cart</button>
                        <button className='capitalize py-1 px-4 bg-blue-500 text-white duration-100 rounded-sm hover:tracking-wider'>buy now</button>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </main>

      {/* pagination */}

      <nav aria-label="Page navigation example" className='container flex justify-end items-center'>
        <ul class="inline-flex items-center -space-x-px">
          <li>
            <button onClick={PrevPage} className='block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>

              <span class="sr-only">Previous</span>
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
            </button>
          </li>
          <li>
            <button onClick={() => nextPage('1')} className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>1</button>
          </li>
          <li>
            <button onClick={() => nextPage('2')} className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>2</button>

          </li>
          <li>
            <button onClick={() => nextPage('3')} className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>3</button>

          </li>
          <li>
            <button onClick={() => nextPage('4')} className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>4</button>

          </li>
          <li>
            <button onClick={() => nextPage('5')} className='px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>5</button>

          </li>
          <li>
            <button onClick={nextPage} className='block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'>
              <span class="sr-only">Next</span>
              <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </button>
          </li>
        </ul>
      </nav>



    </>
  )
}
