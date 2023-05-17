import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CgLogOff } from "react-icons/cg";
import { FiPhoneCall } from "react-icons/fi";
import { HiMenuAlt1 } from "react-icons/hi";
export default function Header() {
    return (
        <>
            <header class="bg-white border-gray-200 sticky top-0 left-0 ml-[15rem] z-10">
                <div className="container">
                <div class="flex flex-wrap justify-between items-center">
                    <div className="flex justify-center items-center">
                    <div className="bars-toggle text-2xl">
                        <HiMenuAlt1/>
                    </div>
                    <a href="#" class="flex items-center">
                        <img src="/images/logo.png" class="h-14 w-20 object-cover" alt="" />
                    </a>
                    </div>
                    <div className="flex items-center">

                        <ul class="flex flex-row font-medium text-slate-700 mt-0 mr-6 space-x-8 text-sm capitalize">
                            <li>
                                <a href="/UserLandingPage" class="text-gray-900  text-slate-700  hover:underline" aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-900 text-slate-700 hover:underline">category</a>
                            </li>
                            <li>
                                <a href="#" class="text-gray-900 text-slate-700 hover:underline text-2xl"><AiOutlineShoppingCart /></a>
                            </li>

                        </ul>
                        <div class="flex items-center">
                            <a href="tel:5541251234" class="mr-6 text-sm  text-gray-500  hover:underline text-2xl"><FiPhoneCall /></a>
                            <a href="/logout" class="text-sm  text-white bg-blue-700 rounded px-2 py-1 duration-300 ease-in hover:bg-blue-400"><CgLogOff/></a>
                        </div>
                    </div>
                </div>
                </div>
            </header>



        </>
    )
}
