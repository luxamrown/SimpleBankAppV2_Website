import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Layout from '../../component/layout'
import TransferComponent from '../../component/transfer'

export default function TransferPage() {
    const router = useRouter()


    useEffect(()=>{
        window.sessionStorage.setItem("cust_id", "s")
        window.sessionStorage.setItem("token", "s")
        const cust_id = window.sessionStorage.getItem("cust_id")
        const token = window.sessionStorage.getItem("token")
        if (!cust_id || !token){
            router.push("/login")
            return
        }
    }, [router])
  return (
    <Layout title='Transfer'>
      <TransferComponent />
    </Layout>
  )
}
