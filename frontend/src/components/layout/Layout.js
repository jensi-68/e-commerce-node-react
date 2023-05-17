import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Sidebar from './Sidebar'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="layout-wrapper layout-content-navbar">
        <div className="layout-container">
          <Sidebar />
          <main className='ml-60 mt-4'>
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </>
  )
}
