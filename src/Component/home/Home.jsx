import React from 'react'
import Header from '../shared/Header'
import Sidebar from '../shared/Sidebar'
import Footer from '../shared/Footer'
import Products from './Products'

export default function Home() {
  return (
    <>
    <div className='flex  '>
    <Sidebar className=''/>
    <div className='flex flex-col h-6/6 w-full '>
    <Header/>
    <Products className=""/>
    <Footer className=''/>
   
    
    </div>
   
    </div>
    
    </>
    
    
  )
}
