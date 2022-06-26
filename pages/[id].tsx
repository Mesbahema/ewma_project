import DetailComponent from '@/components/detail'
import { NextPage } from 'next'
import React from 'react'

const Detail: NextPage = ({id}: {id?: string}) => {
  return (
    <DetailComponent id={id}/>
  )
}

export default Detail

export async function getServerSideProps({ params: { id } }: { params: { id: string } }) {
  return {
      props: { id },
  }
}