import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import DashboardComponent from '../../component/dashboard'
import Layout from '../../component/layout'

export default function DashboardPage() {
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
    <Layout title='Dashboard'>
      <DashboardComponent/>
    </Layout>
  )
}
