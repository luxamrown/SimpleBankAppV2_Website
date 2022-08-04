import React from 'react'
import ButtonComponent from '../button'

export default function TransactionHistoryComponent() {
  return (
    <>
        <div className='mx-auto w-[35rem] h-[50rem] overflow-hidden overflow-y-scroll mt-10 border p-5'>
            <div className='my-5'>
                <h1 className='text-center font-bold text-xl'>Transaction History</h1>
            </div>
            <div className='border shadow-md p-5 my-5'>
                <h1>Transaction Id: 8ca6e871-d6ea-4e35-8702-cb93fe80a05b</h1>
                <h1>To : 2124632229</h1>
                <h1>Amount : 50000</h1>
                <h1>Message : buat beli chattime</h1>
                <h1>Date : 2022-07-29 10:46</h1>
            </div>
            <div className='border shadow-md p-5 my-5'>
                <h1>Transaction Id: 8ca6e871-d6ea-4e35-8702-cb93fe80a05b</h1>
                <h1>To : 2124632229</h1>
                <h1>Amount : 50000</h1>
                <h1>Message : buat beli chattime</h1>
                <h1>Date : 2022-07-29 10:46</h1>
            </div>
            <div className='border shadow-md p-5 my-5'>
                <h1>Transaction Id: 8ca6e871-d6ea-4e35-8702-cb93fe80a05b</h1>
                <h1>To : 2124632229</h1>
                <h1>Amount : 50000</h1>
                <h1>Message : buat beli chattime</h1>
                <h1>Date : 2022-07-29 10:46</h1>
            </div>
            <div className='border shadow-md p-5 my-5'>
                <h1>Transaction Id: 8ca6e871-d6ea-4e35-8702-cb93fe80a05b</h1>
                <h1>To : 2124632229</h1>
                <h1>Amount : 50000</h1>
                <h1>Message : buat beli chattime</h1>
                <h1>Date : 2022-07-29 10:46</h1>
            </div>  
        </div>
        <div className='mx-auto w-56'>
            <ButtonComponent title='Back' link={{url:'/dashboard', newtab:false}}/>
        </div>
    </>
  )
}
