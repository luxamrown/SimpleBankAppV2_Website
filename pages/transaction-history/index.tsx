import React from 'react'
import Layout from '../../component/layout'
import TransactionHistoryComponent from '../../component/transaction-history'

export default function TransactionHistoryPage() {
  return (
    <Layout title='Transaction History'>
        <TransactionHistoryComponent/>
    </Layout>
  )
}
